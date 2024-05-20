
# 第五章 Windows病毒

头插入结果：文件太大

尾插入结果：病毒代码根本没进内存

## Com vs Exe

1. com默认加载到100h，exe不知道加载到哪
2. Exe的大小问题？

## 保护模式

- 每个进程都有自己的线性地址空间
- 对于程序的加载：不同模块加载地址不同，需要有地方存储约定的加载地址

## PE格式

![Untitled](病毒/Untitled%2082.png)

- RVA:加载后相对于整个PE文件首部的偏移量
    - 和文件偏移不同，是加载后在内存中的偏移
    - 有的段可能相同有的段可能不同
        
        ![Untitled](病毒/Untitled%2083.png)
        

## 如何执行病毒

1. 通过DosHeader找到NT头部
    1. Magic
    2. e_lfanew指示NT头部的起始偏移
2. 需要找到程序的入口地址(在NT头部)
3. OD修改入口地址
    
    通过RVA查看所属段的RVA与文件偏移是否有偏差，有就要调整
    

## 如何加载病毒

1. 简单粘贴在尾部不能加载，可能存在相关字段
    
    总大小和每个段的大小都有参数，分别在IMAGE_Option_HEADER和各个IMAGE_SECTION_HEADER中。
    其大小应该是SectionAlign（也是OptionHeader中的字段，即内存的对齐单位）的整数倍
    
2. 选取最后一个段进行病毒的写入
    1. 如果该段的内存大小小于磁盘大小，将指令直接加载到多余部分，修改内存大小VirtualSize
    2. 如果该段的大内存大小大于或等于磁盘大小，则将指令粘贴到段后，然后修改段内存大小VirtualSize和段文件大小SizeofRawData。
3. 修改ImageSize为新大小
    
    要注意的是，有时exe最后段后有一些调试信息，但它不会被加载到内存。这也许是ImageSize的意义，它阻止尾部多余信息进入内存
    
4. 这下修改入口点就可以启动了
5. 需要返回原程序
    
    ![Untitled](病毒/Untitled%2084.png)
    

## 修改入口点的问题

> 入口点在代码区之外
> 

解决思路（入口点模糊）：

1. 感染代码段
    
    ![Untitled](病毒/Untitled%2085.png)
    
2. 不修改入口点，将入口点第一行代码替换为jmp指令
    
    ![Untitled](病毒/Untitled%2086.png)
    
    - 实际操作过程中
        - 可能遇到内存权限问题

## 系统如何提供API

- 通过动态链接库对外提供api

## 如何获取api的入口地址

- 常规方法
    - 获取提供函数的dll的加载基址
        - 通过peb获取，有一个加载模块链表（环形链表）
    - 理解dll的导出表机制，并获取函数地址
        - 导出表的地址由NT头记录
        - 可以通过函数名命名，也可以通过序号命名
        - 需要知道序号的最小值x
        - 函数名表-函数地址索引表-函数地址表
        - PE格式的函数名表是函数指针表，存着函数名的首地址RVA
        
        ![Untitled](病毒/Untitled%2087.png)
        
        ![Untitled](病毒/Untitled%2088.png)
        
- 简易方法
    - 进程加载的所有系统dll基址相同
    - 感染程序直接调用系统api即可获得一样的基址

## 导入表感染

- 函数调用采用call相对偏移进行

![Untitled](病毒/Untitled%2089.png)

### 导入表 IAT

- NT头部→Import Description Table→Import Description→dll name、int table RVA和IAT table RVA

![Untitled](病毒/Untitled%2090.png)

- INT ：Import Name Table
- IAT：Import Address Table

![Untitled](病毒/Untitled%2091.png)

### 绑定导入（预先绑定）

[PE结构（四） 绑定导入表_吾乃花花的博客-CSDN博客](https://blog.csdn.net/weixin_37673331/article/details/104584969)

- 预先绑定：直接使用绝对地址（系统dll的基址固定且可知）
- 需注意
    - 只有IAT，则必然是INT的RVA，否则无法导入
    - 预先绑定必然有INT
    - 有INT用INT，否则用IAT

### dep数据执行保护

eip指向数据段时，报内存访问错误

- 绕过方法
    - 将段属性加上可执行，系统会认为是代码区
    - 关闭dep

### 重定位

需要重定位的地址记录在重定位表内

## 导入表替换感染

- 让原导入表全部指向病毒开始，而新造一个导入表项，让系统将导入函数填写到该处。这样就能保证程序正常执行

![Untitled](病毒/Untitled%2092.png)

## RTL表感染

- RTL是程序的运行时库，比如printf就是运行时库的一部分。
- 对C编写的程序，其真正入口并非我们看见的源码中main，而是RTL的初始化代码。它是必然存在的，可以作为感染对象。
- 这实际是通过特征代码判断出RTL初始化代码所在，然后对判别出的代码进行patch
- 对于不识别的RTL，或没用RTL的库，无法感染。

### CRT

- 查找特征码
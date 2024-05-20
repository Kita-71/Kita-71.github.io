# 第四章 dos下的病毒

## 实模式

![Untitled](病毒/Untitled%2054.png)

## debug

<aside>
🤔 验证CS:IP是下一条将执行的指令

![Untitled](病毒/Untitled%2055.png)

</aside>

![Untitled](病毒/Untitled%2056.png)

## com格式

![Untitled](病毒/Untitled%2057.png)

## 寄生

### 头寄生

![Untitled](病毒/Untitled%2058.png)

![Untitled](病毒/Untitled%2059.png)

- 直接Virus+Normal会导致Virus ret后停止
- 把 ret 变成nop，会运行数据段
    
    > 原来数据和指令可以放在一起，原来cpu没有能力区分数据和指令的区别
    > 
    - 把Message汇编提前，发现确实是数据段
        
        ![Untitled](病毒/Untitled%2060.png)
        
        ![Untitled](病毒/Untitled%2061.png)
        
    - 解决方法：构造jmp
- 构造jmp后，发现没打印成功
    
    ![Untitled](病毒/Untitled%2062.png)
    
    ![Untitled](病毒/Untitled%2063.png)
    
    - 原因：省流，normal没有重定位
    - 解决方法：virus运行后把normal拷贝到100h
        
        ![Untitled](病毒/Untitled%2064.png)
        
    - 结果
        
        ![Untitled](病毒/Untitled%2065.png)
        
- 加入int16，获取键盘输入
- 感染系统com
    - 省流：程序死了，edit.com有413字节，拷贝的时候把拷贝指令给覆盖掉里，6。
    - 解决方法：必须先将拷贝代码拷贝到感染程序之后
        
        现在的流程就变成了：运行病毒程序→运行拷贝”拷贝代码“的程序，jmp到新的拷贝代码，运行拷贝代码来拷贝病毒程序。
        

### 尾寄生

先跑normal，再跑virus

- 获取偏差值
    
    ![Untitled](%E7%97%85%E6%AF%92/Untitled%2066.png)
    
- 自己重定位
    
    ![Untitled](%E7%97%85%E6%AF%92/Untitled%2067.png)
    
- jmp覆盖头部
    
    ![Untitled](%E7%97%85%E6%AF%92/Untitled%2068.png)
    
- 完整版
    
    ![Untitled](%E7%97%85%E6%AF%92/Untitled%2069.png)
    
    - 流程：
        - 填写overridecode字段，保存将被覆盖的三个字节
        - 填写infectedsize字段，保存被感染文件本身的大小
        - 填写头三个字节的jmp指令
        - 运行被感染程序

### 逆插入感染

![Untitled](%E7%97%85%E6%AF%92/Untitled%2070.png)

- 病毒：执行第一部分，jmp到第二部分
- 病毒：第二部分开始先把normal拷贝到正确位置，而后执行第二部分，jmp到normal
- normal：执行
- 使用文件读写的中断修改特定内容

![Untitled](%E7%97%85%E6%AF%92/Untitled%2071.png)

![Untitled](%E7%97%85%E6%AF%92/Untitled%2072.png)

![Untitled](%E7%97%85%E6%AF%92/Untitled%2073.png)

- 省流，头部和尾部的病毒代码都要重定位。

### 引导区病毒

- 感染引导区，替换引导区原始的引导代码，从而获得执行。之后还原被修改的引导区，并将执行权限交给原来的引导代码，从而保持正常的工作
- 要做的事情：
    - 将原来引导区内的内容全部保存到空闲的簇里，并把该簇在fat表上的位置修改为0xfff。→只修改引导记录后面的部分就好
    - 把要执行的内容copy到引导区（为了不重定位，直接加入填充字节直到代码处）
    - 结束时将空闲簇原来的引导内容copy回7c00

![Untitled](%E7%97%85%E6%AF%92/Untitled%2074.png)

## 链式病毒

- 只保留一份病毒拷贝，利用文件目录项，将受感染文件的头簇指向病毒。

![Untitled](%E7%97%85%E6%AF%92/Untitled%2075.png)

![Untitled](%E7%97%85%E6%AF%92/Untitled%2076.png)

- 病毒启动
    - 加载的是病毒的首簇并执行
    - 病毒获取执行程序的名字，获取对应目录项，并在保留字段内获取原簇号，并加载（加载原程序的病毒代码可能被原程序覆盖）
    - 跳到原文件执行
- 病毒感染
    - 首次感染，放到空闲扇区
    - 将被感染文件首簇存目录项保留段
    - 修改首簇号指向病毒的首簇，同时被感染文件的大小修改为病毒的真实大小。
        
        ![Untitled](病毒/Untitled%2077.png)
        
- Getexe获取执行文件名：

![Untitled](病毒/Untitled%2078.png)

- GetInfectedSector获取被感染文件原扇区号的函数
- FindRootDirEntry在根目录获取指定文件名的目录项

## 中断向量替换

- 步骤
    - 识别中断向量和中断表
    - 非驻留式的中断向量修改
    - 驻留式中断向量修改

![Untitled](病毒/Untitled%2079.png)

- 中断向量表
    
    ![Untitled](病毒/Untitled%2080.png)
    
    - 不少中断处理程序来自一个段
- 中断处理程序：根据表项定位地址
- 驻留？不用驻留
    
    中断处理程序要为所有程序服务，所以它的特点就是不退出一直驻留在内存中。
    

### 感染

![Untitled](病毒/Untitled%2081.png)

### 驻留式中断向量修改

- 使用dos系统提供的终端调用
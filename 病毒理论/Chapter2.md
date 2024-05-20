# 第二章 内存中的病毒

## 病毒基本能力

- 执行 --最为重要，不能执行一切无用
- 潜伏
    - 病毒执行并非简单执行自己的代码，它还需要执行被感染对象正常的代码，否则无法潜伏。
- 破坏
- 传染

## 内存模拟病毒

![Untitled](病毒/Untitled%2021.png)

### 总体流程

![Untitled](病毒/Untitled%2022.png)

- 修改随机基址为固定基址
1. 插入跳转指令jump
    
    ![Untitled](病毒/Untitled%2023.png)
    
2. 计算jmp的偏移
    
    ![Untitled](病毒/Untitled%2024.png)
    
3. 覆盖原5个字节的指令
4. 覆盖打印指令后的指令
    
    ![Untitled](病毒/Untitled%2025.png)
    
5. 跳回指令
    
    ![Untitled](病毒/Untitled%2026.png)
    

## 文件直接修改

![Untitled](病毒/Untitled%2027.png)

- 558BEC是个函数都有
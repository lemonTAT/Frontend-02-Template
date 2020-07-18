学习笔记

# Completion 类型
    * Completion Record 用于描述异常、跳出等语句执行过程
    
    Completion Record 表示一个语句执行完之后的结果，它有三个字段：
    [[type]] 表示完成的类型，有 break continue return throw 和 normal 几种类型；
    [[value]] 表示语句的返回值，如果语句没有，则是 empty；
    [[target]] 表示语句的目标，通常是一个 JavaScript 标签


语句有几种分类

    普通的语句--从前到后顺次执行
        * 声明类语句：var、const、let、class、function
        * 表达式语句
        * 空语句
        * debugger 语句
    语句块
    控制型语句
    带标签的语句
    
try catch finally
```js
    
function foo(){
  try{
    return 0;
  } catch(err) {

  } finally {
    return 1;
  }
}

console.log(foo());
```

# 类型转换

    unboxing 拆箱转换
        ToPremitive
        valueOf
        toString
        
     boxing（装箱）
        类型	         对象	                    值
        Number	new Number(1)	            1
        String	new String("a")	            "a"
        Boolean	new Boolean(true)	        true
        Symbol	new Ojbect(Symbol("a"))	    Symbol("a")

# 函数调用

    执行上下文、执行上下文栈、作用域、作用域链



# JS执行机制

     1、JavaScript 是单线程语言
     2、Event Loop 是 JavaScript 的执行机制
     
     * js是单线程语言通过Event Loop实现异步

```
    * 宏任务：包括整体代码script，setTimeout，setInterval， setImmediate
    * 微任务：原生Promise(有些实现的promise将then方法放到了宏任务中)，process.nextTick，MutationObserver
```

    综合分类方式：
        • 执行一个宏任务，过程中如果遇到微任务，就将其放到微任务的【事件队列】里
        • 当前宏任务执行完成后，会查看微任务的【事件队列】，并将里面全局的微任务依次执行完
        
    为什么Promise 里的代码比setTimeout先执行
        • Promise永远往队列尾部添加微观任务
        • setTImeout等宿主API则会直接添加宏观任务
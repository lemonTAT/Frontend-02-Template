#  语言按语法分类
    1、非形式语言
      中文，英文
    2、形式语言(乔姆斯基谱系) • 0型 无限制文法
      1型 上下文相关文法
      2型 上下文无关文法
      3型 正则文法
      
# 产生式(BNF)
    • 用尖括号括起来的名称来表示语法结构名
    • 语法结构分成基础结构和需要用其他语法结构定义的复合结构 • 基础结构称终结符
    • 复合结构称非终结符
    • 引号和中间的字符表示终结符 • 可以有括号
    • * 表示重复多次
    • | 表示或
    • + 表示至少一次
    
```
练习一：
    1、终结符：
      Number
      + - * / ( )
    2、非终结符
      MultiplicativeExpression
      AdditiveExpression
      ArithmeticExpression
      BracketExpression
    
    3、产生式
      <MultiplicativeExpression> ::= <Number> | <MultiplicativeExpression> "*" <Number> | <MultiplicativeExpression> / <Number>
      <AdditiveExpression> ::= <MultiplicativeExpression> | <AdditiveExpression> "+" <MultiplicativeExpression> | <AdditiveExpression> "-" <MultiplicativeExpression>
      <ArithmeticExpression> ::= <Number> | <AdditiveExpression>
      <BracketExpression> ::= <Number> | "(" <ArithmeticExpression> ")"
```

# 现代语言分类
    1、按用途
        数据描述语言（JSON、 HTML、 XAML、 SQL 、CSS等）
        编程语言（Javascript、 Java、C、 C++、C#、Python Ruby、Lisp、Clojure等）
    2、按表达方式
        声明式语言（JSON、 HTML、 XAML、 SQL 、CSS、Lisp、Clojure）
        命令式语言（Javascript、 Java、C、 C++、C#、Python Ruby）
    3、编程语言性质
        图灵完备性
            命令式——图灵机：goto if和while
            声明式——lambda：递归
        动态和静态
            动态:
                • 在用户的设备/在线服务器上
                • 产品实际运行时
                • Runtime
            静态:
                • 在程序员的设备上
                • 产品开发时
                • Compiletime
        类型系统
            动态类型系统与静态类型系统
            强类型与弱类型
                • String + Number
                • String == Boolean
            复合类型 
                • 结构体
                • 函数签名 
            子类型
            泛型
                • 逆变/协变


# 一般命令式编程语言

    原子级：Atom （关键字、变量名、直接量）
    表达式：Expression （由原子通过运算符连接或者加上一些特殊的符号）
    语句：Statement （由表达式加上特定标识符、符号形成）
    结构化：Structure （组织代码，把代码分成不同的块，便于复用）
    程序：Program （管理模块和安装）

# Javascript按运行时分为7种类型
    Number
    String 
    Boolean 
    Undefined
    Null
    Symbol
    Object
    
```js
    // 根据双精度浮点数的定义，Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。
    // 检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法
        console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
```

```
    Object表示一组属性的集合（属性名:属性值）
    
    属性名可以是String类型的，也可以是Symbol类型的
    属性值分为：数据属性和访问器属性
    
    数据属性：
        [[value]]: 属性的值
        writable: 决定属性能否被赋值
        enumerable: 决定 for in 能否枚举该属性
        configrable ：决定该属性能否被删除或者改变特征

    访问器属性：
        getter: 函数或 undefined，在取属性值时被调用
        setter: 函数或 undefined，在设置属性值时被调用
        enumerable: 决定 for in 能否枚举该属性
        configrable ：决定该属性能否被删除或者改变特征
    
    原型：所有对象都有私有字段 [[prototype]]，就是对象的原型
    
    原型链：获取一个对象属性，如果对象本身不存在，则会向上访问对象的原型是否存在该属性，循环直到原型为空或者找到为止，从而构成原型链

    判断对象和属性关系的API
        hasOwnProperty(propertyName) 检查给定的属性在当前对象实例中是否存在
        isPropertyOf() 用于检查传入的对象是否是当前对象的原型
        propertyIsEnumerable（propertyname） 检查给定的属性是否能够使用for-in枚举
```

```
    特殊行为的对象：
    1、Function对象是一个带call方法的对象。
      凡是使用双括号定义的行为都是对象的内置行为。这意味着， 我们在js中无法使用任何方法访问到它，使用function关键字，箭头运算符或者Function构造器创造的对象， 会有[[call]]这个行为。意味着我们可以使用f()这样的语法把对象当作函数调用时， 则会访问到[[call]]这个行为。如果这个对象没有[[call]]则会产生错误
    2、array object[[length]]--随着子元素的增加而自动增加
    3、Object.prototype[[setPrototypeOf]]
    4、host object： 宿主环境提供的浏览器中的window
    5、Array：Array 的 length 属性根据最大的下标自动发生变化
    6、Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了
    7、String：为了支持下标运算，String 的正整数属性访问会去字符串里查找
    8、Arguments：arguments 的非负整数型下标属性跟对应的变量联动
    
    特权对象--为了特定能力或者性能，而设计出来：
    1、Error: [[ErrorData]]
    2、Boolean: [[BooleanData]]
    3、Number: [[NumberData]]
    4、Date: [[DateValue]]
    5、RegExp: [[RegExpMatcher]]
    6、Symbol: [[SymbolData]]
    7、Map: [[MapData]]
```

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


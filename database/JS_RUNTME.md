## 从 JS 运行时说开去

### 背景
我最近在研究 bun.js ，发现它惊人的快；兼容了ESM、CMJ；可以 All in one，写 server、写 test、管理依赖包、还能打包! 文档中提到了他是使用 Zip 开发的一个 Javascript 运行时，这个时候我便有了想把这些比较抽象混乱的概念做一个总计。

### 内容

#### JavaScript 运行时
我们知道 JS 是一种，高级程序语言，它最终会被我们的引擎转换为二进制文件，然后在计算机上运行。那么 JavaScript 引擎主要就负责解释和执行我们的代码。
![JS引擎](https://bucket-for-image.s3.bitiful.net/JS引擎.jpeg "引擎")
任何 JavaScript 引擎通常都包含一个调用栈和一个堆。调用栈是代码执行的地方。堆是一个非结构化的内存池，用于存储应用程序所需的所有对象。

除此之外，我们知道还有很多的 WebApi，例如 DOM，WebGL等，他们本身并不是JavaScript语言的一部分，却建立在JavaScript语言核心的顶部，为使用JavaScript代码提供额外的超强能力。

我们现在可以执行JS、操作DOM了，但是怎么执行却还不知道，那就还需要我们运行时的第三部分，回调队列。回调队列包括准备好执行的回调函数。回调队列确保回调以先进先出（FIFO）方法执行，并在堆栈为空时将其传递到堆栈中。


![运行时](https://bucket-for-image.s3.bitiful.net/运行时.jpeg?no-wait=on "运行时")

这时，你一定会想到 Node， 这个架构和 Node 有什么联系呢，很显然，Node 中没有 WEB APIs，因为它是一门服务端的语言，不涉及操作前端页面的展示。此外就是，Node 运行时的 js 引擎和 Chrome 浏览器的 js 引擎是一样的，都是 V8。不同的浏览器运行时之间，也有差异，例如：
* Mozilla 为 Firefox 开发的 SpiderMonkey
* Safari 浏览器提供支持的 JavaScriptCore
* Internet Explorer 提供支持的 Chakra
* Chrome 的 V8

然后就是我们刚刚提到了 bun.js 运行时，它其实用的 js 引擎就是 JavaScriptCore。

最后总结一下，我们将 JavaScript 运行时视为包含运行 JavaScript 所需的所有组件的房子。这个房子包括 JavaScript 引擎、Web API 和回调队列。


#### JavaScript 执行环境
我们现在来看一下，JS 引擎在执行代码的之后会做那些事情。当浏览器的 JS 引擎遇到 <scrip t> 标签时，会创造一个特殊的环境来进行代码的转换与执行。这个环境也就是我们平常见到的 context ，执行上下文。

有两种执行上下文，第一种时全局执行上下文（GEC），另一种时函数执行上下文 （FEC）。每一个 JS 文件的全局执行上下文有且只有一个。

现在我们展开讲讲，执行上下文是如何被创建的，它分为两个阶段：
1. 创建阶段
2. 执行阶段

创建阶段主要干 3 个事情：
1. 创建一个变量对象 （variable object）
   1. 在 GEC 中：
     * 声明变量的时候，会在对象增加一个 key，并将其 value设置为 undefined
     * 声明函数的时候，也会在 VO 中添加一个指像该函数的属性，并放在内存中
  这里的区别在哪？**函数已经放在内存里面了** 这意味着在运行之前，就可以访问函数了。
   2. 在 FEC 中：
     * 创建了一个 arguments 类数组对象 
2. 创建作用域链
      * 每个函数上下文都会创建一个作用域，作用域相当于是一个空间/环境，变量和函数定义在这个空间里，并且可以通过一个叫做作用域查找的过程访问。
      * 规则是这样的：如果函数被定义在另一个函数内部，处在内部的函数可以访问自己内部的代码以及外部函数（父函数）的代码。这种行为被称作词法作用域查找。但外部函数并不能访问内部函数的代码。
3. 设置this关键字的值
     1. 在 GEC 中：
        * 在GEC（所有函数和对象之外）中，this指向全局对象——window对象。
        * 由 var 关键字初始化的函数声明和变量会被作为全局对象
      2. 在 FEC 中：
        * 在FEC中，并没有创建this对象，而是能够访问this被定义的环境。
          * 函数被定义在 GEC 中，指向 window
          * 在对象中被定义，指向对象

然后就是执行阶段：
VO包含的变量值为undefined，如果这时就运行代码，肯定会报错，我们无法执行未定义的变量。
在执行阶段，JavaScript引擎会再次读取执行上下文，并用变量的实际值更新VO。编译器再把代码编译为计算机可执行的字节码后执行。


现在通过一个简单的题目，来熟悉和补充上面的知识：

``` js
  console.log(a) // ReferenceError 不可以变量提升
  console.log(b) // ReferenceError 不可以变量提升
  console.log(c) // undefined  变量提升

function up() {  
  console.log(a) // ReferenceError 不可以变量提升
  console.log(b) // ReferenceError 不可以变量提升
  console.log(c) // undefined  变量提升
}

const d = function () {
  console.log(this.a)  //  undefined  此时还没挂到全局对象上
   console.log(this.b)  // undefined 此时还没挂到全局对象上
  console.log(this.c)  // undefined 此时还没挂到全局对象上
}

const e = () => {
  console.log(this.c)  //  undefined  此时还没挂到全局对象上
   console.log(this.a) //  undefined  此时还没挂到全局对象上
   console.log(this.b) //  undefined  此时还没挂到全局对象上
}
d()  
e() 
up()  // undefined  ReferenceError: Cannot access 'a' before initialization


let a = 'no_up'
const b = 'no_up'
var c ='up'

const f = function () {
  console.log(this.c)   // up  只有由 var 的才会挂到 window上 
   console.log(this.a)   // undefined  let 不会挂到 window上
   console.log(this.b)   // undefined 同理
}

const g = () => { 
  console.log(this.c)  // up  
   console.log(this.a)  // undefined   let 不会挂到 window上
   console.log(this.b)  // undefined 
}


f()
g()
up()
```


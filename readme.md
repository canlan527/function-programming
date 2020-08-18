# 函数式编程
## 开发体系
- 函数式编程
- 设计模式
- 面向对象

## 一等公民 First-class-Function
### 函数作用
- 声明
- 调用
- 赋值
- 传参
- 返回
- 构造函数
- 类实例
- 立即执行

```js
    function test() {

    }

    test();

    var test= function() {

    }
    test()

    // 作为参数 作为返回值
    function add (a, b) {
      return a + b;
    }
    function minus (a, b) {
      return a - b;
    }
    function computed(a, b, fn) {
      return fn(a, b);
    }
    let result = computed(1, 2, add)
    console.log(result) // 3

    // 构造函数
    function Compute(a, b) {
      this.a = a;
      this.b = b;
      this.add = function() {
        return this.a + this.b;
      }
      this.minus = function() {
        return this.a - this.b;
      }
    }
    const oC = new Compute(10, 1)
    let r = oC.add();
    console.log(r) // 11


    // 立即执行函数
    const t1 = (function() {
      function Compute(a, b) {
        this.a = a;
        this.b = b;
        this.add = function() {
          return this.a + this.b;
        }
        this.minus = function() {
          return this.a - this.b;
        }
      }
      return new Compute(9, 3);
    })()
    
    console.log(t1.add()); // 12
```



## JS 编程特点
- 函数式编程 和 面向对象编程 的混编语言
- 可扩展性强

## 语言类别
- 弱类型语言特点： 对变量声明不进行数据类型的规定 
  - 灵活 
  - 易学
  - 不可控 -> 导致容易出现异常、bug
- 强类型语言特点： 声明任何变量都得以其数据类型为基础

## 面向对象与函数式编程关系
- 复杂的 this 的指向  call / apply / bind
- 对象访问本身带来的程序性能 例如： obj.xxx


举个栗子：
```html

  <h1 class="J_text">jxz eighteen cm penis</h1>
  <button class="J_btn">click to change</button>

  <script>
    function Test() {
      this.oText = document.getElementsByClassName('J_text')[0];
      this.oBtn = document.getElementsByClassName('J_btn')[0];
      this.content = 'jxz twenty cm cock'
    }
    Test.prototype = {
      init: function() {
        this.bindEvent();
      },
      bindEvent: function() {
        // 通过 bind 改变 this 指向
        this.oBtn.addEventListener('click', this.changeContent.bind(this), false)
      },
      changeContent: function() {
        var content = this.content
        console.log(this)
        this.oText.innerHTML = content;
      }
    }
    new Test().init();
  </script>
```

> 在哪些时候必须使用 面向对象 ：  需要高度复用的时候

## 函数式编程特点
- 易读 易维护
## 函数式编程 概念
函数是第一类对象， 不依赖任何其他对象 独立存在。

```js
    function test() {
      function inner() {

      }
      return inner()
    }

    var test = function() {

    }

    var arr = [function() {}, function(){}]

    var obj = {
      test: function() {

      }
    }

```




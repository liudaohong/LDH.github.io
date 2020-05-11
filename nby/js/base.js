/*
/!*
弹出警告框
alert("这是我的第一行JS");
*!/
//向body里面输出一个内容
document.write("你看我出不出来");
//向控制台输出
console.log("你好控制台");
/!*
字面量（java里面叫做常量 是不可变值）

* *!/
//声明变量
var a;
a = 123;
a = 456;
a = "1234";
console.log(a);

var str = "helloWorld\'hahha\'";

alert(str);
//typeof
//来检查一个变量的类型

console.log(typeof str);
//在js中可以表达的number最大值
console.log(Number.MAX_VALUE);

/!*
在JS里面 我们需要表示16进制 需要以0x来开头
表示8进制 需要以0o开头
表示二进制 需要以0d开头
*!/
var c = 0x123;
var d = 0o17;

console.log(d);


/!*
* 运算符也叫操作符
* typeof也是操作符 返回值是string
*
*
* 注意点 ：
* 任意值和NaN做运算都是NaN
* *!/

var str = "haha";
var end = NaN;
console.log(typeof (str + end) + str + end)
console.log(5 > "7");

/!*
* 对象
* *!/
//创建对象
var obj = new Object();
console.log(typeof obj);


/!*

* 只有在函数内部声明的变量才是 局部变量 外部不能访问
* 在只是结构提里面声明的变量是不区分局部还是全局的都可访问。
*
* *!/
function test() {
    //这边就是方法体里面声明的变量是局部变量 只能在方法体里面使用
    var test1 = "hello";
    var test2 = "world";
    try {
        var value = document.getElementById("hah").value;
        throw "no have this ID";
        return test1 + "\n" + test2;
        throw "empty";
    } catch (e) {
        document.write(e + "这句是上面返给我们的错误");
    } finally {
    }
}

console.log(test());

//测试with 的效率问题
function func() {
    console.time("func");
    var obj = {a: [1, 2, 3]};
    for (var i = 0; i < 100000; i++) {
        var v = obj.a[0];
    }
    console.timeEnd("func");
}

func();

function funcWith() {
    console.time("funcWith");
    var obj = {a: [1, 2, 3]};
    with (obj) {
        for (var i = 0; i < 100000; i++) {
            var v = a[0];
        }
    }
    console.timeEnd("funcWith");
}

funcWith();


/!*
* 函数
*  -函数也是一个对象
*  -函数中可以封装一些功能
*  -函数中可以保存一些代码在需要的时候调用。
*  -使用typeof检查一个函数对象时 会返回function
*
* *!/

function l_sum(a,b) {
    console.log(a+b);
}


//立即执行函数（匿名函数）
(function() {
    alert("我是一个匿名函数~~~");
})();

//原型对象

function  MyClass() {


}

var per = new MyClass();
per.toString = function () {
    return "我是一个快乐的小person";

}


//垃圾回收机制 gc


















*/


//数组
var arr = new Array();
arr[0]=1;
arr[1]=2;
console.log(arr+""+arr.length);



/*
*  正则表达式
*
*  语法：
*  var reg = new RegExp("正则表达式","匹配模式");
*
*  正则表达式的方法：
*   test();
* */

//创建正则表达式对象
var reg = new RegExp("[A-z]");

console.log(reg.test("12345a"));





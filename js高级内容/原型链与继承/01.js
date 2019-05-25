function Person(name){
	this.name = name || 'person'
	this.eat = function() {
		console.log('eatting');
	}
}
Person.prototype.sayHi = function() {
	console.log('hello world');
}

/*
 
	--函数名后边的括号有两个作用：
		++函数调用
		++传参
	--函数名与new连用以后，构造函数
		++只有传参

	new Person
	{
		name : 'person',
		eat : function(){},
		__proto__ : {
			constructor:Person,
			sayHi : function(){},
			__proto__ : object
		}
	}

*/
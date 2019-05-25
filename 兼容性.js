// 能力检测，解决兼容性问题


/* 函数功能：兼容为元素绑定事件
参数：元素， 事件类型， 事件处理函数
返回值：事件添加方法
ele.addEventListener是方法，不加括号，判断有没有这个方法
attachEvent 只有IE8可用
addEventListener() 谷歌火狐可用
*/ 
function addEventListener(element, type, fn){
	if(element.addEventListener){
		element.addEventListener(type, fn, false);
	} else if(element.attachEvent){
		element.attachEvent("on"+type, fn);
	} else {
		element["on"+type]=fn;    //element.onclick = function(){}; onclick需要拼接
	}
}

// 获取样式
// 参数 元素 样式名
// currentStyle 只有IE支持
// getComputedStyle IE9以下不支持
// 属性如果没有是undefined， 属性用typeof检测，因为属性可以是数值，可以是字符串，可以是布尔值
// 方法不需要用typeof检测，因为typeof时候，有是function。不用typeof检测，没有是undefined
// 对象中，window的方法(window可以省略)，没有也不会报错
function getStyle(element, styleName){
	if(typeof element.currentStyle !== 'undefined'){
		// element.currentStyle 是一个对象，styleName是对象中的一个属性
		return element.currentStyle[styleName];
	} else {
		//getComputedStyle是一个方法，返回值是所有样式的集合（对象），由对象中取属性
		return getComputedStyle(element)[styleName];	
	}
}

function getStyle(element,styleName){
	// element.currentStyle是一个对象，stylename是对象中的一个属性
	// getComputedStyle是一个方法，返回值是一个对象，由对象中取属性
   var style=element.currentStyle || window.getComputedStyle(element);
   return style[styleName];
}


// 获取标签内文本
// box.innerText---->ie没问题，火狐有问题
// box.textContent---->ie有问题，其他没问题
// 此方法有问题，如果是元素中为空，那么就失效了
// function getText (ele) {
// 	if(ele.textContent) {
// 		return ele.textContent;
// 	} else {
// 		return ele.innerText;
// 	}
// }
function getText(element){
	if(element.innerText !== undefined){
		return element.innerText;
	} else {
		return element.textContent;
	}
};

function setText(element, value){
	if(element.innerText === 'string'){
		element.innerText = value;
	} else {
		element.textContent = value;
	}
};

// 判断标签内的样式名,如果有取出该标签？？？？？？？
function getByClass(cls, element){
	// 函数参数默认值方式
	element	= element || document.body;
	var arr = [];
	var tags = element.getElementsByTagName('*');
	for(var i = 0; i < tags.length; i++){
		var classArr = tags[i].className.split(' ');
		for(var j = 0; j < classArr.length; j++){
			if(classArr[j] === cls){
				arr.push(tags[i]);
				break;
			}
		}
	}
	return arr;
}

// 变速移动函数
function move(element, target){
	var timer = null;
	clearInterval(element.timer);
	element.timer = setInterval(function(){
		var current = element.offsetLeft;
		var step = (target - current) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		current = current + step;
		element.style.left = current + 'px';
		clearInterval(element.timer);
	}, 20)
}
/*indexOf兼容性写法 数组存在
IE9以前的版本不支持indexOf()方法
indexOf()是一个方法，通过if(!Array.indexOf)，判断有无此方法，如果没有不报错，返回undefined
prototype是
*/
if(!Array.indexOf){
	Array.prototype.indexOf = function(ele){
		for(var i = 0, n = this.length; i < n; i++){
			if(this[i] === ele) {
				return i;
			}  //end if
		} //end for
		return -1;
	} //end indexof
}  //end if


// Ajax核心对象兼容性写法
// function getXhr() {
// 	var xmlHttp;
// 	// chrome Firefox opera 包括IE7+方法
// 	if (window.XMLHttpRequest) {
// 		xmlHttp = new XMLHttpRequest();
// 	} else {
// 		// IE7之前用这种方法
// 		xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
// 	}
// 	return xmlHttp;
// }

function getXhr () {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		return new ActiveXObject('Msxml2.XMLHTTP');
	}
}

/*使用appendChild动态创建元素，封装
*/
function crt (tagName, target) {
	var ele = document.createElement(tagName);
	target.appendChild(ele);
	return ele;
}

// 形参没有被赋值，值是undefined
// 函数的参数默认值设置方式
// function getEvent(e) {
// 	// 短路操作
// 	e = e || window.event;
// 	return e;
// }

// 阻止事件冒泡的兼容性
// 参数1：js事件对象
// stopPropagation是主流浏览器写法
// cancleBubble是ie浏览器写法
// bubble冒泡
function stopBubble(e) {
	if(e&&e.stopPropagation) {
		e.stopPropagation();
	} else {
		window.event.stopBubble = true;
	}
}
// 阻止事件默认行为写法
function stopDefault() {
	
}

// 获取浏览器宽度
function getWindowWidth(){
	return window.innerWidth || document.documentElement.clientWidth;
}

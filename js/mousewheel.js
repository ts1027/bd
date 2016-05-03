/*
	滚轮事件
*/
function mouseWheel(obj,upcallback,downcallback){
	if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari -webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox -moz-
	}else{
		obj.attachEvent("onmousewheel",scrollFn);
	}
	function scrollFn(e){
		var ev=e||window.event;
		// document.title=ev.wheelDelta;  //iE  向下 -120  向上  120
		// document.title=ev.detail;   //ff  向下 3    向上 -3
		val=ev.wheelDelta||ev.detail;
		if(val==120||val==-3){
			// console.log("向上");
			upcallback&&upcallback.call(obj);
		}
		if(val==-120||val==3){
			// console.log("向下");
			downcallback&&downcallback.call(obj);
		}
		if (ev.preventDefault) {
			ev.preventDefault();
		}else{
			ev.returnValue=false;
		}
	}
}






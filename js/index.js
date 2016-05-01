/**
 * Created by wc on 2016/4/28.
 */
window.onload=function(){
    var out=document.querySelector(".out");
    var box=out.querySelector(".box");
    var lis=box.querySelectorAll("li");
    var oh=out.offsetHeight;
    var i=0;
    var moveY=0;
    var mousedown;
    var mousemove;
    var mouseup;
    var isTouch='ontouchstart' in window;
    if ('ontouchstart' in window){
        mousedown='touchstart';
        mousemove='touchmove';
        mouseup='touchend';
    }else{
        mousedown='mousedown';
        mousemove='mousemove';
        mouseup='mouseup';
    }
    out.addEventListener(mousedown,function(e){
        e.preventDefault();
        var stime= e.timeStamp;
        e=isTouch?e.changedTouches[0]:e;
        var dy= e.clientY;
        var ly;
        var toward;  //声明方向
        document.addEventListener(mousemove,Move);
        function Move (e){
            e=isTouch?e.changedTouches[0]:e;
            var my= e.clientY;
            ly=my-dy;
            toward=ly>0?'bottom':'top';
            box.style.transition="none";
            box.style.transform="translateY("+(ly+moveY)+"px)";
            box.style.webkitTransform="translateY("+(ly+moveY)+"px)";
        }
        document.addEventListener(mouseup,Up);
        function Up (e){
            var etime= e.timeStamp;
            var lt=etime-stime;
            if (Math.abs(ly)>=oh/2||lt<100&&Math.abs(ly)>20){
                if (toward=='bottom') {
                    i--;
                    if (i<0){
                        i=0;
                    }
                }else if (toward=='top') {
                    i++;
                    if (i>lis.length-1){
                        i=lis.length-1;
                    }
                }
                moveY=-i*oh;
                box.style.transition="transform .6s";
                box.style.transform="translateY("+moveY+"px)";
                box.style.webkitTransform="translateY("+moveY+"px)";
            }else {
                box.style.transition="transform .6s";
                box.style.transform="translateY("+moveY+"px)";
                box.style.webkitTransform="translateY("+moveY+"px)";
            }
            document.removeEventListener(mousemove,Move);
            document.removeEventListener(mouseup,Up);
            if (i==0){
                lis[0].className=('list1 active');
            }else{
                lis[0].className=('list1');
            }
            if (i==1){
                lis[1].className=('list2 active');
            }else{
                lis[1].className=('list2');
            }
            if (i==2){
                lis[2].className=('list3 active');
            }else{
                lis[2].className=('list3');
            }
            if (i==3){
                lis[3].className=('list4 active');
            }else{
                lis[3].className=('list4');
            }
        }
    });
};
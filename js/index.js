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
            box.style.transform="translate3d(0,"+(ly+moveY)+"px,0)";
            box.style.webkitTransform="translate3d(0,"+(ly+moveY)+"px,0)";
        }
        document.addEventListener(mouseup,Up);
        function Up (e){
            var etime= e.timeStamp;
            var lt=etime-stime;
            if (Math.abs(ly)>=oh/3||lt<100&&Math.abs(ly)>20){
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
                //moveY=-i*oh;
                //box.style.transition="transform .6s";
                //box.style.transform="translate3d(0,"+moveY+"px,0)";
                //box.style.webkitTransform="translate3d(0,"+moveY+"px,0)";
                move();
            }else {
                //box.style.transition="transform .6s";
                //box.style.transform="translate3d("+moveY+"px)";
                //box.style.webkitTransform="translate3d(0,"+moveY+"px,0)";
                move();
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
    function move () {
        moveY=-i*oh;
        box.style.transition="transform .6s";
        box.style.transform="translate3d(0,"+moveY+"px,0)";
        box.style.webkitTransform="translate3d(0,"+moveY+"px,0)";
    }
    var mouse=true;
    mouseWheel(out,function(){
        if (mouse==false){
            return;
        }
        mouse=false;
        i--;
        if (i<0) {
            i=0;
        }
        //box.style.transition="transform .6s";
        //box.style.transform="translate3d(0,"+(-i*oh)+"px,0)";
        //box.style.webkitTransform="translate3d(0,"+(-i*oh)+"px,0)";
        move();
        setTimeout(function(){
            mouse=true;
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
        },500)
    },function(){
        if (mouse==false){
            return;
        }
        mouse=false;
        i++;
        if (i>lis.length-1) {
            i=lis.length-1;
        }
        //box.style.transition="transform .6s";
        //box.style.transform="translate3d(0,"+(-i*oh)+"px,0)";
        //box.style.webkitTransform="translate3d(0,"+(-i*oh)+"px,0)";
        move();
        setTimeout(function(){
            mouse=true;
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
        },500)
    });

    //移动端导航
    var btn=document.querySelector(".btn");
    var navBar=document.querySelector(".nav-bar");
    var flag=true;
    btn.onclick=function(){
        if (flag==true) {
            navBar.className="nav-bar nav-show";
            if (flag1==false){
                loginBox.className="header-login-box nav-hidden";
                flag1=true;
            }
            flag=false;
        }else if (flag==false) {
            navBar.className="nav-bar nav-hidden";
            flag=true;
        }
    };

    //移动端登录
    var login=document.querySelector(".user-icon");
    var loginBox=document.querySelector(".header-login-box");
    var flag1=true;
    login.onclick=function(){
        if (flag1==true) {
            loginBox.className="header-login-box nav-show";
            if (flag==false){
                navBar.className="nav-bar nav-hidden";
                flag=true;
            }
            flag1=false;
        }else if (flag1==false) {
            loginBox.className="header-login-box nav-hidden";
            flag1=true;
        }
    }
};
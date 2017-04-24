
   // 时钟旋转
    var hour=document.getElementById('hour');
    var minute=document.getElementById('minute');
    var second=document.getElementById('second');
    var h=0,m=0,s=0,ms=0;
    setInterval(function (){
        var date=new Date();
        ms=date.getMilliseconds();
        s=date.getSeconds() + ms / 1000;
        m=date.getMinutes() + s / 60;
        h=date.getHours() % 12 + m / 60;
        // console.log(h);
        second.style.webkitTransform="rotate("+s*6+"deg)";
        minute.style.webkitTransform="rotate("+m*6+"deg)";
        hour.style.webkitTransform="rotate("+h*30+"deg)";
        },1);

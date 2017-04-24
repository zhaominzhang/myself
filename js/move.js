
    function animate(obj,target){
        clearInterval(obj.timer);  // 先清除定时器
        var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
            obj.style.left = obj.offsetLeft + speed + "px";
            if(Math.abs(result)<=15)  // 如果差值不小于 5 说明到位置了
            {
                clearInterval(obj.timer);
                obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
            }
        },10)
    }
    window.onload = function(){
      var box = document.getElementById('all');
      var ul = document.getElementById('ul');
      var ulLis = ul.children;
      ul.appendChild(ul.children[0].cloneNode(true));
      var ol = document.createElement("ol");
      box.appendChild(ol);
      for (var i = 0; i < ulLis.length - 1; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
      }
      ol.children[0].className = "current";
      var olLis = ol.children;
      for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i ;
        olLis[i].onmouseover=function () {
           for (var j = 0; j < olLis.length; j++) 
           {
                    olLis[j].className = "";
           }
             this.className = "current";
             animate(ul,- this.index * 500);
             square = key = this.index;
        }
      }
      var timer = null;
      var key = 0;
      var square = 0;
      timer = setInterval(autoplay,1000);
      function autoplay() {
        key++;
        if (key > ulLis.length - 1) {
          ul.style.left = 0;
          key = 1;
        }
        animate(ul,- key * 500);
        square++;
        if (square > olLis.length-1) 
        {
          square = 0;
        }
        for (var i = 0; i <olLis.length; i++) {
          olLis[i].className = "";
        }
        olLis[square].className = "current";
      }
      box.onmouseover = function(){
        clearInterval(timer);
      }
      box.onmouseout = function(){
        timer = setInterval(autoplay,1000);
      }
    }


    
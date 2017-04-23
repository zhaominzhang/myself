




        var move = document.getElementById('moveTop');
        document.onscroll=function(){
            scroll().top > 300 ? show(move) : hide(move);
            leader=scroll().top;
        }
        var target = 0 ; 
        move.onclick=function(){
            timer=setInterval(function(){
                leader=leader+(target-leader) / 10;
                window.scrollTo(0,leader);
            if (leader == target) {
                clearInterval(timer);
            }
            },20)
        }

        function show(obj) { obj.style.display = "block";}
        function hide(obj) { obj.style.display = "none";}

        function scroll() {
            if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
            {
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                }
            }
            else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
            // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
            {
                return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                }
            }
            return { //  剩下的肯定是怪异模式的
                left: document.body.scrollLeft,
                top: document.body.scrollTop
            }
        }





        
var box = document.getElementById('box');
    var div = box.getElementsByTagName('div');
    var btnone = document.getElementById('btnone');
    var btntwo = document.getElementById('btntwo');
    // console.log(div);
    var colors=['red','plum','blue','green','cyan','black','pink','gray','brown'];
    btnone.onclick=function(){//点击开始
        timer=setInterval(function(){//使用定时器
        start();//调用函数
        },100)//设置时间
    }
    
    btntwo.onclick=function(){//停止按钮的
        for(i=0;i<div.length;i++){//循环
            div[i].style.background="#FFA600";//遍历清除颜色
        }
        clearInterval(timer);//停止定时器
    }
    function start(){
        for(var i=0;i<div.length;i++){//每次随机颜色时遍历将背景设置好
            div[i].style.background="#FFA600";
        }
        var arr=new Array(3);//创建数组容纳随机数
        var arr1=new Array(3);
        for(var i=0;i<arr.length;i++){//创建第一组数组
            var a=parseInt(Math.random()*9); 
            // console.log(a);
            if(i==0){//第一个数字直接导入数组
                arr[i]=a;
            }else{
                for(var j=0;j<i;j++){//第二个与第三个数字进行判断
                    if(a==arr[j]){//如果重复从新开始
                        i--;
                    }else{
                        arr[i]=a;
                    }
                }
            }
        }
        for(var i=0;i<arr1.length;i++){//同上。随机颜色
            var a=parseInt(Math.random()*9); 
            if(i==0){
                arr1[i]=a;
            }else{
                for(var j=0;j<i;j++){
                    if(a==arr1[j]){
                        i--;
                        }else{
                        arr1[i]=a;
                        }
                }
            }
        }
        for(var i=0;i<arr.length;i++){
            div[arr[i]].style.background=colors[arr1[i]];//将随机的颜色给随机的地址
        }
    }
//banner下选项卡
$(function(){
	var list=$(".list");
	var item=$(".xxk2");
	var zi01=$(".zi01");
	// alert(list.length)
	item[0].style.zIndex=1;
	list[0].style.borderBottom="3px solid #e5004f";
	zi01[0].style.fontWeight="bold";
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onmouseover=function(){
            for(j=0;j<list.length;j++){
            	item[j].style.display="none";
                list[j].style.borderBottom="3px solid #333";
                zi01[j].style.fontSize="16px";
                zi01[j].style.fontWeight="normal";
            }
			item[this.index].style.display="block";
			list[this.index].style.borderBottom="3px solid #e5004f";
			zi01[this.index].style.fontSize="18px";
			zi01[this.index].style.fontWeight="bold";
		}	
	}
})
//银泰百货选项卡
$(function(){
	var lis=$("li",$(".ytbh-right-top")[0]);
    var ytbh=$(".ytbh-erji");
    var zi02=$('li',$('.ytbh-right-top')[0]);
    lis[0].style.borderBottom="3px solid #e5004f";
    ytbh[0].style.zIndex=1;
    zi02[0].style.fontWeight='bold';
    for(var i=0;i<lis.length;i++){
    	lis[i].index=i;
    	lis[i].onmouseover=function(){
    		for(j=0;j<ytbh.length;j++){
    			lis[j].style.borderBottom="3px solid #333";
    			ytbh[j].style.display="none";
    			zi02[j].style.fontWeight='normal';
    		}
    		ytbh[this.index].style.display="block";
    		lis[this.index].style.borderBottom="3px solid #e5004f";
    		zi02[this.index].style.fontWeight='bold';
    	}
    }
})
//侧导航选项卡
$(function(){
  var lis=$("li",$(".banner-box-left")[0]);
  var erji=$(".cedao");
  var yangshi=$(".yangshi");
  for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function(){
      erji[this.index].style.display="block";
      lis[this.index].style.background="#e5004f"; 
    }
    lis[i].onmouseout=function(){
      erji[this.index].style.display="none";
      lis[this.index].style.background="#333";
    }
  }
})
//运用边框线
	$(function(){
		var one=$(".one");
		// var flag=true;
		for(var i=0;i<one.length;i++){
			xian(one[i]);
		}
		function xian(obj){
		var widths=obj.offsetWidth;
		var heights=obj.offsetHeight;
		var lefts=$(".left",obj)[0];
		var rights=$(".right",obj)[0];
		var tops=$(".top",obj)[0];
		var bottoms=$(".bottom",obj)[0];

		obj.onmouseover=function(){
			animate(lefts,{height:heights});
			animate(rights,{height:heights});
			animate(tops,{width:widths});
			animate(bottoms,{width:widths});
		}

		obj.onmouseout=function(){
			animate(lefts,{height:0});
			animate(rights,{height:0});
			animate(tops,{width:0});
			animate(bottoms,{width:0});
		}
		}
	})

//banner轮播
var win=$(".banner-box-middle")[0];
var as=$("a",win);
var yuan=$(".yuan")[0];
var quan=$("li",yuan);
var btnL=$(".btn-left")[0];
var btnR=$(".btn-right")[0];
var num=0;

//自动轮播
var t=setInterval(moveR,1500);
function moveR(){
   num++;
   if(num==as.length){
   	num=0;
   }
 
   for(var i=0;i<as.length;i++){
   	animate(as[i],{opacity:0});
          quan[i].className="";
   }

   quan[num].className="yanse";
   animate(as[num],{opacity:1},function(){flag=true});
   }
//自动轮播结束

//鼠标移入停止，移除继续自动轮播
win.onmouseover=function(){
	clearInterval(t);
	btnL.style.display="block";
	btnR.style.display="block";
}
win.onmouseout=function(){
	t=setInterval(moveR,1500);
	btnL.style.display="none";
	btnR.style.display="none";
}
//清除事件结束

//小圆圈点击到相应图片
for(var i=0;i<quan.length;i++){
   quan[i].index=i;
   quan[i].onmouseover=function(){
   	if(num==this.index){
   		return
   	}
   	for(var j=0;j<as.length;j++){
         // as[j].style.zIndex=5;
         animate(as[j],{opacity:0});
         quan[j].className="";
   	}
   	     quan[this.index].className="yanse";
         // as[this.index].style.zIndex=10;
         animate(as[this.index],{opacity:1});
         num=this.index;
   }
}
//小按钮结束

//左右点击
var flag=true;
btnL.onclick=function(){
	if(flag){
		flag=false;
		move();
	}
   }
   function move(){
      num--;
   if(num<0){
   	num=as.length-1;
   }
   for(var i=0;i<as.length;i++){
   	animate(as[i],{opacity:0});
          quan[i].className="";
   }

   quan[num].className="yanse";
   animate(as[num],{opacity:1},function(){flag=true});
   }

btnR.onclick=function(){
	if(flag){
		flag=false;
	moveR();
	}
	}
   animate(as[num],{opacity:1},function(){flag=true});

//重复轮播1

$(function(){
   // var jiedian=$(".vfbox-left-bottom-big")[0];
   // var jiedian1=$(".vfbox-left-bottom-big")[1];
   // lunbo1(jiedian)
   // lunbo1(jiedian1)
   var a1=$(".vfbox-left-bottom-big");
    for(var i=0;i<a1.length;i++){
      lunbo1(a1[i]);
    }
//左右点击
function lunbo1(obj){
  var num=0;
var btnL=$('.zbtn',obj)[0];
var btnR=$('.ybtn',obj)[0];
var imgbox=$('ul',obj)[0];
var as=$('li',imgbox);
// console.log(as)
var widths=parseInt(getStyle(as[0],"width"));
var flag=true;
    // imgbox.style.width=widths*as.length+"px";
    function moveL(){
          animate(imgbox,{left:-widths},500,function(){
           
            var first=firstChild(imgbox);
            console.log(first)
            imgbox.appendChild(first);
            imgbox.style.left=0;
             flag=true;
          })
      }
    /*
    先扒图，后动画
    1、把最后一张图片插入到最前面
    2、移动imgbox
  */
    function moveR(){
    var last=lastChild(imgbox);
        beforeChild(imgbox,last);
        imgbox.style.left=-widths+"px";
        animate(imgbox,{left:0},500,function(){flag=true});
      }

    btnL.onclick=function(){
  if(flag){
    flag=false;
  moveL();
    }
    }

    btnR.onclick=function(){
  if(flag){
    flag=false;
  moveR();
    }
    }
    
}

})

//轮播2重写
 // var box=$('.cfbox-middle')[0];
 // var box1=$('.cfbox-middle')[1];
 //  //先加载后执行
 //  lunbo2(box)
 //  lunbo2(box1)
    var a2=$(".cfbox-middle");
    for(var i=0;i<a2.length;i++){
      lunbo2(a2[i]);
    }
//获取元素
  function lunbo2(obj){
       
        var win=$('.bao',obj)[0];
        var as=$('a',win);
        var anniu=$(".anniu",obj)[0]
        var quan=$("li",anniu);
        var widths=parseInt(getStyle(as[0],"width"));
        var num=0;//双下标
        var next=0;//双下标
        var btnL=$('.Lyi',obj)[0];
        var btnR=$('.Ryi',obj)[0];
        var flag=true;
/*
无缝轮播（双下标）：
num 记录当前显示图片下标
next 记录下一张显示图片下标
在动画之前下一张图片就位 left=widths
就位
next left=width+"px"
动画
num left=-width+"px"
更新
num=next
*/
//初始化状态
for(var i=0;i<as.length;i++){
  if(i==0){
    continue;
  }
  as[i].style.left=widths+"px";
}
// var t=setInterval(moveL,2000);
// win.onmouseover=function(){
//   clearInterval(t);
// }
// win.onmouseout=function(){
//   t=setInterval(moveL,2000);
// }
function moveL(){
  next++;
  if(next==as.length){
    next=0;
  }
  as[next].style.left=widths+"px";//就位
  quan[num].style.background="#ccc";
    quan[next].style.background="#e40077";
  animate(as[num],{left:-widths});//当前移动到前面
  animate(as[next],{left:0},function(){flag=true});//下一张到当前
  num=next;
}
//小圆圈点击事件
for(var i=0;i<quan.length;i++){
  quan[i].index=i;
  quan[i].onclick=function(){
    if(num==this.index){
             return;
    }
    as[this.index].style.left=widths+"px";
    quan[num].style.background="#ccc";
        quan[this.index].style.background="#e40077";
        animate(as[num],{left:-widths});
        animate(as[this.index],{left:0});
        next=this.index;
        num=this.index;
  }
} 
//左右按钮点击
btnL.onclick=function(){
  if(flag){
    flag=false;
    moveR();
  }

}
function moveR(){
  next--;
  if(next<0){
    next=as.length-1;
  }
  as[next].style.left=-widths+"px";//就位
  quan[num].style.background="#ccc";
    quan[next].style.background="#e40077";
  animate(as[num],{left:widths});//当前移动到前面
  animate(as[next],{left:0},function(){flag=true});//下一张到当前
  num=next;
}
btnR.onclick=function(){
  if(flag){
    flag=false;
    moveL();
  }
   
}

obj.onmouseover=function(){
  // btnL.style.display="block";
  // btnR.style.display="block";
  animate(btnL,{left:0});
  animate(btnR,{left:340});

}
obj.onmouseout=function(){
  // btnL.style.display="none";
  // btnR.style.display="none";
  animate(btnL,{left:-30});
  animate(btnR,{left:370});
}

}

//楼层跳转
$(function(){
  var floor=$(".cfbox");
  var biglc=$(".lc")[0];
  var arr=[];
  var flag=true;
  
//楼层跳转开始
    var lis=$(".louceng");
    for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
      if(flag){
        flag=false;
      
      // for(var j=0;j<lis.length;j++){
      //   lis[j].style.background="#ccc";
      // }
      // lis[this.index].style.background="red";
      animate(document.body,{scrollTop:arr[this.index]},function(){flag=true});
      animate(document.documentElement,{scrollTop:arr[this.index]},function(){flag=true});
      }
    }
  }
  for(var i=0;i<floor.length;i++){
      arr.push(floor[i].offsetTop);
    }
        var heights=document.documentElement.clientHeight;
       
        //滚动事件
  document.onscroll=function(){
        //实时获取当前状态滚轮滚动的距离
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var scrolltop=obj.scrollTop;
  if(scrolltop>=1900){

   biglc.style.display="block";
  }else{
   biglc.style.display="none";
  }
 
        }

})
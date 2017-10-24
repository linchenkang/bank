
	
function tab(){       //选项卡
	var oTab = document.getElementById('tab')
	var oUl =oTab.getElementsByTagName('ul')[0]
	var aLis = oUl.getElementsByTagName('li')
	var oPic = oTab.getElementsByTagName('ol')
			
	oPic[0].style.display='block'
	for(var i=0; i<aLis.length; i++){
		aLis[i].index=i
		aLis[i].onclick=function(){
			for(var i=0; i<aLis.length; i++){
				aLis[i].className=''
				oPic[i].style.display='none'	
			}
				aLis[this.index].className='red_line'
				oPic[this.index].style.display='block'
			}	
	}
}
tab()
function gotop(){    //返回顶部
	var oBack= document.getElementById('back')
	var oTop=0
	var timer=null
	var off=true
	window.onscroll=function(){
		oTop = document.documentElement.scrollTop || document.body.scrollTop;
						
		if(oTop>300){
			oBack.style.display='block'
		}else if(oTop<300){
			oBack.style.display='none'
		};
		if(!off){
			clearInterval(timer)
		}
		off=false
	};
			
	oBack.onclick=function(){
		timer=setInterval(function(){
			var backTop=oTop/6
			if(oTop<=0){
				clearInterval(timer)
			}else{
				if(document.documentElement.scrollTop){
					document.documentElement.scrollTop-=backTop
				}else{
					document.body.scrollTop-=backTop
				}
				
				off=true
			}		
		},30)
	}	
}
gotop()
function lbt(){        //轮播图
	var oView = document.getElementById("view");
	var oBanner = document.getElementById("banner");
	var oUl=oView.getElementsByTagName('ul')[0]
	var aLis= oUl.children;
	var oOl=document.getElementsByTagName('ol')[0]
	var aBtns= oOl.children;
	var timer=null,iNum=0
			
	oUl.innerHTML+=oUl.innerHTML
	oUl.style.width=aLis[0].offsetWidth*aLis.length+'px'
	
	for (var i=0; i<aBtns.length; i++) {
		aBtns[i].index=i
		aBtns[i].onclick=function(){
			for (var i=0; i<aBtns.length; i++) {
				aBtns[i].className=''
			}	
				aBtns[this.index].className='active'
				iNum=this.index
				animate(oUl,{'left':-(this.index*aLis[0].offsetWidth)})
		}			
	}	
	timer=setInterval(play,1000)
	
		function play(){
		iNum++
		if(iNum==aLis.length/2+1){
			oUl.style.left=oUl.offsetLeft+oUl.offsetWidth/2+'px'
			iNum=1
		}
		for (var i=0;i<aBtns.length;i++) {
			aBtns[i].className=''	
		}
		if(iNum==aLis.length/2){
			aBtns[0].className='active'
		}else{
			aBtns[iNum].className='active'
		}
		animate(oUl,{'left':-iNum*aLis[0].offsetWidth})
	}
					
	
	oView.onmouseover=function(){
		clearInterval(timer)
	}
	oView.onmouseout=function(){
		timer=setInterval(play,1000);
	}
}
lbt()			
function lbt2(){           //无缝滚动
	var oCarousel = document.getElementById('carousel')
	var oUl = oCarousel.getElementsByTagName('ul')[0]
	var aLis = oUl.children
	var timer=null
	oUl.innerHTML+=oUl.innerHTML
	oUl.style.width=aLis[0].offsetWidth*aLis.length+'px'
	
	timer=setInterval(function(){
		if((oUl.offsetLeft-3)==-(oUl.offsetWidth/2)){
			oUl.style.left=0
		}else{
			oUl.style.left=oUl.offsetLeft-3+'px'
		}
		
	},30)
	
}
lbt2()
function Eject(){      //左侧菜单
	var oMeun2 = document.getElementById('meun2')
	var aLis = getClass(document,'ject')
	var aNavs = getClass(document,'nav')
	var aH3 = oMeun2.getElementsByTagName('h3')
	
		for (var i=0; i<aLis.length; i++) {
			aLis[i].index=i
			aLis[i].onmouseover=function(){
				for (var i=0; i<aLis.length; i++) {
					aNavs[i].style.display='none'
					aLis[i].style.background=''
					
				}
					if(this.index==aLis.length-1){
						aNavs[this.index].style.display='block'
						aNavs[this.index].style.top=-54+'px'
					}
					aH3[this.index].style.color='#555'
					
					aLis[this.index].style.background='#fff'
					aNavs[this.index].style.display='block'
			}
			aLis[i].onmouseout=function(){
				aNavs[this.index].style.display='none'
				aLis[this.index].style.background=''
				aH3[this.index].style.color='#fff'
				
		}
		
			
		}
}
Eject()

function dropDown(){        //头部点击弹出下拉
	var oMeun = document.getElementById('meun')
	var aMeunDown = getClass(document,'meun_down')
	var aMeunMain = getClass(document,'meun_main')
	var oP1 = oMeun.getElementsByTagName('b')
	var off=true
		for (var i=0; i<aMeunDown.length; i++) {
			aMeunDown[i].index=i
			aMeunDown[i].onclick=function(ev){
				var ev = ev || event
				for (var i=0; i<aMeunDown.length; i++) {
				aMeunMain[i].style.display='none'
				oP1[this.index].style.backgroundPositionY=-30+'px'
				ev.cancelBubble=true
				}
				aMeunMain[this.index].style.display='block'
				oP1[this.index].style.backgroundPositionY=-24+'px'
			}	
		}
		
		document.body.onclick=function(ev){
			var ev = ev || event
			for (var i=0; i<aMeunDown.length; i++) {
				aMeunMain[i].style.display='none'
				oP1[i].style.backgroundPositionY=-30+'px'
				ev.cancelBubble=true 
			}
		}	
}
dropDown()
document.addEventListener('touchmove',function(event){
	event.preventDefault();
},false);
;(function($){
	var len=$("#content").children().size(),
		width=$(window).width();
		//alert(width);
		index=0;
		$("#box").swipeLeft(function(){
			index++;
			if(index>=len-1){
				index=len-1;
			}
			change();
		}).swipeRight(function(){
			index--;
			if(index<=0){
				index=0;
			}
			change();
		})

		function change(){
			var x=-index*width+"px";
			$("#content").css({
				"-webkit-transform":"translateX("+x+")",
				"-webkit-transition":"all 1s"
			})

			$("#nav>span").eq(index).addClass("on").siblings().removeClass("on");
		}
})(Zepto)
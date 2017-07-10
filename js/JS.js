			//最顶部点击事件
			$(document).ready(function() {
				$(".plus").click(function(event) { //绑定事件处理
					$(".top-btn-two").slideDown("slow"); //动画显示
					$(".top-btn-one").hide();
				});
				$(".remove").click(function(event) {
					$(".top-btn-one").show();
					$(".top-btn-two").hide();	
				}); 

			});
			 //固定导航栏			
				$(window).scroll(function(){
					var h=$(this).scrollTop();
					//获取屏幕大小
				    var w=parseInt($(window).width); 				    
					if(h>=38){						
					$(".navbar1").css("position","fixed").css("top","0px");	
					$(".logo-img").css("height","21px");
					}else{
					$(".header-top").show();
					$(".navbar1").css("position","static").css("top","38px");
					if(w>=768)
					$(".logo-img").css("height","26px");
					else{
					$(".logo-img").css("height","16px");	
					}
					}
			});
			
            //导航栏小屏幕下拉菜单
			$(document).ready(function() {
				$(".glyphicon-menu-hamburger").click(function() { //绑定事件处理
					; //动画显示
					$(".navbar-header").hide();
					$(".navbar-header2").show()
					$(".hamburger-list").show();
				});
				$(".glyphicon-remove").click(function() {
					$(".navbar-header").show();	
					$(".navbar-header2").hide();
					$(".hamburger-list").hide();						
				}); 
			});
			$(document).ready(function() {
				$(".contect").hover(
					function(){				
					$(".hover1").slideDown();
					},
					function(){
						$(".hover1").hide();
				});
			});
			$(document).ready(function() {
				$(".login").hover(
					function(){				
					$(".login-mado").slideDown();
					},
					function(){
						$(".login-mado").hide();
				});
			});
			$(document).ready(function() {
				$(".shopping").hover(
					function(){				
					$(".shopping-cart").slideDown();
					},
					function(){
						$(".shopping-cart").hide();
				});
			});

			//向左滑动
			$(document).ready(function() {
			$(".searchbox1").click(function(){
				
				$(this).animate({
					width:"290px"	
			},2000)
			})
				$(".login").click(function(){
				$(".searchbox1").animate({
					width:"125px"	
			},2000)
			})
			})
            //list切换菜单
				$(document).ready(function() {
				$(".tab li").mouseover(function() {
					$(".tab li").eq($(this).index()).addClass("MainActive").siblings().removeClass('MainActive');
					$(".list-tab").hide().eq($(this).index()).slideDown();	
				})
				//这里需要完善
				$(".list-tab").mouseover(function() {
					$(".list-tab").eq($(".tab li").index()).show();
				})
				$(".tab li,.list-tab").mouseout(function() {
					$(".list-tab").hide();
				
				})
			});
	       //footer脚部
			$(document).ready(function() {
			$(".right-section .plus").click(function(event) {
				if($(this).hasClass('glyphicon-plus')){
				$(this).removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}else{
					$(this).addClass('glyphicon-plus').removeClass('glyphicon-minus');
					
				}
				$(this).parent().find(".slide-box").toggleClass('show');; //动画显示
				$(this).parent().find(".minus").toggleClass('show');
				});
			});
		//woman
		$(document).ready(function() {
			$(".left-right-section .plus").click(function(event) {
				if($(this).hasClass('glyphicon-plus')){
				$(this).removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}else{
					$(this).addClass('glyphicon-plus').removeClass('glyphicon-minus');
					
				}
				$(this).parent().find(".slide-box").toggleClass('show');; //动画显示
				$(this).parent().find(".minus").toggleClass('show');
				});
			});
			//color
				
				$(function(){
					var colorText = $(".return-color");
					$(".btn-all li:eq(1)").hover(function(){
						console.log(colorText.text());
						colorText.text("");
						colorText.text("红色");
					})
					$(".btn-all li:eq(2)").hover(function(){
						colorText.text("");
						colorText.text("粉红色");
					})
					$(".btn-all li:eq(3)").hover(function(){
						colorText.text("");
						colorText.text("裸色");
					})
					$(".btn-all li:eq(4)").hover(function(){
						colorText.text("");
						colorText.text("橙色");
					})
					$(".btn-all li:eq(5)").hover(function(){
						colorText.text("");
						colorText.text("黄色");
					})
					$(".btn-all li:eq(6)").hover(function(){
						colorText.text("");
						colorText.text("黑色");
					})
					$(".btn-all li:eq(7)").hover(function(){
						colorText.text("");
						colorText.text("灰色");
					})
					$(".btn-all li:eq(8)").hover(function(){
						colorText.text("");
						colorText.text("棕色");
					})
					$(".btn-all li:eq(9)").hover(function(){
						colorText.text("");
						colorText.text("金色");
					})
					$(".btn-all li:eq(10)").hover(function(){
						colorText.text("");
						colorText.text("银色");
					})
					
					$(".btn-all li:eq(11)").hover(function(){
						colorText.text("");
						colorText.text("紫色");
					})
					$(".btn-all li:eq(12)").hover(function(){
						colorText.text("");
						colorText.text("蓝色");
					})
					$(".btn-all li:eq(13)").hover(function(){
						colorText.text("");
						colorText.text("白色");
					})
					$(".btn-all li:eq(14)").hover(function(){
						colorText.text("");
						colorText.text("绿色");
					})
					$(".btn-all li:eq(15)").hover(function(){
						colorText.text("");
						colorText.text("自然色");
					})
				})
				
            $(document).ready(function() {
				$(".one-img").mouseover(function(){				
					$(".two-img").show();
					$(".one-img").hide();
					})
				$(".two-img").mouseout(function(){				
					$(".one-img").show();
				    $(".two-img").hide();
				})
			});
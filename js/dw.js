        var m=2;
        var n=11;
        var flag=true;
       $(document).ready(function(){
        var now,next;
        // 设置ad的高度
        var wid=$('.ad img')[0].offsetHeight;
        $('.ad').css('height',wid+ 'px');

        window.onresize=function(){
          wid=$('.ad img')[0].offsetHeight;
          $('.ad').css('height',wid+ 'px');
        }

        $('.control ol li').on('click',function(){
          var s=$(this).index();
          animate(s-m,flag);
        });
       });
      function animate(d , f){        
        if(f){
          flag=false;
        if(m>$('.ad img').length-1){
            m=0;
          }else if(m<0){
            m=$('.ad img').length-1;
          }
          now=m;
          next=m+d;
          m=next;  
          if(d>1){
            d=1;
          }if(d<-1){
            d=-1;
          }
          if(next>$('.ad img').length-1){
            next=0;
          }else if(next<0){
            next=4;
          } 
          wid=$('.ad img')[now].offsetWidth; 
            $('.ad img').eq(now).animate({'left':-d*wid+'px'},200);
            $('.ad img').eq(next).css({'z-index':++n,'left':d*wid+'px'});
            $('.ad img').eq(next).animate({'left':'0'},200,function(){
              flag=true;
            });
            $('.control li').eq(next).siblings().attr({'id':''}).css('transform','scale(.8)');
            $('.control li').eq(next).attr({'id':'active'}).css('transform','scale(1)');
               } 
      }

$(function(){


    // 토글 모달창
    
    $('.pc-toggle > a').on('click', function(){
        $('.sitemap-modal').toggleClass('on');
    })

    // 마우스 이동감지

    // document == window
    // "e" 이벤트프로퍼티 // 이벤트 객체를 쓰기위해 (돌려받기) 필요
    
    // $(document).on("mousemove", function(e){
    
    //     // e.pageX, e.pageY 마우스 좌표값
    //     let mx = $('.posX').text(e.pageX);
    //     let my = $('.posY').text(e.pageY);                

    //     // circle의 위치를  위치로 이동
    //     // console.log(mx, my);

    //     $('.circle').css({
    //         left : e.pageX,
    //         top : e.pageY
    //     })
        
    // })

    // $('a').hover(

        // mouseenter linear-gradient(40deg, #f12711, #f5af19)  linear-gradient(35deg, #1F1C2C 30% 45%, #a2ab58 20% 50%)

        
        // function(){
        //     $('.circle')
        //     .css('background', 'linear-gradient(30deg, #c21500,#ffc500)')
        //     .css('box-shadow', '10px 10px 10px rgb(255,244,159)')
            
        // },

        // // mouseleave
        // function(){
        //     $('.circle').css('background', '#232526')
        //     .css('box-shadow', 'none')
        // }
        
        
    // )

    // mainvisual index section

    $(".trial_index").hover(function(evt) {
        $(".trial_index").removeClass('active').addClass('inactive');
        $(evt.currentTarget).addClass('active');
    });

    
    // mousemove-text

    const text = document.querySelector('.mousetext');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
        
    const element = document.querySelectorAll('.mousetext > span');
    for(let i = 0; i<element.length; i++) {
    element[i].style.transform = "rotate("+i*14+"deg)"
    }

    document.addEventListener("mousemove", function(e){

        text.style.left = e.pageX + 'px'
        text.style.top = e.pageY + 'px'
        
    })



    $('.detail-btn1').on('click', function(){
        $('.detail-modal.1').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn2').on('click', function(){
        $('.detail-modal.2').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn3').on('click', function(){
        $('.detail-modal.3').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn4').on('click', function(){
        $('.detail-modal.4').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn5').on('click', function(){
        $('.detail-modal.5').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn6').on('click', function(){
        $('.detail-modal.6').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn7').on('click', function(){
        $('.detail-modal.7').addClass('on');
        $('.window-gray').addClass('on');
    }) 

    // 모달밖영역 클릭시 닫기

    $(document).mouseup(function (e){
        var LayerPopup = $(".detail-modal");
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("on");
        }
    });

    $(document).mouseup(function (e){
        var LayerPopup = $(".window-gray");
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("on");
        }
    });

 
});
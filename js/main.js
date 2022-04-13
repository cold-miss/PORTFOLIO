
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



    $('.detail-btn.n1').on('click', function(){
        $('.detail-modal.1').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn.n2').on('click', function(){
        $('.detail-modal.2').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn.n3').on('click', function(){
        $('.detail-modal.3').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn.n4').on('click', function(){
        $('.detail-modal.4').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn.n5').on('click', function(){
        $('.detail-modal.5').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn.n6').on('click', function(){
        $('.detail-modal.6').addClass('on');
        $('.window-gray').addClass('on');
    }) 
    $('.detail-btn.n7').on('click', function(){
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


    // aboutme parallax scroll

    let bg = document.getElementById("bg")
    let moon = document.getElementById("moon")
    let mountain = document.getElementById("mountain")
    let road = document.getElementById("road")
    let text1 = document.getElementById("text1")

    window.addEventListener('scroll', function(){

    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    
    })

//     hover change bg	
//     let list = document.querySelectorAll('.sci li');
//     let bg1 = document.querySelector('body');
//     list.forEach(elements => {
//         elements.addEventListener('mouseenter', function 
//        (event){ 
//            let color = event.target.getAttribute('data-color');
//            bg1.style.backgroundColor = color;
//     })
//     elements.addEventListener('mouseleave', function 
//        (event){ 
//            bg1.style.backgroundColor = '#fff';
//     })

//     VanillaTilt.init(document.querySelectorAll(".sci li a"), {
// 		max: 20,
// 		speed: 800,
//         easing:"cubic-bezier(.03,.98,.52,.99)",
// 	});
    
// 	})
    
 
});

$(document).ready(function(){

    // window.onload 와 같은개념

    // article 에 마우스가 들어갔을때, 본인이 커져라.
    // article 에 마우스가 들어갔을때, 본인안에 있는 비디오가 보여라
    $('article').mouseenter(function(){

    let vid = $(this).find('video').get(0);

    vid.currentTime = 0 //시작점을 제시할 수 있다.
    vid.play()

    $(this).css({'width':'35%'})
    $(this).find('video').css({'opacity':'0.9'})


    })
    // article에 마우스가 나갔을때, 본인이 작아져라.
    // article 에 마우스가 나갔을때, 본인안에 있는 비디오가 사라져라.
    $('article').mouseleave(function(){

    let vid = $(this).find('video').get(0);

    vid.pause()
    
        $(this).css({'width':'12%'})
        $(this).find('video').css({'opacity':'0'})
    })


})
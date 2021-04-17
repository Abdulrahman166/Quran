var icon = document.getElementById('icon'),
    nav = document.getElementById('nav');
icon.onclick = function(){
    if(nav.style.left == '0%'){
        nav.style.left = '-100%'
    }else{
        nav.style.left = '0%'
    }
}

$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
    if(top > 60){
        $("header").addClass('change')
    }else{
        $("header").removeClass('change')
    }
    })
})

var btn = document.getElementsByClassName('button');
for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(e){
        e.preventDefault;
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
}

$(document).ready(function(){
    $('nav li a').click(function(){
        $('html , body').animate({
            scrollTop: $( '#' + $(this).data('move')).offset().top - 50
        },300)
    })
})


window.onscroll = function(){
    var top = document.getElementById('top');
    if(document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300){
        top.style.display = 'block'
    }else{
        top.style.display = 'none'
    }
    top.onclick = function(){
    scrollTo(0,0)
} 
}
        
       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
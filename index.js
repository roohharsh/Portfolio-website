$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer"],
        typeSpeed: 150,
        backSpeed: 200,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer"],
        typeSpeed: 150,
        backSpeed: 200,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwRJN6GWGbIbj2Soe89uP4o1fdIR-9ZJ-aKnYn82aLlB7FdxkITQv1Gdj4nsDb9UnCt-g/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Visit"))
                .catch(error => console.error('Error!', error.message))
            
                document.querySelector('.btn').addEventListener("click", ()=>{
                    var field=document.querySelectorAll('.name'+','+'.email'+','+'.msg');
                fieldArray=Array.prototype.slice.call(field);
                fieldArray.forEach(function(cur,index,array){
                        cur.value= "";
                });
                    
                fieldArray[0].focus();
                })
            
            })
});
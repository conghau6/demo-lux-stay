    
    // owl carousel 1

    var owl1 = $('.owl-carousel1');
    owl1.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })

    // owl carousel 2 có responsive
    var owl2 = $('.owl-carousel2');
    owl2.owlCarousel({
        items:5,
        loop:true,
        margin:16,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2.2,
                nav:false
            },
            739:{
                items:3,
                nav:false
            },
            1024:{
                items:5,
                nav:false,
                loop:true
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    // owl carousel 3 có responsive
    var owl3 = $('.owl-carousel3');
    owl3.owlCarousel({
        items:3,
        loop:true,
        margin:16,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1.2,
                nav:false
            },
            739:{
                items:1.2,
                nav:false
            },
            1024:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    // owl carousel 4 có responsive
    var owl4 = $('.owl-carousel4');
    owl4.owlCarousel({
        items:4,
        loop:true,
        margin:16,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1.2,
                nav:false
            },
            739:{
                items:1.2,
                nav:false
            },
            1024:{
                items:4.2,
                nav:false,
                loop:false
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    // owl carousel 5 có responsive
    var owl5 = $('.owl-carousel5');
    owl5.owlCarousel({
        items:3,
        loop:true,
        margin:16,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1.2,
                nav:false
            },
            739:{
                items:2.2,
                nav:false
            },
            1024:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
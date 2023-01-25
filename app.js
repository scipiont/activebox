$(function(){
// Fixed Header
    // console.log("rabotaet");
    let header = $("#header");
    let intro = $("#intro");
    // let introH = intro.height(); // Высота элемента без паддинга
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    checkScroll(scrollPos, introH);
    //console.log(introH);
    // проверки подлежит скролл и лоад загрузка страницы и ресайз страницы
        $(window).on("scroll resize", function() {
            introH = intro.innerHeight(); // перезапись значения переменной
            scrollPos = $(this).scrollTop();
            checkScroll(scrollPos, introH);

        });

        function checkScroll(scrollPos, introH){
            if(scrollPos > introH) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }


    //header.addClass("fixed");
    
// Smooth Scroll
        $("[data-sroll]").on("click", function(event){
            event.preventDefault(); // Отмена стандартного поведения ссылки, то есть страница не перезагружается.
            let elementId = $(this).data('sroll'); //конструкция data-scroll прописана в html , если бы там было написано data-target , то писали бы data('target')
            let elementOffset = $(elementId).offset().top; // получение отступа от верха каждого элемента шапки

            $("html, body").animate({
                scrollTop: elementOffset - 70
            }, 1000);
            //console.log(elementId);
        });


});
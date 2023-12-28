window.addEventListener("load", function(){
    let colors = ['#74b9ff','#a29bfe','#55efc4','#fdcb6e','#fab1a0','#fd79a8'];
    let sliderMain = document.querySelector(".slider-main");
    let sliderItems = document.querySelectorAll(".slider-item");
    let sliderItemWidth = sliderItems[0].offsetWidth;
    let sliderLength = sliderItems.length;
    let prevBtn = document.querySelector(".slider-prev");
    let nextBtn = document.querySelector(".slider-next");
    let sliderDots = document.querySelectorAll(".slider-dot-item");
    let positionX = 0;
    let index = 0;
    [...sliderDots].forEach((item) => 
      item.addEventListener("click",function(e){
        [...sliderDots].forEach(del => del.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        positionX = index * sliderItemWidth * -1;
        sliderMain.style =`transform: translateX(${positionX}px)`;
    }));
    nextBtn.addEventListener("click",function(){
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click",function(){
        handleChangeSlide(-1);
    });
    function handleChangeSlide(direction){
        if (direction === 1) {
            if ( index >= sliderLength-1) {
                index = sliderLength-1;
                return;
            }
            index++;
            //console.log(index);
            positionX = positionX - sliderItemWidth;
            sliderMain.style =`transform: translateX(${positionX}px)`;
            
        } else if (direction === -1){
            if ( index <= 0) {
                index = 0;
                return;
            }
            index--;
            //console.log(index);
            positionX = positionX + sliderItemWidth;
            sliderMain.style =`transform: translateX(${positionX}px)`;
        }
        [...sliderDots].forEach(del => del.classList.remove("active"));
        sliderDots[index].classList.add("active");
    }
    let subjects = document.querySelectorAll(".utility-item a");
    for ( let s of subjects){
        let idx = parseInt(Math.random()*colors.length);
        s.style.backgroundColor = colors[idx];
    }
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('#backtop').fadeIn();
        } else{
            $('#backtop').fadeOut();
        }
    });
    $('#backtop').click(function(){
        $('html,body').animate({
            scrollTop:0},500);
    });
});

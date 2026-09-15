document.addEventListener('DOMContentLoaded', function(){

    const bread = document.querySelector('.bread');
    const breadBox = document.querySelector('.bread_box');

    bread.addEventListener('click', function(){
        breadBox.classList.toggle('active');
    }); //breadcrum_slide

    const filterText = document.querySelector('.filter_txt');
    const filterBox = document.querySelector('.filter_outer');
    const checkBtn = document.querySelector('.check');
    const close = document.querySelector('.filter_box .close');

    filterText.addEventListener('click', function(){
        filterBox.classList.toggle('active');
    });
    checkBtn.addEventListener('click', function() {
        filterBox.classList.remove('active');
    });
    close.addEventListener('click', function() {
        filterBox.classList.remove('active');
    }); //filter_slide
    

    const moreBtn = document.querySelector(".sub .more_btn");
    const botWarp = document.querySelector(".event_box .bot");

    moreBtn.addEventListener("click", function(){

        botWarp.classList.toggle("show");

        if(botWarp.classList.contains("show")){
            moreBtn.textContent = "접기";
        }else{
            moreBtn.textContent = "더보기";
        }
    });
});
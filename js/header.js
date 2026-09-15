document.addEventListener("DOMContentLoaded", function() {

  const header = document.querySelector('.header_outer');
  const topBtn = document.querySelector('.top_btn');

  function headerFixed() {
    if(window.scrollY >=90){
      header.classList.add('fixed');
      topBtn.style.bottom = '30px';
    } else {
      header.classList.remove('fixed');
      topBtn.style.bottom = '-100px';
    }
  }
  window.addEventListener('scroll', headerFixed);
  //header_scroll / top_btn_scroll

  const gnb = document.querySelector('.gnb');
  const gnbMenu = document.querySelector('.gnb_menu');

  gnb.addEventListener('mouseover', function(){
    gnbMenu.classList.add('active');
  });
  gnbMenu.addEventListener('mouseleave', function() {
    gnbMenu.classList.remove('active');
  }); //gnb_menu_slide


  const lang = document.querySelector('.header .lang');
  const langBox = document.querySelector('.header .lang .lang_box');

  lang.addEventListener('click', function() {
    langBox.classList.toggle('active');
  });

  const size = document.querySelector('.header .size');
  const sizeBox = document.querySelector('.header .size_box');

  size.addEventListener('click', function() {
    sizeBox.classList.toggle('active');
  });
  
  topBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  });

}); //DOMContentLoaded
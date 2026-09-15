$(function(){
  let swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 'auto',
    intialSlide: 0,
    spaceBetween: 0,
    speed: 2000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }); //visual_main_swiper
});

document.addEventListener('DOMContentLoaded', function() {
  
  const tabs = document.querySelectorAll('.tab');
  const sheets = document.querySelectorAll('.tab_sheet');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
      tabs.forEach(item => item.classList.remove('on_tab'));
      sheets.forEach(item => item.classList.remove('on_sheet'));

      tab.classList.add('on_tab');
      sheets[index].classList.add('on_sheet');
    });
  }); //ai_mobile_tablet_tab


  const picks = document.querySelectorAll('.pick01');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
  },{threshold: 0.5});
  picks.forEach(pick => {
    observer.observe(pick);
  }) // pick_slide



  const wrap = document.querySelector('.video_box');
  const bar = document.querySelector('.slider');

  let isDrag = false;
  let startX = 0;

  wrap.addEventListener('mousedown', (e) => {
    isDrag = true;
    startX = e.clientX;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDrag) return;
    wrap.scrollLeft -= e.clientX - startX;
    startX = e.clientX;
  });

  window.addEventListener('mouseup', () => {
    isDrag = false;
  });

  wrap.addEventListener('scroll', () => {
    const percent =
        wrap.scrollLeft /
        (wrap.scrollWidth - wrap.clientWidth);

    bar.style.width = percent * 100 + '%';
  });
  // video_slide_bar

}); //DOMContentLoaded
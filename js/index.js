$(document).ready(function(){
  var banner = new Swiper('#banner .swiper-container', {
    loop: true,
    autoplay: 5000,
    pagination: '#banner .swiper-pagination',
    paginationClickable :true
  })
  var chanyeSubMenu = new Swiper('#chanye .chanye-sub-menu', {
    noSwiping: true
  })
  var chanyeMenu = new Swiper('#chanye .chanye-menu', {
    loop: true,
    nextButton: '#chanye .chanye-menu .next',
    prevButton: '#chanye .chanye-menu .prev',
    slidesPerView: 3
  })
})

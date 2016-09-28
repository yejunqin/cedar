$(document).ready(function(){
  var banner = new Swiper('#banner .swiper-container', {
    loop: true,
    pagination: '#banner .swiper-pagination',
    paginationClickable :true
  })
  var chanyeSubMenu = new Swiper('#chanye .chanye-sub-menu', {
    noSwiping: true
  })
  var chanyeMenu = new Swiper('#chanye .chanye-menu', {
    nextButton: '#chanye .chanye-menu .next',
    prevButton: '#chanye .chanye-menu .prev',
    slidesPerView: 3,
    autoplay: 3000,
    slideToClickedSlide: true,
    initialSlide: 1,
    onSlideChangeStart: function(swiper){
      var index = swiper.activeIndex
      chanyeSubMenu.slideTo(index)
    }
  })
})

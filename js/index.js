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
    // autoplay: 3000,
    slideToClickedSlide: true,
    initialSlide: 0,
     loop: true,
    // loopedSlides :7,
    onSlideChangeStart: function(swiper){
      var index = swiper.activeIndex
      var realIndex = 0
      if(index > 2 && index < 10){
        realIndex = index - 3
      }else if(index === 10){
        realIndex = 0
      }else if (index === 2){
        realIndex = 6
      }else if(index === 0){
        realIndex = 4
      }
      console.log(index, realIndex)
      chanyeSubMenu.slideTo(realIndex)
    }
  })
})

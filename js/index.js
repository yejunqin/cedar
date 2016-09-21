$(document).ready(function(){
  var dongtaiSlidesPerView = 1
  if(window.screen.width > 760){
    dongtaiSlidesPerView = 3
  }
  var banner = new Swiper('#banner .swiper-container', {
    loop: true,
    autoplay: 3000,
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
    centeredSlides: true,
    initialSlide: 1,
    onSlideChangeStart: function(swiper){
      var index = swiper.activeIndex
      chanyeSubMenu.slideTo(index)
    }
  })
  var newsMenu = new Swiper('#dongtai .dongtai-menu', {
    slidesPerView: dongtaiSlidesPerView,
    nextButton: '#dongtai .swiper-button .next',
    prevButton: '#dongtai .swiper-button .prev',
    spaceBetween: 16
  })
  $('#mobileNav').slimmenu(
      {
        resizeWidth: '1200',
        animSpeed:'medium',
        collapserTitle: '',
        indentChildren: true,
        childrenIndenter: '&raquo;'
      }
  )
})

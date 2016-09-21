$(document).ready(function(){
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
    onSlideChangeStart: function(swiper){
      var index = swiper.activeIndex
      chanyeSubMenu.slideTo(index)
    }
  })
  var newsMenu = new Swiper('#dongtai .dongtai-menu', {
    slidesPerView: 3,
    nextButton: '#dongtai .swiper-button .next',
    prevButton: '#dongtai .swiper-button .prev',
    spaceBetween: 16,
    autoplay: 3000
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

/**
 * Created by Administrator on 2016/9/21.
 */
$(document).ready(function(){
  $('#mobileNav').slimmenu(
    {
      resizeWidth: '1200',
      animSpeed:'medium',
      collapserTitle: '',
      indentChildren: true,
      childrenIndenter: '&raquo;'
    }
  )
  var dongtaiSlidesPerView = 1
  if(window.screen.width > 760){
    dongtaiSlidesPerView = 3
  }
  var newsMenu = new Swiper('#dongtai .dongtai-menu', {
    slidesPerView: dongtaiSlidesPerView,
    nextButton: '#dongtai .swiper-button .next',
    prevButton: '#dongtai .swiper-button .prev',
    spaceBetween: 16
  })
})
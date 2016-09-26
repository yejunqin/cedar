/**
 * Created by  on 2016/9/25.
 */
$(document).ready(function(){
  var development = new Swiper('#fazhan .swiper-container', {
    loop: true,
    //autoplay: 3000,
    //pagination: '#banner .swiper-pagination',
    paginationClickable :true
  })
  var paperSlidesPerView = 1
  if(window.screen.width > 760){
    paperSlidesPerView = 3
  }
  var paper = new Swiper('#paper .swiper-container', {
    slidesPerView: paperSlidesPerView,
    nextButton: '#dongtai .swiper-button .next',
    prevButton: '#dongtai .swiper-button .prev',
    spaceBetween: 16
  })
  // $().timelinr({
  //   arrowKeys: 'true'
  // })
})
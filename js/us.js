/**
 * Created by  on 2016/9/25.
 */
function activateItem(idx, items){
  items.each(function(i, ele){
    $(ele).removeClass('active')
  })
  items.eq(idx).addClass('active')
}
$(document).ready(function(){
  var timeline = $('#timeline')
  var items = timeline.find('#dates .dates-item')
  var development = new Swiper('#fazhan .swiper-container', {
    // loop: true,
    paginationClickable :true,
    nextButton: '#fazhan #next',
    prevButton: '#fazhan #prev',
    onSlideChangeStart: function(swiper){
      activateItem(swiper.activeIndex, items)
    }
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
  timeline.on('click', '.dates-item', function(){
    var _this = $(this)
    development.slideTo(_this.index())
  })
})
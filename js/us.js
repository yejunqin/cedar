/**
 * Created by  on 2016/9/25.
 */
var dates = document.getElementById('dates')
var $dates = $(dates)
var itemWidth = 0
var isClick = false
var preYearIdx = 0
var calWidth = 0
function isVisible(item){
  var diff = item.getBoundingClientRect().left - dates.getBoundingClientRect().left
  return diff > 0 && diff < dates.getBoundingClientRect().width
}
function move(isRight, step){
  var lineTop = $('#lineTop')
  var curWidth = lineTop.width()
  if(isRight){
    $dates.animate({scrollLeft: dates.scrollLeft + itemWidth * step}, 300)
    calWidth -= step * itemWidth
  }else{
    $dates.animate({scrollLeft: dates.scrollLeft - itemWidth * step}, 300)
    calWidth += step * itemWidth
  }
}
function activateItem(idx, items){
  items.each(function(i, ele){
    $(ele).removeClass('active').removeClass('passed')
  })
  var curItem = items.eq(idx)
  curItem.addClass('active').prevAll().addClass('passed')
  if(idx == 1){
    if(!isVisible(items.eq(0)[0])){
      move(false, 1)
    }
  }
  if(idx == items.length - 2){
    if(!isVisible(items.eq(idx + 1)[0])){
      move(true, 1)
    }
  }
  if(idx > 1 && idx < (items.length - 2)){
    if(idx < 6){
      if(isVisible(items.eq(idx - 1)[0])){
        if(!isVisible(items.eq(idx - 2)[0])){
          move(false, 1)
        }
      }else{
        move(false, 2)
      }
    }else{
      if(isVisible(items.eq(idx + 1)[0])){
        if(!isVisible(items.eq(idx + 2)[0])){
          move(true, 1)
        }
      }else{
        move(true, 2)
      }
    }
  }
}
$(document).ready(function(){
  var timeline = $('#timeline')
  var items = timeline.find('#dates .dates-item')
  var lineTop = $('#lineTop')
  itemWidth = items.eq(0).width()
  var development = new Swiper('#fazhan .swiper-container', {
    // loop: true,
    paginationClickable :true,
    nextButton: '#fazhan #next',
    prevButton: '#fazhan #prev',
    onSlideChangeStart: function(swiper){
      var curWidth = lineTop.width()
      var idx = swiper.activeIndex
      calWidth = curWidth + (idx - preYearIdx) * itemWidth
      activateItem(idx , items)
      lineTop.css('width', calWidth + 'px')
      preYearIdx = idx
    }
  })
  var paperSlidesPerView = 1
  if(window.screen.width > 760){
    paperSlidesPerView = 3
  }
  var paper = new Swiper('#paper .swiper-container', {
    slidesPerView: paperSlidesPerView,
    nextButton: '#paper .btn-nav .next',
    prevButton: '#paper .btn-nav .prev',
    spaceBetween: 16
  })
  timeline.on('click', '.dates-item', function(){
    var _this = $(this)
    if(_this.hasClass('active')){
      return false
    }
    development.slideTo(_this.index())
    isClick = true
  })
})
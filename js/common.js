/**
 * Created by Administrator on 2016/9/21.
 */
$(document).ready(function(){
  var header = $('#header')
  var alertSearch = $('#alertsearch')
  var alertBox = alertSearch.find('.alertbox')
  var share = $('#share')
  header.on('click', '.search', function(){
    alertSearch.fadeIn(300)
  })
    .on('click', '.share', function(){
      share.slideToggle()
    })
  $('#alertsearch').on('click', function(e){
    if(e.target.id === 'alertsearch'){
      alertSearch.fadeOut(300)
    }
  })
  //$(document).on('keydown', function(e){
  //  var code = e.keyCode
  //  if(code === 27){
  //    if(alertSearch.is(':visible')){
  //      alertSearch.hide()
  //    }else if(share.is(':visible')){
  //      share.hide()
  //    }
  //  }
  //})
  $('.calculate-middle').each(function(idx, ele){
    var $ele = $(ele)
    console.log($ele.height(),-$ele.width())
    $ele.css({
      marginTop: -$ele.height()/2 + 'px',
      marginLeft: -$ele.width()/2 + 'px',
      position: 'absolute',
      top: '50%',
      left: '50%'
    })
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
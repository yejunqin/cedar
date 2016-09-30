$(document).ready(function(){
  var video = $('#cedarVideo')
  var videoTitle = $('#videoTitle')
  var videoBg = $('#videoBg')
  video.on('ended', function(){
    videoTitle.removeClass('scale')
    videoBg.fadeIn(200)
  })
  videoTitle.on('click', function(){
    videoTitle.addClass('scale')
    window.setTimeout(function(){
      videoBg.fadeOut(200)
      video[0].play()
    }, 3000)
  })
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
      // 包含汽车板块
      if(index > 2 && index < 10){
        realIndex = index - 3
      }else if(index === 10){
        realIndex = 0
      }else if (index === 2){
        realIndex = 6
      }else if(index === 0){
        realIndex = 4
      }
      //去掉汽车板块
      var realIndexWithoutCar = 0
      if(index > 2 && index < 9){
        realIndexWithoutCar = index - 3
      }else if(index === 9){
        realIndexWithoutCar = 0
      }else if (index === 2){
        realIndexWithoutCar = 6
      }else if(index === 0){
        realIndexWithoutCar = 3
      }
      console.log(index, realIndexWithoutCar)
      chanyeSubMenu.slideTo(realIndexWithoutCar)
    }
  })
})

window.menuPinned = false;

var $window = $(window),
    $cover = $('.Cover'),
    $img = $cover.find('>img'),
    $video = $cover.find('>video');

function loadCSS(url) {
  var elem = document.createElement('link');

  elem.rel = 'stylesheet';
  elem.href = url;
  document.head.appendChild(elem);
}

function setCover(device) {
  if(device==='laptop'){
    $video.addClass('responsive-video');
    $video.width('100%');
    $video.css('left', 0);
    $img.addClass('responsive-img');
    $img.width('100%');
    $img.css('left', 0);
  } else if(device==='tablet'){
    $video.removeClass('responsive-video');
    $video.width(Math.round(($video.height()*1920)/1080));
    $video.css('left', -(($video.width()-$cover.width())/2));
    $img.removeClass('responsive-img');
    $img.width(Math.round(($img.height()*1920)/1080));
    $img.css('left', -(($img.width()-$cover.width())/2));
  }
}

function setPieChart(pieSide){
  $('.graph-donut').easyPieChart({
    easing: 'easeOutCirc',
    barColor: '#ffd600',
    trackColor: '#00838f',
    scaleColor: '#e1e1e3',
    scaleLength: 0,
    lineCap: 'square',
    lineWidth: 5,
    size: pieSide,
    animate: 2500,
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });
}

function checkResponsiveDevice() {
  if(window.matchMedia('(max-width: 600px)').matches){ //Mobile
    setPieChart(100);
  }else if(window.matchMedia('(max-width: 992px)').matches){ //Tablet
    setCover('tablet');
    setPieChart(130);
  }else{ //Laptop
    setCover('laptop');
    setPieChart(180);
  }
}

function jQueryMain() {
  var
      $menu = $('.Menu')
      , $menuLogo = $menu.find('.Menu-logo')
      , $upButton = $('.UpButton')
      , $aboutMeSection = $('.About')
      , $parallaxContainer = $('.parallax-container')
      , $skillsContent = $('.Skills-content')
      , $servicesCarousel = $('.carousel')
      , $portfolioGrid = $('.grid')
      , $modalTrigger = $('.modal-trigger');

  /* MATERIALIZE AND PLUGINS INITIALISATION */

  //Animations

  var options=[
    { selector:'#about-me', offset:$aboutMeSection.height()/3, callback: (el) => {
      $(el).addClass('fadeIn');
    } },
    { selector:'#my-skills', offset:$skillsContent.height()/2, callback: (el) => {
      var $charts = $('.graph-donut'),
          percents = [90,85,60,80,50,80,60,70];

      for (var i = 0; i<$charts.length;i++){
        $($charts[i]).data('easyPieChart').update(percents[i]);
      }

    } },
    { selector:'#resume', offset:$('#resume').height()/2, callback: (el) => {
      var $resume = $(el),
          $hs = $resume.find('h2, h3');

      $hs.each((i,helement) => {
        $(helement).removeClass('bounceOut');
        $(helement).addClass('bounceIn');
      });

    } },
    { selector:'.Resume-row', offset:300, callback: (el) => {
      var $work = $('.Resume-work'),
          $education = $('.Resume-education');

      $work.removeClass('bounceOutDown');
      $work.addClass('bounceInLeft');
      $education.removeClass('bounceOutDown');
      $education.addClass('bounceInRight');

    } },
    { selector:'.Services-content', offset:$('#services').height()/2, callback: (el) => {
      $(el).addClass('fadeIn');
    } },
    { selector: '.Portfolio-content', offset:350, callback: (el) => {
      var $el = $('.Portfolio .animated');

      $el.each((i,element) => {
        $(element).removeClass('bounceOutDown');
        $(element).addClass('bounceInUp');
      });
    }},
    { selector:'.Contact-content', offset:$('#contact').height()/2, callback: (el) => {
      $(el).addClass('fadeIn');
    } },

  ];

  // Menu

  $menu.pushpin({ top: $menu.offset().top });

  $('.scrollspy').scrollSpy({ scrollOffset: $menu.height() });

  $('.button-collapse').sideNav();

  // Skills
  $parallaxContainer.height($skillsContent.height());

  $('.parallax').parallax();

  // Services
  $servicesCarousel.carousel({ full_width: true });

  // Portfolio
  $portfolioGrid.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });

  $modalTrigger.leanModal();

  Materialize.scrollFire(options);

  /* EVENT HANDLERS */

  // Menu
  $window.scroll(() => {
    if($window.scrollTop() >= $aboutMeSection.offset().top -  $menu.height()-1) {
      if(!window.menuPinned) {
        $upButton.addClass('UpButton--show');
        $menuLogo.addClass('Menu-logo--show');
        window.menuPinned = true;
      }
    } else if(window.menuPinned) {
      $upButton.removeClass('UpButton--show');
      $menuLogo.removeClass('Menu-logo--show');
      window.menuPinned = false;
    }
  });

  // Skills
  $window.resize(() => {
    checkResponsiveDevice();
    $parallaxContainer.height($skillsContent.height());
    $menu.pushpin({ top: $menu.offset().top });
  });

  // Resume
  $('.Resume .collapsible-header').click((event) => {
    var $element = $(event.target);

    $element.html(($element.html()=='add'?'remove':'add'));
  });

  // Services
  $('.Services .collapsible-header').click((event) => {
    var $element = $(event.target).parents('li');

    $servicesCarousel.carousel('set', $element.data('slide'));
  });

  // Portfolio
  $('.Portfolio-all').click(() => {
    $portfolioGrid.isotope({ filter: '*' });
  });

  $('.Portfolio-filter').click(() => {
    $portfolioGrid.isotope({ filter: '.filter' });
  });

  $modalTrigger.click((event) => {
    var $element = $(event.target);

    $('.Portfolio-modalHeader').html($element.parents('.Portfolio-thumbnailInfo').data('info'));
    $('.Portfolio-modalImage').attr('src',$element.parents('.Portfolio-thumbnail').find('> img').attr('src'));
  });
}

$(() => {
  /* Font asynchrounous loading */
  loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css');
});

checkResponsiveDevice();

$window.load(jQueryMain);

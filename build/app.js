(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';window.menuPinned=false;var $window=$(window),$cover=$('.Cover'),$img=$cover.find('>img'),$video=$cover.find('>video');function loadCSS(url){var elem=document.createElement('link');elem.rel='stylesheet';elem.href=url;document.head.appendChild(elem)}function setCover(device){if(device==='laptop'){$video.addClass('responsive-video');$video.width('100%');$video.css('left',0);$img.addClass('responsive-img');$img.width('100%');$img.css('left',0)}else if(device==='tablet'){$video.removeClass('responsive-video');$video.width(Math.round($video.height()*1920/1080));$video.css('left',-(($video.width()-$cover.width())/2));$img.removeClass('responsive-img');$img.width(Math.round($img.height()*1920/1080));$img.css('left',-(($img.width()-$cover.width())/2))}}function setPieChart(pieSide){$('.graph-donut').easyPieChart({easing:'easeOutCirc',barColor:'#ffd600',trackColor:'#00838f',scaleColor:'#e1e1e3',scaleLength:0,lineCap:'square',lineWidth:5,size:pieSide,animate:2500,onStep:function onStep(from,to,percent){$(this.el).find('.percent').text(Math.round(percent))}})}function checkResponsiveDevice(){if(window.matchMedia('(max-width: 600px)').matches){//Mobile
setPieChart(100)}else if(window.matchMedia('(max-width: 992px)').matches){//Tablet
setCover('tablet');setPieChart(130)}else{//Laptop
setCover('laptop');setPieChart(180)}}function jQueryMain(){var $menu=$('.Menu'),$menuLogo=$menu.find('.Menu-logo'),$upButton=$('.UpButton'),$aboutMeSection=$('.About'),$parallaxContainer=$('.parallax-container'),$skillsContent=$('.Skills-content'),$servicesCarousel=$('.carousel'),$portfolioGrid=$('.grid'),$modalTrigger=$('.modal-trigger');/* MATERIALIZE AND PLUGINS INITIALISATION *///Animations
var options=[{selector:'#about-me',offset:$aboutMeSection.height()/3,callback:function callback(el){$(el).addClass('fadeIn')}},{selector:'#my-skills',offset:$skillsContent.height()/2,callback:function callback(el){var $charts=$('.graph-donut'),percents=[90,85,60,80,50,80,60,70];for(var i=0;i<$charts.length;i++){$($charts[i]).data('easyPieChart').update(percents[i])}}},{selector:'#resume',offset:$('#resume').height()/2,callback:function callback(el){var $resume=$(el),$hs=$resume.find('h2, h3');$hs.each(function(i,helement){$(helement).removeClass('bounceOut');$(helement).addClass('bounceIn')})}},{selector:'.Resume-row',offset:300,callback:function callback(el){var $work=$('.Resume-work'),$education=$('.Resume-education');$work.removeClass('bounceOutDown');$work.addClass('bounceInLeft');$education.removeClass('bounceOutDown');$education.addClass('bounceInRight')}},{selector:'.Services-content',offset:$('#services').height()/2,callback:function callback(el){$(el).addClass('fadeIn')}},{selector:'.Portfolio-content',offset:350,callback:function callback(el){var $el=$('.Portfolio .animated');$el.each(function(i,element){$(element).removeClass('bounceOutDown');$(element).addClass('bounceInUp')})}},{selector:'.Contact-content',offset:$('#contact').height()/2,callback:function callback(el){$(el).addClass('fadeIn')}}];// Menu
$menu.pushpin({top:$menu.offset().top});$('.scrollspy').scrollSpy({scrollOffset:$menu.height()});$('.button-collapse').sideNav();// Skills
$parallaxContainer.height($skillsContent.height());$('.parallax').parallax();// Services
$servicesCarousel.carousel({full_width:true});// Portfolio
$portfolioGrid.isotope({itemSelector:'.grid-item',percentPosition:true,masonry:{columnWidth:'.grid-sizer'}});$modalTrigger.leanModal();Materialize.scrollFire(options);/* EVENT HANDLERS */// Menu
$window.scroll(function(){if($window.scrollTop()>=$aboutMeSection.offset().top-$menu.height()-1){if(!window.menuPinned){$upButton.addClass('UpButton--show');$menuLogo.addClass('Menu-logo--show');window.menuPinned=true}}else if(window.menuPinned){$upButton.removeClass('UpButton--show');$menuLogo.removeClass('Menu-logo--show');window.menuPinned=false}});// Skills
$window.resize(function(){checkResponsiveDevice();$parallaxContainer.height($skillsContent.height());$menu.pushpin({top:$menu.offset().top})});// Resume
$('.Resume .collapsible-header').click(function(event){var $element=$(event.target);$element.html($element.html()=='add'?'remove':'add')});// Services
$('.Services .collapsible-header').click(function(event){var $element=$(event.target).parents('li');$servicesCarousel.carousel('set',$element.data('slide'))});// Portfolio
$('.Portfolio-all').click(function(){$portfolioGrid.isotope({filter:'*'})});$('.Portfolio-filter').click(function(){$portfolioGrid.isotope({filter:'.filter'})});$modalTrigger.click(function(event){var $element=$(event.target);$('.Portfolio-modalHeader').html($element.parents('.Portfolio-thumbnailInfo').data('info'));$('.Portfolio-modalImage').attr('src',$element.parents('.Portfolio-thumbnail').find('> img').attr('src'))})}$(function(){/* Font asynchrounous loading */loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css')});checkResponsiveDevice();$window.load(jQueryMain);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7YUNBQSxPQUFPLFVBQVAsQ0FBb0IsS0FBcEIsQ0FFQSxHQUFJLFNBQVUsRUFBRSxNQUFGLENBQWQsQ0FDSSxPQUFTLEVBQUUsUUFBRixDQURiLENBRUksS0FBTyxPQUFPLElBQVAsQ0FBWSxNQUFaLENBRlgsQ0FHSSxPQUFTLE9BQU8sSUFBUCxDQUFZLFFBQVosQ0FIYixDQUtBLFFBQVMsUUFBVCxDQUFpQixHQUFqQixDQUFzQixDQUNwQixHQUFJLE1BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQVgsQ0FFQSxLQUFLLEdBQUwsQ0FBVyxZQUFYLENBQ0EsS0FBSyxJQUFMLENBQVksR0FBWixDQUNBLFNBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsQ0FDRCxDQUVELFFBQVMsU0FBVCxDQUFrQixNQUFsQixDQUEwQixDQUN4QixHQUFHLFNBQVMsUUFBWixDQUFxQixDQUNuQixPQUFPLFFBQVAsQ0FBZ0Isa0JBQWhCLEVBQ0EsT0FBTyxLQUFQLENBQWEsTUFBYixFQUNBLE9BQU8sR0FBUCxDQUFXLE1BQVgsQ0FBbUIsQ0FBbkIsRUFDQSxLQUFLLFFBQUwsQ0FBYyxnQkFBZCxFQUNBLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFDQSxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQWlCLENBQWpCLENBQ0QsQ0FQRCxJQU9PLElBQUcsU0FBUyxRQUFaLENBQXFCLENBQzFCLE9BQU8sV0FBUCxDQUFtQixrQkFBbkIsRUFDQSxPQUFPLEtBQVAsQ0FBYSxLQUFLLEtBQUwsQ0FBWSxPQUFPLE1BQVAsR0FBZ0IsSUFBakIsQ0FBdUIsSUFBbEMsQ0FBYixFQUNBLE9BQU8sR0FBUCxDQUFXLE1BQVgsQ0FBbUIsRUFBRSxDQUFDLE9BQU8sS0FBUCxHQUFlLE9BQU8sS0FB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NEQsS0FBNUQsQ0FBdEMsQ0FDRCxDQUxELENBTUQsQ0FFRCxFQUFFLFVBQU0sQ0FDTixnQ0FDQSxRQUFRLG9GQUFSLENBQ0QsQ0FIRCxFQUtBLHdCQUVBLFFBQVEsSUFBUixDQUFhLFVBQWIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwid2luZG93Lm1lbnVQaW5uZWQgPSBmYWxzZTtcblxudmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXG4gICAgJGNvdmVyID0gJCgnLkNvdmVyJyksXG4gICAgJGltZyA9ICRjb3Zlci5maW5kKCc+aW1nJyksXG4gICAgJHZpZGVvID0gJGNvdmVyLmZpbmQoJz52aWRlbycpO1xuXG5mdW5jdGlvbiBsb2FkQ1NTKHVybCkge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICBlbGVtLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgZWxlbS5ocmVmID0gdXJsO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xufVxuXG5mdW5jdGlvbiBzZXRDb3ZlcihkZXZpY2UpIHtcbiAgaWYoZGV2aWNlPT09J2xhcHRvcCcpe1xuICAgICR2aWRlby5hZGRDbGFzcygncmVzcG9uc2l2ZS12aWRlbycpO1xuICAgICR2aWRlby53aWR0aCgnMTAwJScpO1xuICAgICR2aWRlby5jc3MoJ2xlZnQnLCAwKTtcbiAgICAkaW1nLmFkZENsYXNzKCdyZXNwb25zaXZlLWltZycpO1xuICAgICRpbWcud2lkdGgoJzEwMCUnKTtcbiAgICAkaW1nLmNzcygnbGVmdCcsIDApO1xuICB9IGVsc2UgaWYoZGV2aWNlPT09J3RhYmxldCcpe1xuICAgICR2aWRlby5yZW1vdmVDbGFzcygncmVzcG9uc2l2ZS12aWRlbycpO1xuICAgICR2aWRlby53aWR0aChNYXRoLnJvdW5kKCgkdmlkZW8uaGVpZ2h0KCkqMTkyMCkvMTA4MCkpO1xuICAgICR2aWRlby5jc3MoJ2xlZnQnLCAtKCgkdmlkZW8ud2lkdGgoKS0kY292ZXIud2lkdGgoKSkvMikpO1xuICAgICRpbWcucmVtb3ZlQ2xhc3MoJ3Jlc3BvbnNpdmUtaW1nJyk7XG4gICAgJGltZy53aWR0aChNYXRoLnJvdW5kKCgkaW1nLmhlaWdodCgpKjE5MjApLzEwODApKTtcbiAgICAkaW1nLmNzcygnbGVmdCcsIC0oKCRpbWcud2lkdGgoKS0kY292ZXIud2lkdGgoKSkvMikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFBpZUNoYXJ0KHBpZVNpZGUpe1xuICAkKCcuZ3JhcGgtZG9udXQnKS5lYXN5UGllQ2hhcnQoe1xuICAgIGVhc2luZzogJ2Vhc2VPdXRDaXJjJyxcbiAgICBiYXJDb2xvcjogJyNmZmQ2MDAnLFxuICAgIHRyYWNrQ29sb3I6ICcjMDA4MzhmJyxcbiAgICBzY2FsZUNvbG9yOiAnI2UxZTFlMycsXG4gICAgc2NhbGVMZW5ndGg6IDAsXG4gICAgbGluZUNhcDogJ3NxdWFyZScsXG4gICAgbGluZVdpZHRoOiA1LFxuICAgIHNpemU6IHBpZVNpZGUsXG4gICAgYW5pbWF0ZTogMjUwMCxcbiAgICBvblN0ZXA6IGZ1bmN0aW9uKGZyb20sIHRvLCBwZXJjZW50KSB7XG4gICAgICAkKHRoaXMuZWwpLmZpbmQoJy5wZXJjZW50JykudGV4dChNYXRoLnJvdW5kKHBlcmNlbnQpKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1Jlc3BvbnNpdmVEZXZpY2UoKSB7XG4gIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2MDBweCknKS5tYXRjaGVzKXsgLy9Nb2JpbGVcbiAgICBzZXRQaWVDaGFydCgxMDApO1xuICB9ZWxzZSBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkycHgpJykubWF0Y2hlcyl7IC8vVGFibGV0XG4gICAgc2V0Q292ZXIoJ3RhYmxldCcpO1xuICAgIHNldFBpZUNoYXJ0KDEzMCk7XG4gIH1lbHNleyAvL0xhcHRvcFxuICAgIHNldENvdmVyKCdsYXB0b3AnKTtcbiAgICBzZXRQaWVDaGFydCgxODApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGpRdWVyeU1haW4oKSB7XG4gIHZhclxuICAgICAgJG1lbnUgPSAkKCcuTWVudScpXG4gICAgICAsICRtZW51TG9nbyA9ICRtZW51LmZpbmQoJy5NZW51LWxvZ28nKVxuICAgICAgLCAkdXBCdXR0b24gPSAkKCcuVXBCdXR0b24nKVxuICAgICAgLCAkYWJvdXRNZVNlY3Rpb24gPSAkKCcuQWJvdXQnKVxuICAgICAgLCAkcGFyYWxsYXhDb250YWluZXIgPSAkKCcucGFyYWxsYXgtY29udGFpbmVyJylcbiAgICAgICwgJHNraWxsc0NvbnRlbnQgPSAkKCcuU2tpbGxzLWNvbnRlbnQnKVxuICAgICAgLCAkc2VydmljZXNDYXJvdXNlbCA9ICQoJy5jYXJvdXNlbCcpXG4gICAgICAsICRwb3J0Zm9saW9HcmlkID0gJCgnLmdyaWQnKVxuICAgICAgLCAkbW9kYWxUcmlnZ2VyID0gJCgnLm1vZGFsLXRyaWdnZXInKTtcblxuICAvKiBNQVRFUklBTElaRSBBTkQgUExVR0lOUyBJTklUSUFMSVNBVElPTiAqL1xuXG4gIC8vQW5pbWF0aW9uc1xuXG4gIHZhciBvcHRpb25zPVtcbiAgICB7IHNlbGVjdG9yOicjYWJvdXQtbWUnLCBvZmZzZXQ6JGFib3V0TWVTZWN0aW9uLmhlaWdodCgpLzMsIGNhbGxiYWNrOiAoZWwpID0+IHtcbiAgICAgICQoZWwpLmFkZENsYXNzKCdmYWRlSW4nKTtcbiAgICB9IH0sXG4gICAgeyBzZWxlY3RvcjonI215LXNraWxscycsIG9mZnNldDokc2tpbGxzQ29udGVudC5oZWlnaHQoKS8yLCBjYWxsYmFjazogKGVsKSA9PiB7XG4gICAgICB2YXIgJGNoYXJ0cyA9ICQoJy5ncmFwaC1kb251dCcpLFxuICAgICAgICAgIHBlcmNlbnRzID0gWzkwLDg1LDYwLDgwLDUwLDgwLDYwLDcwXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGk8JGNoYXJ0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgJCgkY2hhcnRzW2ldKS5kYXRhKCdlYXN5UGllQ2hhcnQnKS51cGRhdGUocGVyY2VudHNbaV0pO1xuICAgICAgfVxuXG4gICAgfSB9LFxuICAgIHsgc2VsZWN0b3I6JyNyZXN1bWUnLCBvZmZzZXQ6JCgnI3Jlc3VtZScpLmhlaWdodCgpLzIsIGNhbGxiYWNrOiAoZWwpID0+IHtcbiAgICAgIHZhciAkcmVzdW1lID0gJChlbCksXG4gICAgICAgICAgJGhzID0gJHJlc3VtZS5maW5kKCdoMiwgaDMnKTtcblxuICAgICAgJGhzLmVhY2goKGksaGVsZW1lbnQpID0+IHtcbiAgICAgICAgJChoZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2JvdW5jZU91dCcpO1xuICAgICAgICAkKGhlbGVtZW50KS5hZGRDbGFzcygnYm91bmNlSW4nKTtcbiAgICAgIH0pO1xuXG4gICAgfSB9LFxuICAgIHsgc2VsZWN0b3I6Jy5SZXN1bWUtcm93Jywgb2Zmc2V0OjMwMCwgY2FsbGJhY2s6IChlbCkgPT4ge1xuICAgICAgdmFyICR3b3JrID0gJCgnLlJlc3VtZS13b3JrJyksXG4gICAgICAgICAgJGVkdWNhdGlvbiA9ICQoJy5SZXN1bWUtZWR1Y2F0aW9uJyk7XG5cbiAgICAgICR3b3JrLnJlbW92ZUNsYXNzKCdib3VuY2VPdXREb3duJyk7XG4gICAgICAkd29yay5hZGRDbGFzcygnYm91bmNlSW5MZWZ0Jyk7XG4gICAgICAkZWR1Y2F0aW9uLnJlbW92ZUNsYXNzKCdib3VuY2VPdXREb3duJyk7XG4gICAgICAkZWR1Y2F0aW9uLmFkZENsYXNzKCdib3VuY2VJblJpZ2h0Jyk7XG5cbiAgICB9IH0sXG4gICAgeyBzZWxlY3RvcjonLlNlcnZpY2VzLWNvbnRlbnQnLCBvZmZzZXQ6JCgnI3NlcnZpY2VzJykuaGVpZ2h0KCkvMiwgY2FsbGJhY2s6IChlbCkgPT4ge1xuICAgICAgJChlbCkuYWRkQ2xhc3MoJ2ZhZGVJbicpO1xuICAgIH0gfSxcbiAgICB7IHNlbGVjdG9yOiAnLlBvcnRmb2xpby1jb250ZW50Jywgb2Zmc2V0OjM1MCwgY2FsbGJhY2s6IChlbCkgPT4ge1xuICAgICAgdmFyICRlbCA9ICQoJy5Qb3J0Zm9saW8gLmFuaW1hdGVkJyk7XG5cbiAgICAgICRlbC5lYWNoKChpLGVsZW1lbnQpID0+IHtcbiAgICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcygnYm91bmNlT3V0RG93bicpO1xuICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKCdib3VuY2VJblVwJyk7XG4gICAgICB9KTtcbiAgICB9fSxcbiAgICB7IHNlbGVjdG9yOicuQ29udGFjdC1jb250ZW50Jywgb2Zmc2V0OiQoJyNjb250YWN0JykuaGVpZ2h0KCkvMiwgY2FsbGJhY2s6IChlbCkgPT4ge1xuICAgICAgJChlbCkuYWRkQ2xhc3MoJ2ZhZGVJbicpO1xuICAgIH0gfSxcblxuICBdO1xuXG4gIC8vIE1lbnVcblxuICAkbWVudS5wdXNocGluKHsgdG9wOiAkbWVudS5vZmZzZXQoKS50b3AgfSk7XG5cbiAgJCgnLnNjcm9sbHNweScpLnNjcm9sbFNweSh7IHNjcm9sbE9mZnNldDogJG1lbnUuaGVpZ2h0KCkgfSk7XG5cbiAgJCgnLmJ1dHRvbi1jb2xsYXBzZScpLnNpZGVOYXYoKTtcblxuICAvLyBTa2lsbHNcbiAgJHBhcmFsbGF4Q29udGFpbmVyLmhlaWdodCgkc2tpbGxzQ29udGVudC5oZWlnaHQoKSk7XG5cbiAgJCgnLnBhcmFsbGF4JykucGFyYWxsYXgoKTtcblxuICAvLyBTZXJ2aWNlc1xuICAkc2VydmljZXNDYXJvdXNlbC5jYXJvdXNlbCh7IGZ1bGxfd2lkdGg6IHRydWUgfSk7XG5cbiAgLy8gUG9ydGZvbGlvXG4gICRwb3J0Zm9saW9HcmlkLmlzb3RvcGUoe1xuICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxuICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcbiAgICBtYXNvbnJ5OiB7XG4gICAgICBjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJ1xuICAgIH1cbiAgfSk7XG5cbiAgJG1vZGFsVHJpZ2dlci5sZWFuTW9kYWwoKTtcblxuICBNYXRlcmlhbGl6ZS5zY3JvbGxGaXJlKG9wdGlvbnMpO1xuXG4gIC8qIEVWRU5UIEhBTkRMRVJTICovXG5cbiAgLy8gTWVudVxuICAkd2luZG93LnNjcm9sbCgoKSA9PiB7XG4gICAgaWYoJHdpbmRvdy5zY3JvbGxUb3AoKSA+PSAkYWJvdXRNZVNlY3Rpb24ub2Zmc2V0KCkudG9wIC0gICRtZW51LmhlaWdodCgpLTEpIHtcbiAgICAgIGlmKCF3aW5kb3cubWVudVBpbm5lZCkge1xuICAgICAgICAkdXBCdXR0b24uYWRkQ2xhc3MoJ1VwQnV0dG9uLS1zaG93Jyk7XG4gICAgICAgICRtZW51TG9nby5hZGRDbGFzcygnTWVudS1sb2dvLS1zaG93Jyk7XG4gICAgICAgIHdpbmRvdy5tZW51UGlubmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYod2luZG93Lm1lbnVQaW5uZWQpIHtcbiAgICAgICR1cEJ1dHRvbi5yZW1vdmVDbGFzcygnVXBCdXR0b24tLXNob3cnKTtcbiAgICAgICRtZW51TG9nby5yZW1vdmVDbGFzcygnTWVudS1sb2dvLS1zaG93Jyk7XG4gICAgICB3aW5kb3cubWVudVBpbm5lZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2tpbGxzXG4gICR3aW5kb3cucmVzaXplKCgpID0+IHtcbiAgICBjaGVja1Jlc3BvbnNpdmVEZXZpY2UoKTtcbiAgICAkcGFyYWxsYXhDb250YWluZXIuaGVpZ2h0KCRza2lsbHNDb250ZW50LmhlaWdodCgpKTtcbiAgICAkbWVudS5wdXNocGluKHsgdG9wOiAkbWVudS5vZmZzZXQoKS50b3AgfSk7XG4gIH0pO1xuXG4gIC8vIFJlc3VtZVxuICAkKCcuUmVzdW1lIC5jb2xsYXBzaWJsZS1oZWFkZXInKS5jbGljaygoZXZlbnQpID0+IHtcbiAgICB2YXIgJGVsZW1lbnQgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICAkZWxlbWVudC5odG1sKCgkZWxlbWVudC5odG1sKCk9PSdhZGQnPydyZW1vdmUnOidhZGQnKSk7XG4gIH0pO1xuXG4gIC8vIFNlcnZpY2VzXG4gICQoJy5TZXJ2aWNlcyAuY29sbGFwc2libGUtaGVhZGVyJykuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgdmFyICRlbGVtZW50ID0gJChldmVudC50YXJnZXQpLnBhcmVudHMoJ2xpJyk7XG5cbiAgICAkc2VydmljZXNDYXJvdXNlbC5jYXJvdXNlbCgnc2V0JywgJGVsZW1lbnQuZGF0YSgnc2xpZGUnKSk7XG4gIH0pO1xuXG4gIC8vIFBvcnRmb2xpb1xuICAkKCcuUG9ydGZvbGlvLWFsbCcpLmNsaWNrKCgpID0+IHtcbiAgICAkcG9ydGZvbGlvR3JpZC5pc290b3BlKHsgZmlsdGVyOiAnKicgfSk7XG4gIH0pO1xuXG4gICQoJy5Qb3J0Zm9saW8tZmlsdGVyJykuY2xpY2soKCkgPT4ge1xuICAgICRwb3J0Zm9saW9HcmlkLmlzb3RvcGUoeyBmaWx0ZXI6ICcuZmlsdGVyJyB9KTtcbiAgfSk7XG5cbiAgJG1vZGFsVHJpZ2dlci5jbGljaygoZXZlbnQpID0+IHtcbiAgICB2YXIgJGVsZW1lbnQgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICAkKCcuUG9ydGZvbGlvLW1vZGFsSGVhZGVyJykuaHRtbCgkZWxlbWVudC5wYXJlbnRzKCcuUG9ydGZvbGlvLXRodW1ibmFpbEluZm8nKS5kYXRhKCdpbmZvJykpO1xuICAgICQoJy5Qb3J0Zm9saW8tbW9kYWxJbWFnZScpLmF0dHIoJ3NyYycsJGVsZW1lbnQucGFyZW50cygnLlBvcnRmb2xpby10aHVtYm5haWwnKS5maW5kKCc+IGltZycpLmF0dHIoJ3NyYycpKTtcbiAgfSk7XG59XG5cbiQoKCkgPT4ge1xuICAvKiBGb250IGFzeW5jaHJvdW5vdXMgbG9hZGluZyAqL1xuICBsb2FkQ1NTKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC42LjMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XG59KTtcblxuY2hlY2tSZXNwb25zaXZlRGV2aWNlKCk7XG5cbiR3aW5kb3cubG9hZChqUXVlcnlNYWluKTtcbiJdfQ==

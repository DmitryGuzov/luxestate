let slider = document.querySelector('.slider'),
  sliderList = document.querySelector('.slider-list'),
  sliderTrack = document.querySelector('.slider-track'),
  slides = document.querySelectorAll('.slide'),
  arrows = document.querySelector('.slider-arrows'),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,  
  posX2 = slides.offsetWidth,  
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/;
  let getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  };
  let slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
  };
  let swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  };
  let swipeAction = function() {

    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  };
  let swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  };
  let setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  };
  let reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };
  
sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

arrows.addEventListener('click', function() {
  let target = event.target;

  if (target.classList.contains('next')) {
    slideIndex++;
  } else if (target.classList.contains('prev')) {
    slideIndex--;
  } else {
    return;
  }

  slide();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKSxcclxuICBzbGlkZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1saXN0JyksXHJcbiAgc2xpZGVyVHJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXRyYWNrJyksXHJcbiAgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJyksXHJcbiAgYXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnJvd3MnKSxcclxuICBwcmV2ID0gYXJyb3dzLmNoaWxkcmVuWzBdLFxyXG4gIG5leHQgPSBhcnJvd3MuY2hpbGRyZW5bMV0sXHJcbiAgc2xpZGVXaWR0aCA9IHNsaWRlc1swXS5vZmZzZXRXaWR0aCxcclxuICBzbGlkZUluZGV4ID0gMCxcclxuICBwb3NJbml0ID0gMCxcclxuICBwb3NYMSA9IDAsICBcclxuICBwb3NYMiA9IHNsaWRlcy5vZmZzZXRXaWR0aCwgIFxyXG4gIHBvc1kxID0gMCxcclxuICBwb3NZMiA9IDAsXHJcbiAgcG9zRmluYWwgPSAwLFxyXG4gIGlzU3dpcGUgPSBmYWxzZSxcclxuICBpc1Njcm9sbCA9IGZhbHNlLFxyXG4gIGFsbG93U3dpcGUgPSB0cnVlLFxyXG4gIHRyYW5zaXRpb24gPSB0cnVlLFxyXG4gIG5leHRUcmYgPSAwLFxyXG4gIHByZXZUcmYgPSAwLFxyXG4gIGxhc3RUcmYgPSAtLXNsaWRlcy5sZW5ndGggKiBzbGlkZVdpZHRoLFxyXG4gIHBvc1RocmVzaG9sZCA9IHNsaWRlc1swXS5vZmZzZXRXaWR0aCAqIDAuMzUsXHJcbiAgdHJmUmVnRXhwID0gLyhbLTAtOS5dKyg/PXB4KSkvO1xyXG4gIGxldCBnZXRFdmVudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChldmVudC50eXBlLnNlYXJjaCgndG91Y2gnKSAhPT0gLTEpID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50O1xyXG4gIH07XHJcbiAgbGV0IHNsaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodHJhbnNpdGlvbikge1xyXG4gICAgICBzbGlkZXJUcmFjay5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuNXMnO1xyXG4gICAgfVxyXG4gICAgc2xpZGVyVHJhY2suc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKC0ke3NsaWRlSW5kZXggKiBzbGlkZVdpZHRofXB4LCAwcHgsIDBweClgO1xyXG5cclxuICAgIHByZXYuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWQnLCBzbGlkZUluZGV4ID09PSAwKTtcclxuICAgIG5leHQuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWQnLCBzbGlkZUluZGV4ID09PSAtLXNsaWRlcy5sZW5ndGgpO1xyXG4gIH07XHJcbiAgbGV0IHN3aXBlU3RhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBldnQgPSBnZXRFdmVudCgpO1xyXG5cclxuICAgIGlmIChhbGxvd1N3aXBlKSB7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgIG5leHRUcmYgPSAoc2xpZGVJbmRleCArIDEpICogLXNsaWRlV2lkdGg7XHJcbiAgICAgIHByZXZUcmYgPSAoc2xpZGVJbmRleCAtIDEpICogLXNsaWRlV2lkdGg7XHJcblxyXG4gICAgICBwb3NJbml0ID0gcG9zWDEgPSBldnQuY2xpZW50WDtcclxuICAgICAgcG9zWTEgPSBldnQuY2xpZW50WTtcclxuXHJcbiAgICAgIHNsaWRlclRyYWNrLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHN3aXBlQWN0aW9uKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVBY3Rpb24pO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHN3aXBlRW5kKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlRW5kKTtcclxuXHJcbiAgICAgIHNsaWRlckxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYicpO1xyXG4gICAgICBzbGlkZXJMaXN0LmNsYXNzTGlzdC5hZGQoJ2dyYWJiaW5nJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBsZXQgc3dpcGVBY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBsZXQgZXZ0ID0gZ2V0RXZlbnQoKSxcclxuICAgICAgc3R5bGUgPSBzbGlkZXJUcmFjay5zdHlsZS50cmFuc2Zvcm0sXHJcbiAgICAgIHRyYW5zZm9ybSA9ICtzdHlsZS5tYXRjaCh0cmZSZWdFeHApWzBdO1xyXG5cclxuICAgIHBvc1gyID0gcG9zWDEgLSBldnQuY2xpZW50WDtcclxuICAgIHBvc1gxID0gZXZ0LmNsaWVudFg7XHJcblxyXG4gICAgcG9zWTIgPSBwb3NZMSAtIGV2dC5jbGllbnRZO1xyXG4gICAgcG9zWTEgPSBldnQuY2xpZW50WTtcclxuXHJcbiAgICBpZiAoIWlzU3dpcGUgJiYgIWlzU2Nyb2xsKSB7XHJcbiAgICAgIGxldCBwb3NZID0gTWF0aC5hYnMocG9zWTIpO1xyXG4gICAgICBpZiAocG9zWSA+IDcgfHwgcG9zWDIgPT09IDApIHtcclxuICAgICAgICBpc1Njcm9sbCA9IHRydWU7XHJcbiAgICAgICAgYWxsb3dTd2lwZSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvc1kgPCA3KSB7XHJcbiAgICAgICAgaXNTd2lwZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNTd2lwZSkge1xyXG4gICAgICBpZiAoc2xpZGVJbmRleCA9PT0gMCkge1xyXG4gICAgICAgIGlmIChwb3NJbml0IDwgcG9zWDEpIHtcclxuICAgICAgICAgIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm0sIDApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGxvd1N3aXBlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vINC30LDQv9GA0LXRgiDRg9GF0L7QtNCwINCy0L/RgNCw0LLQviDQvdCwINC/0L7RgdC70LXQtNC90LXQvCDRgdC70LDQudC00LVcclxuICAgICAgaWYgKHNsaWRlSW5kZXggPT09IC0tc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChwb3NJbml0ID4gcG9zWDEpIHtcclxuICAgICAgICAgIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm0sIGxhc3RUcmYpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGxvd1N3aXBlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwb3NJbml0ID4gcG9zWDEgJiYgdHJhbnNmb3JtIDwgbmV4dFRyZiB8fCBwb3NJbml0IDwgcG9zWDEgJiYgdHJhbnNmb3JtID4gcHJldlRyZikge1xyXG4gICAgICAgIHJlYWNoRWRnZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2xpZGVyVHJhY2suc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHJhbnNmb3JtIC0gcG9zWDJ9cHgsIDBweCwgMHB4KWA7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbiAgbGV0IHN3aXBlRW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICBwb3NGaW5hbCA9IHBvc0luaXQgLSBwb3NYMTtcclxuXHJcbiAgICBpc1Njcm9sbCA9IGZhbHNlO1xyXG4gICAgaXNTd2lwZSA9IGZhbHNlO1xyXG5cclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHN3aXBlQWN0aW9uKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN3aXBlQWN0aW9uKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc3dpcGVFbmQpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlRW5kKTtcclxuXHJcbiAgICBzbGlkZXJMaXN0LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgIHNsaWRlckxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYmJpbmcnKTtcclxuXHJcbiAgICBpZiAoYWxsb3dTd2lwZSkge1xyXG4gICAgICBpZiAoTWF0aC5hYnMocG9zRmluYWwpID4gcG9zVGhyZXNob2xkKSB7XHJcbiAgICAgICAgaWYgKHBvc0luaXQgPCBwb3NYMSkge1xyXG4gICAgICAgICAgc2xpZGVJbmRleC0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9zSW5pdCA+IHBvc1gxKSB7XHJcbiAgICAgICAgICBzbGlkZUluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocG9zSW5pdCAhPT0gcG9zWDEpIHtcclxuICAgICAgICBhbGxvd1N3aXBlID0gZmFsc2U7XHJcbiAgICAgICAgc2xpZGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGxvd1N3aXBlID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsbG93U3dpcGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG4gIGxldCBzZXRUcmFuc2Zvcm0gPSBmdW5jdGlvbih0cmFuc2Zvcm0sIGNvbWFwcmVUcmFuc2Zvcm0pIHtcclxuICAgIGlmICh0cmFuc2Zvcm0gPj0gY29tYXByZVRyYW5zZm9ybSkge1xyXG4gICAgICBpZiAodHJhbnNmb3JtID4gY29tYXByZVRyYW5zZm9ybSkge1xyXG4gICAgICAgIHNsaWRlclRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke2NvbWFwcmVUcmFuc2Zvcm19cHgsIDBweCwgMHB4KWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFsbG93U3dpcGUgPSBmYWxzZTtcclxuICB9O1xyXG4gIGxldCByZWFjaEVkZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHRyYW5zaXRpb24gPSBmYWxzZTtcclxuICAgIHN3aXBlRW5kKCk7XHJcbiAgICBhbGxvd1N3aXBlID0gdHJ1ZTtcclxuICB9O1xyXG4gIFxyXG5zbGlkZXJUcmFjay5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknO1xyXG5zbGlkZXJMaXN0LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuXHJcbnNsaWRlclRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiBhbGxvd1N3aXBlID0gdHJ1ZSk7XHJcbnNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3dpcGVTdGFydCk7XHJcbnNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZVN0YXJ0KTtcclxuXHJcbmFycm93cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXh0JykpIHtcclxuICAgIHNsaWRlSW5kZXgrKztcclxuICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXYnKSkge1xyXG4gICAgc2xpZGVJbmRleC0tO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzbGlkZSgpO1xyXG59KTsiXSwiZmlsZSI6InNsaWRlci5qcyJ9

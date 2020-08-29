function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}    
burgerMenu('.burger-menu');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidXJnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYnVyZ2VyTWVudShzZWxlY3Rvcikge1xyXG4gICAgbGV0IG1lbnUgPSAkKHNlbGVjdG9yKTtcclxuICAgIGxldCBidXR0b24gPSBtZW51LmZpbmQoJy5idXJnZXItbWVudV9idXR0b24nLCAnLmJ1cmdlci1tZW51X2xpbmVzJyk7XHJcbiAgICBsZXQgbGlua3MgPSBtZW51LmZpbmQoJy5idXJnZXItbWVudV9saW5rJyk7XHJcbiAgICBsZXQgb3ZlcmxheSA9IG1lbnUuZmluZCgnLmJ1cmdlci1tZW51X292ZXJsYXknKTtcclxuXHJcbiAgICBidXR0b24ub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlTWVudSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGlua3Mub24oJ2NsaWNrJywgKCkgPT4gdG9nZ2xlTWVudSgpKTtcclxuICAgIG92ZXJsYXkub24oJ2NsaWNrJywgKCkgPT4gdG9nZ2xlTWVudSgpKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgIG1lbnUudG9nZ2xlQ2xhc3MoJ2J1cmdlci1tZW51X2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBpZiAobWVudS5oYXNDbGFzcygnYnVyZ2VyLW1lbnVfYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVybG93JywgJ3Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gICAgXHJcbmJ1cmdlck1lbnUoJy5idXJnZXItbWVudScpOyJdLCJmaWxlIjoiYnVyZ2VyLmpzIn0=

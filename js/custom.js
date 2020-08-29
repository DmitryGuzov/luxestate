$(document).ready(function () {

    var show = true;
    var countbox = ".box-number";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.box-number').css('opacity', '1');
            $('.box-number').spincrement({
                thousandSeparator: "",
                duration: 2200
            });

            show = false;
        }
    });
    $("#scroll_down").on("click", function (event) {
        event.preventDefault();
        var id = $("#footer_scroll"),
            bottom = $(id).offset().top;

        $('body,html').animate({ scrollTop: bottom }, 1500);
    });
    $(window).scroll(function () {
        if(document.documentElement.clientWidth <=800){
            if (pageYOffset >= 320) {
              document.getElementById('burger-menu').style.display = 'block';
            } else {
                document.getElementById('burger-menu').style.display = 'none';
            }    
        }  
        if(document.documentElement.clientWidth >=800){
            document.getElementById('burger-menu').style.display = 'none';   
        }                                        
        });                
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzaG93ID0gdHJ1ZTtcclxuICAgIHZhciBjb3VudGJveCA9IFwiLmJveC1udW1iZXJcIjtcclxuICAgICQod2luZG93KS5vbihcInNjcm9sbCBsb2FkIHJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaG93KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIHdfdG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciBlX3RvcCA9ICQoY291bnRib3gpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICB2YXIgd19oZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIGRfaGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIGVfaGVpZ2h0ID0gJChjb3VudGJveCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICBpZiAod190b3AgKyA1MDAgPj0gZV90b3AgfHwgd19oZWlnaHQgKyB3X3RvcCA9PSBkX2hlaWdodCB8fCBlX2hlaWdodCArIGVfdG9wIDwgd19oZWlnaHQpIHtcclxuICAgICAgICAgICAgJCgnLmJveC1udW1iZXInKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcuYm94LW51bWJlcicpLnNwaW5jcmVtZW50KHtcclxuICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIyMDBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzaG93ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiI3Njcm9sbF9kb3duXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgPSAkKFwiI2Zvb3Rlcl9zY3JvbGxcIiksXHJcbiAgICAgICAgICAgIGJvdHRvbSA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogYm90dG9tIH0sIDE1MDApO1xyXG4gICAgfSk7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD04MDApe1xyXG4gICAgICAgICAgICBpZiAocGFnZVlPZmZzZXQgPj0gMzIwKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlci1tZW51Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyLW1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGlmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+PTgwMCl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItbWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgICAgICAgICAgXHJcbn0pOyJdLCJmaWxlIjoiY3VzdG9tLmpzIn0=

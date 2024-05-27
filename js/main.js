$(function(){

    setCurrentNavbar();

    $('select').formSelect();

    $('.nav-menu .dropdown-trigger').dropdown({
        coverTrigger: false,
        hover: true
    });

    $('#mobile-sidenav').sidenav({
        edge: 'right'
    });

    $('.collapsible-accordion').collapsible();

    fixedScroll();

    initCookieBanner();

});

function setCurrentNavbar() {

    var url = '/' + window.location.href.replace(/^(?:\/\/|[^/]+)*\//, '').split('?')[0].split('#')[0];
    var item = $('#navbar a[href="' + url + '"]');
    var dropdown = item.closest('.dropdown-content');
    if(dropdown.length) {
        item = dropdown.parent().find('a[data-target="' + dropdown.attr('id') + '"]');
    }

    item.addClass('active');

}

function fixedScroll()
{
    var document = $(window), navbar = $('#navbar');
    var email = $('#fixed-email'), footer = $('#footer'), project = $('.sticky-project');

    document.on('scroll', function() {
        updateScroll($(this).scrollTop());
    });
    updateScroll(document.scrollTop());

    function updateScroll(top) {
        updateNavbar(top);
        updateEmail(top);
        if(project.length) updateProject(top);
    }

    function updateNavbar(top) {

        if (top > 170) {
            navbar.addClass('navbar-fixed');
        } else {
            navbar.removeClass('navbar-fixed');
        }

    }

    function updateEmail(top) {

        var trigger = footer.offset().top - document.height();

        if (top > trigger || top < 170 ) {
            email.addClass('fixed-email-hidden');
        } else {
            email.removeClass('fixed-email-hidden');
        }

    }

    function updateProject(top) {

        var trigger = footer.offset().top - document.height() - 200;

        if (top > trigger || top < 170 ) {
            project.addClass('sticky-project-hidden');
        } else {
            project.removeClass('sticky-project-hidden');
        }

    }

}

function createDynamicModal(id) {
    var modal = $('<div id="' + id + '" class="modal modal-sidebar"><div class="rac-controls"><button class="circle-cta circle-cta-rose rac-prev"><i class="icon-left-arrow"></i></button><button class="circle-cta circle-cta-rose rac-next"><i class="icon-right-arrow"></i></button><button class="circle-cta circle-cta-rose circle-cta-no-borders modal-close"><i class="icon-close"></i></button></div><div class="modal-content"></div></div>');
    $('body').append(modal);
    return modal;
}

function initCookieBanner() {

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
    
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
    
        return "";
    }
    
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
    
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
    
        var expires = "expires="+ d.toUTCString();
    
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    var cookieBanner = document.querySelector('#cookie-banner');
    var hasCookieConsent = getCookie('cookies-consent');

    if (!hasCookieConsent) {
        cookieBanner.classList.remove('cookie-hidden');
    }

    var consentCta = cookieBanner.querySelector('#consent-cookies');

    consentCta.addEventListener('click', () => {
        cookieBanner.classList.add('cookie-hidden');
        setCookie('cookies-consent', 1, 365);
    });

}
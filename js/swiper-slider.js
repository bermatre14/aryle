function swiperSlider(id) {

    new Swiper('#swiper-slider-' + id, {

        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        },

        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1540: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }

    });

    var members = $('#swiper-slider-' + id), memberBlocks = members.find('.block-member'), number = memberBlocks.length;
    var modal = createDynamicModal('modal-member-' + id), modalContent = modal.find('.modal-content');
    var current = 1, prev = modal.find('.rac-prev'), next = modal.find('.rac-next');

    modal.modal({
        inDuration: 200,
        outDuration: 200,
        onOpenStart : function(modal, trigger) {
            displayModalSlide( $(trigger).data('target-slide') );
        }
    });

    prev.click(function() {
        var p = current == 1 ? number : current - 1;
        displayModalSlide(p);
    });

    next.click(function() {
        var n = current == number ? 1 : current + 1;
        displayModalSlide(n);
    });

    function displayModalSlide(id) {

        current = id;

        var slide = members.find('[data-target-slide="' + id + '"]');
        var description = slide.data('target-description');
        var img = slide.find('.member-image img')[0].outerHTML;
        var name = slide.find('.member-name').text();
        var role = slide.find('.member-role').text();

        modalContent.html('<div class="modal-member-img">' + img + '</div><h3 class="modal-member-name">' + name + '</h3><div class="modal-member-role">' + role + '</div><div class="modal-description">' + description + '</div>');

    }

}
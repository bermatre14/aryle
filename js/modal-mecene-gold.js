$(function(){

    var meceneGold = $('#mecene-gold'), number = meceneGold.find('.bloc-mecene-gold').length;
    var modal = createDynamicModal('modal-mecene-gold'), modalContent = modal.find('.modal-content');
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

        var slide = meceneGold.find('[data-target-slide="' + id + '"]');

        //var meceneType = slide.closest('.block-mecene-type')[0].outerHTML.replace('<br>',' - ');
        
        var description = slide.data('target-description');
        var img = slide.find('.mecene-platinium-img img')[0].outerHTML;
        var infos = slide.data('target-infos');
        var name = slide.data('target-name');

        modalContent.html('<div class="modal-mecene-gold-header"><div class="modal-mecene-gold-img">' + img + '</div><div class="modal-mecene-gold-infos"><h3>' + name + '</h3><div>' + infos + '</div></div></div><h3 class="modal-mecene-gold-ribbon ribbon-large ribbon-title">Mécène gold</h3><div class="modal-description">' + description + '</div>');

    }


});
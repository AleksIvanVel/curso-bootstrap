$(function(){
    $("[data-bs-toggle='tooltip']").tooltip();
    $("[data-bs-toggle='popover']").popover();  
    $('.carousel').carousel({
      interval: 5000
    });

    $('#contacto').on('show.bs.modal', function (e){
      console.log('el modal se esta mostrando');
      $('#contacto').removeClass('btn-outline-success');
      $('#contacto').addClass('btn-primary');
      $('#contacto').prop('disabled', true);
    });

      

    $('#contacto').on('shown.bs.modal', function (e){
      console.log('el model se mostró');
    });

    $('#contacto').on('hidde.bs.modal', function (e){
      console.log('el model contato se oculta');
    });

    $('#contacto').on('hidde.bs.modal', function (e){
      console.log('el model contato se ocultó');
      $('#contacto').prop('disabled', false);
    });
  });
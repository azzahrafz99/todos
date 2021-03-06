$(document).ready(function() {

  var n = $( ".view" ).length;
  $( "#todo-count" ).text( n + " items" + " left.");

  $("#new-todo").keypress(function(e) {
      if (e.which == 13) {
				var toAdd = $('input[name=todos]').val();
				$('#todo-list').append("<li><div class='view'><input class='toggle' type='checkbox'><label>"+toAdd+"</label><button class='destroy'></button></div></li>");
        var n = $( ".view" ).length;
        $( "#todo-count" ).text( n + " items" + " left.");
        if (n > 0) {
          $('#footer').show();
        }
      }
  });

	$('body').on('click', '.destroy', function() {
		$(this).parent().parent().remove();
    var n = $( ".view" ).length - 1 + 1;
    $( "#todo-count" ).text( n + " items" + " left.");
    if (n < 1) {
      $('#footer').hide();
    }
	});


	$('body').on('click', '.toggle', function() {
		if($(this).parent().parent().hasClass('completed')){
			$(this).parent().parent().removeClass('completed');
		} else {
			$(this).parent().parent().addClass('completed');
		}
		console.log($(this));
	});

	$('#toggle-all').click(function(){
		console.log($(this));
		$('.toggle').each(function(){
			console.log($(this));
			if($(this).parent().parent().hasClass('completed')){
				$(this).parent().parent().removeClass('completed');
			} else {
				$(this).parent().parent().addClass('completed');
			}

			if($(this).prop('checked')) {
				$(this).prop('checked', false);
			} else {
				$(this).prop('checked', true);
			}
		});
	});

  $('#clear-completed').click(function() {
    $('.toggle').each(function() {
      if ($(this).parent().parent().hasClass('completed')) {
        $(this).parent().remove();
        var n = $( ".view" ).length - 1 + 1;
        $( "#todo-count" ).text( n + " items" + " left.");
        if (n < 1) {
          $('#footer').hide();
        }
      }
    });
  });

  $('#completed').click(function() {
    $('.toggle').each(function() {
      if ($(this).parent().parent().hasClass('completed')) {
        $(this).parent().show();
      } else {
        $(this).parent().hide();
      }
    });
  });

  $('#active').click(function() {
    $('.toggle').each(function() {
      if ($(this).parent().parent().hasClass('completed')) {
        $(this).parent().hide();
      } else {
        $(this).parent().show();
      }
    });
  });

  $('#selected').click(function() {
    $('.toggle').each(function() {
        $(this).parent().show();
    });
  });



});

	// 	if($('.toggle').parent().parent().hasClass('completed')){
	// 		$('input:checkbox').prop('checked', false);
	// 		$('.toggle').parent().parent().removeClass('completed');
	// 	} else {
	// 		$('input:checkbox').prop('checked', true);
	// 		$('.toggle').parent().parent().addClass('completed');
	// 	}
	// });

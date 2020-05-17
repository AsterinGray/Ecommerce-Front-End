function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal)) {
      parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal) && currentVal > 0) {
      parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  $('.qty').on('click', '.button-plus', function(e) {
    incrementValue(e);
  });
  
  $('.qty').on('click', '.button-minus', function(e) {
    decrementValue(e);
  });

function review() {
    if ($(".review-form").height()<=0) {
        $(".review-form").css({"height":"100%"});   
    } else {
        $(".review-form").css({"height":"0"});
    }
}
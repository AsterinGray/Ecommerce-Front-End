function minus() {
    let value = parseInt($("#value").text());
    if (value != 1) {
        $("#value").text(value-1);
    }
}

function plus() {
    let value = parseInt($("#value").text());
    $("#value").text(value+1);
}

function review() {
    if ($(".review-form").height()<=0) {
        $(".review-form").css({"height":"100%"});   
    } else {
        $(".review-form").css({"height":"0"});
    }
}
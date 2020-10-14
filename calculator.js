function Calculator(){
    $("#calResult").removeAttr("class");

    var val1 = parseInt( $("#val1").val());
    var val2 = parseInt ($("#val2").val());
    var selection = $( "#calOptions option:selected" ).val();

    var result = '';

    if(selection =="addition"){
        result = val1 + val2
    }
    else if(selection =="subtraction"){
        result = val1 - val2
    }
    else if(selection == "divide"){
        result = val1 / val2
    }
    else if(selection == "multiply"){
        result = val1 * val2
    }
    //changing result color based on even odd value
    if ( result % 2 == 0) {
        $("#calResult").addClass("text-success v-big-txt border");
        
    }else{
        $("#calResult").addClass("text-danger v-big-txt border");
        
    }
    $("#calResult").text(result);
}
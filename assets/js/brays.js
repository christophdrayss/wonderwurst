
/**
 * Change Price
 */

$('input[type=radio][name=exampleRadios-1pax]').change(function() {
    
    if (this.value == 'option1') {
        $('#price-1pax').html("<sup>€</sup>n/a<span> / Monat</span>");
        $('#jarsperweek-1pax').html("3");
    }
    else if (this.value == 'option2') {
        $('#price-1pax').html("<sup>€</sup>n/a<span> / Monat</span>");
        $('#jarsperweek-1pax').html("4");
    }
    else if (this.value == 'option3') {
        $('#price-1pax').html("<sup>€</sup>19,90<span> / Monat</span>");
        $('#jarsperweek-1pax').html("5");
    }
    else  {
        
    }
});

$('input[type=radio][name=exampleRadios-2pax]').change(function() {
    
    if (this.value == 'option1') {
        $('#price-2pax').html("<sup>€</sup>23,40<span> / Monat</span>");
        $('#jarsperweek-2pax').html("6");
    }
    else if (this.value == 'option2') {
        $('#price-2pax').html("<sup>€</sup>31,20<span> / Monat</span>");
        $('#jarsperweek-2pax').html("8");
    }
    else if (this.value == 'option3') {
        $('#price-2pax').html("<sup>€</sup>39,00<span> / Monat</span>");
        $('#jarsperweek-2pax').html("10");
    }
    else  {
        
    }
});

$('input[type=radio][name=exampleRadios-3pax]').change(function() {
    
    if (this.value == 'option1') {
        $('#price-3pax').html("<sup>€</sup>35,10<span> / Monat</span>");
        $('#jarsperweek-3pax').html("9");
    }
    else if (this.value == 'option2') {
        $('#price-3pax').html("<sup>€</sup>46,80<span> / Monat</span>");
        $('#jarsperweek-3pax').html("12");
    }
    else if (this.value == 'option3') {
        $('#price-3pax').html("<sup>€</sup>58,50<span> / Monat</span>");
        $('#jarsperweek-3pax').html("15");
    }
    else  {
        
    }
});

$('input[type=radio][name=exampleRadios-4pax]').change(function() {
    
    if (this.value == 'option1') {
        $('#price-4pax').html("<sup>€</sup>46,80<span> / Monat</span>");
        $('#jarsperweek-4pax').html("12");
    }
    else if (this.value == 'option2') {
        $('#price-4pax').html("<sup>€</sup>62,40<span> / Monat</span>");
        $('#jarsperweek-4pax').html("16");
    }
    else if (this.value == 'option3') {
        $('#price-4pax').html("<sup>€</sup>78,00<span> / Monat</span>");
        $('#jarsperweek-4pax').html("20");
    }
    else  {
        
    }
});


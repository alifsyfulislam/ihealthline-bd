
/*take me to dail[ad*/
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".call").on('click', function() {
        var link = "tel:10614";
        window.location.href = link;
    });
}



/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/


$(document).ready(function(){
    $("#onlineButton").click(function(){
        $("#preges").toggle();
        var elmnt = document.getElementById("preges");
        elmnt.scrollIntoView();
    });
});




$("a[href='#services']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#packages']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#reg']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#news']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});
//mobile-menu

$('#demo').click(function () {
    $('#myMenu').show('slow');
});

$('.check').click(function () {
    $('#myMenu').hide('slow');
});

// Problem is once mobile menu is click it will show nav link if nav link is click menu will hide or collapse its ok but secon time if i press menu icon menu is not opening












































var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
// document.write(utc);
document.getElementById('rdate').value= utc;

function tempExp(radio) {
    if (radio.checked){
        document.getElementById('mincSpan').style.background = '#17a2b8';
        document.getElementById('mincSpan').style.color = 'white';
    }
}

function tempG(radio) {
    if (radio.checked){
        document.getElementById('gSpan').style.background = '#17a2b8';
        document.getElementById('gSpan').style.color = 'white';
    }
}

function tempBook(radio) {
    if (radio.checked){
        var chkYes = document.getElementById("offcourse2");
        var dvPassport = document.getElementById("waitFor2");
        dvPassport.style.display = chkYes.checked ? "block" : "none";
        // document.getElementById('mediSpan').style.background = '#17a2b8';
        document.getElementById('mediSpan').style.color = 'white';
        document.getElementById('diabeticMessage2').style.color = 'green';
        // alert('Please submit the online form after that visit nearest center along with your diabetic book to complete registration!');
        document.getElementById('diabeticMessage2').innerHTML = "Please give your guide book no. & submit the online form. After submitting visit nearest center along with your diabetic guide book to complete registration!";
    }
}

function tempBook2(radio) {
    if (radio.checked) {
        var chkYes = document.getElementsByClassName("no");
        var dvPassport = document.getElementById("waitFor2");
        dvPassport.style.display = 'none';
        // document.getElementById('diabeticMessage2').innerHTML = "Please submit the online form & visit your nearest center to complete registration!";
    }
}

function tempOn(radio){
    if(radio.checked)
    {
        var chkYes = document.getElementById("offcourse");
        var dvPassport = document.getElementById("waitFor");
        dvPassport.style.display = chkYes.checked ? "block" : "none";
        document.getElementById('mediSpan').style.background = '#17a2b8';
        document.getElementById('mediSpan').style.color = 'white';
        document.getElementById('diabeticMessage').style.color = 'green';
        // alert('Please submit the online form after that visit nearest center along with your diabetic book to complete registration!');
        // document.getElementById('diabeticMessage').innerHTML = "Please submit the online form. After submitting visit nearest center along with your diabetic guide book to complete registration!";
    }
}

function tempOn2(radio){
    if(radio.checked)
    {
        var chkYes = document.getElementsByClassName("no");
        var dvPassport = document.getElementById("waitFor");
        dvPassport.style.display = 'none';
        document.getElementById('mediSpan').style.background = '#17a2b8';
        document.getElementById('mediSpan').style.color = 'white';
        document.getElementById('diabeticMessage').style.color = 'red';
        document.getElementById('diabeticMessage').innerHTML = "Please submit the online form & visit your nearest center to complete registration!";
    }
}

function check() {
    document.getElementById('btnMessage').innerHTML = "Please submit the form & go to the search center & look up your nearest center! You can also download your registration from";
    document.getElementById('btnMessage').style.color = 'green';
    // document.getElementById('btnMessage').style.color = "green !important";
}

function check2() {
    document.getElementById('gSpan').style.background = '#17a2b8';
    document.getElementById('btnMessage').innerHTML = "Please follow the instruction!";
    document.getElementById('btnMessage').style.color = 'red';
}

function checkName(touch) {
    // var regex = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g;
    if (touch == document.getElementById('name'))
    {
        document.getElementById('nameSpan').style.background = '#17a2b8';
        document.getElementById('nameSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('fname'))
    {
        document.getElementById('fnameSpan').style.background = '#17a2b8';
        document.getElementById('fnameSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('mname'))
    {
        document.getElementById('mnameSpan').style.background = '#17a2b8';
        document.getElementById('mnameSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('conNumber'))
    {
        document.getElementById('conSpan').style.background = '#17a2b8';
        document.getElementById('conSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('alterNumber'))
    {
        document.getElementById('aconSpan').style.background = '#17a2b8';
        document.getElementById('aconSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('prof'))
    {
        document.getElementById('profSpan').style.background = '#17a2b8';
        document.getElementById('profSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('nid'))
    {
        document.getElementById('nidSpan').style.background = '#17a2b8';
        document.getElementById('nidSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('address'))
    {
        document.getElementById('addSpan').style.background = '#17a2b8';
        document.getElementById('addSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('dist'))
    {
        document.getElementById('distSpan').style.background = '#17a2b8';
        document.getElementById('distSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('div'))
    {
        document.getElementById('divSpan').style.background = '#17a2b8';
        document.getElementById('divSpan').style.color = 'white';
    }
    else if (touch == document.getElementById('guide'))
    {
        document.getElementById('guiSpan').style.background = '#17a2b8';
        document.getElementById('guiSpan').style.color = 'white';
    };
}

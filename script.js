const name = prompt("Wait, enter ur name fist")
if (name == "Kaira") {
     alert("nice")
}

else if (name == "Kai") {
     alert("nice")
}

else {
    alert("no")
}

jQuery(document).on('scroll', function(){
    jQuery('h1').css("left", Math.max(100 - 0.2*window.scrollY, 1) + "vw");
    })
 
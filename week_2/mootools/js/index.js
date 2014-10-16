var myName = "brent allen";
var num1 = "12.3";
var num2 = "7";
//alert(myName.capitalize());
//alert(num1.toFloat()+num2.toFloat());

document.addEvent("domready", function(){
    var header = document.id("header");
    header.setStyle("color", "red");
    //console.log(header);
    
    var nav = document.id("main-navigation");
    var atags = nav.getElements("a");
    
    nav.addEvent("mouseover", function(e){
        //console.log(this);
        nav.setStyle("background-color", "green");
    });
    
    nav.addEvent("mouseover", function(e){
        atags.setStyle("color", "white");
    });
    
    nav.addEvent("mouseout", function(e){
        nav.setStyle("background-color");
        atags.setStyle("color");
    });
    
    atags.addEvent("click", function(e){
        e.stop();
        alert("Ha ha! I'm not taking you to " + this.get("html"));
    });
    
    header.addEvent("click", function(e){
        header.dissolve();
        
    });
    
});
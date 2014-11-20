document.addEvent("domready", function(){
    var colors = [
        "#ffffff",
        "#66cc33",
        "#336699"
    ];
    var curColor = 0;
   var window1 = new Window("navigator");
   var window2 = new Window("navigator2", {
        navSelector: "nav",
        contentSelector:"ul",
        contentElements:"li"
   });
   
   window1.addEvent("update", function(e){
       curColor++;
       if(curColor >= colors.length)
       {
           curColor = 0;
       }
       document.getElement("body").setStyle("background-color", colors[e.index]);
   });
});
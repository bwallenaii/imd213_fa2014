document.addEvent("domready", function(){
    var productListLimit = 3;
    var productArea = document.id("products");
    var productTemplate = productArea.getElement(".template");
    //Set up my Request.JSON instance
    var jreq = new Request.JSON({
        url: "productinfo.php"
    });
    //variables for AJAX page content
    var mainNav = document.id("main-nav");
    var navTags = mainNav.getElements("a");
    var contentArea = document.id("content");
    
    
    //set up the listener for success
    jreq.addEvent("success", function(products, text){
        
        for(var i = 0; i < products.length && i < productListLimit;++i)
        {
            var product = products[i]; //points to the current product
            var productElement = productTemplate.clone(); //clone our template
            productElement.removeClass("template"); //make this one not a template
            productElement.getElement(".product-name").set("html", product.name); //set the name
            productElement.getElement(".product-price").set("html", "$" + product.price); //set the price
            productElement.getElement(".product-qty").set("html", product.stock); //set the quantity
            
            //productElement.inject(productArea);
            productArea.grab(productElement);
        }
        
    });  
    
    //send the request
    jreq.send();
    
    
    //Updating the content area with AJAX
    contentArea.set("load", {evalScripts:true});
    
    navTags.addEvent("click", function(e){
        e && e.stop ? e.stop():null; //will stop the event if we have one
        var href = this.get("href"); //get the page segment
        contentArea.load(href); //loads content from the href into our content area
    });
    
    navTags[0].fireEvent("click");
});
function checkAllergies(el)
{
    var checkBoxes = $$("input[name='allergies[]']");
    for(var i = 0; i < checkBoxes.length;++i)
    {
        if(checkBoxes[i].checked)
        {
            return true;
        }
    }
    
    el.errors.push("Please select an alergy you have. We know you have one.");
    return false;
}

document.addEvent("domready", function(){

    //NAV START
	var nav = document.id("main-nav");
	var content = document.id("content");
	var atags = nav.getElements("a");
	var contentBlocks = content.getChildren("div");
	
	contentBlocks.set("reveal", {
		duration: 3000,
		transition: "bounce:out"
	});

	contentBlocks.setStyle("display", "none");
	contentBlocks[0].setStyle("display");
	
	atags.addEvent("click", function(e){
		e.stop();

		//find the index
		for(var i = 0; i < atags.length; ++i){
			if(atags[i] == this)
			{
				break;
			}

		}
		//hide all contentBlocks
		contentBlocks.dissolve();
		//show the contentBlocks that we want to keep
		contentBlocks[i].reveal();
		return false;
	});
	
	//NAV END
	
	//FORM VALIDATION START
	var checker = new FormCheck("new-member", {
	    display:{
	        indicateErrors: 2
	    }
	});
	
	
	//FORM VALIDATION END
});
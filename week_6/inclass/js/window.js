var Window = new Class({
	
	Implements: [Options],
	
	options:{
	    navSelector:".navigation",
	    navElements:"a",
	    contentSelector:".content",
	    contentElements:"div",
	    selectedClass:"selected",
	    revealOptions:{
	        duration: 3000,
		    transition: "bounce:out"
	    }
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		
		this.navArea = this.element.getElement(this.options.navSelector);
		this.contentArea = this.element.getElement(this.options.contentSelector);
		this.navElements = this.navArea.getChildren(this.options.navElements);
		this.contentElements = this.contentArea.getChildren(this.options.contentElements);
		
		if(this.navElements.length != this.contentElements.length)
		{
		    throw new Error("The number of navigation elements must match the number of content elements. Go fix your MiniDOM.");
		}
		
		this.navElements.addEvent("click", this.navClicked.bind(this));
		
		if(Fx.Reveal) //if we have the reveal effect
		{
		    this.contentElements.set("reveal", this.options.revealOptions);
		    this.contentElements.setStyle("overflow", "hidden");
		}
		
		this.showContent(0, true);
	},
	
	navClicked: function(e){
	    e.stop();
	    
	    //console.log(e, this);
	    
	    for(var i = 0; i < this.navElements.length; ++i){
			if(this.navElements[i] == e.target)
			{
				break;
			}

		}
		
		this.showContent(i);
	},
	
	showContent:function(index, skipAnimation)
	{
	    this.navElements.removeClass(this.options.selectedClass);
	    this.navElements[index].addClass(this.options.selectedClass);
	    
	    if(Fx.Reveal && !skipAnimation)
	    {
	        this.contentElements.dissolve();
	        this.contentElements[index].reveal();
	    }
	    else
	    {
	        this.contentElements.setStyle("display", "none");
	        this.contentElements[index].setStyle("display");
	    }
	}
});
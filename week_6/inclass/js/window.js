var Window = new Class({
	
	Implements: [Options,Events],
	
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
	element: null,
	navArea: null,
	contentArea: null,
	navElements: null,
	contentElements: null,

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		//collect my needed elements
		this.navArea = this.element.getElement(this.options.navSelector);
		this.contentArea = this.element.getElement(this.options.contentSelector);
		this.navElements = this.navArea.getChildren(this.options.navElements);
		this.contentElements = this.contentArea.getChildren(this.options.contentElements);
		//This makes sure everything will work (not necesserily normal)
		if(this.navElements.length != this.contentElements.length)
		{
		    throw new Error("The number of navigation elements must match the number of content elements. Go fix your MiniDOM.");
		}
		//add Event listeners
		this.navElements.addEvent("click", this.navClicked.bind(this));
		//Set effects if we have them (not necesserily normal)
		if(Fx.Reveal) //if we have the reveal effect
		{
		    this.contentElements.set("reveal", this.options.revealOptions);
		    this.contentElements.setStyle("overflow", "hidden");
		}
		//Show our first content item by default (not necesserily normal)
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
	    this.fireEvent("update", {index:index});
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

var cat = {

    color:"brown",
    size:"medium", //small, medium, large
    fluffiness:5, //1-10
    markings:"none", //none, striped, spotted, brindle
    eyeColor:"yellow",
    speak: function(){
        alert("The "+ this.getDescription() +" said, \"Meow!\"");
    },
    jump: function(){
        alert("The "+ this.getDescription() +" jumped " + (Math.random()*3) + " feet.");
    },
    eat: function(){
        alert("Yum! The "+this.getDescription()+" is happy");
    },
    getDescription: function(){
        var ret = "";
        ret = this.color + ", " + this.size;
        if(this.fluffiness <= 3)
        {
            ret = ret.concat(", short haired");
        }
        else if(this.fluffiness >= 8 )
        {
            ret = ret.concat(", long haired");
        }
        
        if(this.markings != "none" && this.markings)
        {
            ret = ret.concat(", " + this.markings);
        }
        
        ret = ret.concat(" cat with " + this.eyeColor + " eyes");
        
        return ret;
    }
};

cat.speak();
cat.jump();
cat.eat();

cat.fluffiness = 10;
cat.eyeColor = "blue";
cat.markings = "brindle";
cat.size = "frickin' huge";
cat.color = "orange and black";
cat.speak();


console.log(cat);

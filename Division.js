class Division{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.heigth = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectmode(CENTER);
        fill("White");
        rect(pos.x, pos.y, this.width, this.height);
    }
    for( var i = 0; i <=width; i+i + 80){
        divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }    
}
};
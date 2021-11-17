class shapes{
    constructor(maxwidth,maxheigth){
        this.maxwidth=maxwidth;
        this.maxheigth=maxheigth;
    }
   
    
    get Area() {
        return this.maxwidth*this.maxheigth;
    }

}
    
    class circle extends shapes{
        constructor(maxwidth,maxheigth,radius){
            super(maxwidth,maxheigth),
            this.radius=radius;
        }
        get Radius(){
            return radius;
        }
        set Radius( radius){
            this.radius=radius;
        }
       
        get Area(){
            return 3.14*this.radius*this.radius;
        }
    }
    
    class rectangle extends shapes{
        constructor(maxwidth, maxheigth,width,heigth){
            super(maxheigth,maxwidth);
            this.width=width;
            this.heigth=heigth;
        }
       
        
        get Area(){
            return this.heigth*this.width;
        }
    }
    let shapes1= new shapes(2,9);
    console.log(shapes1.Area);
    
    let circle1=new circle(1,5,9);
    console.log(circle1.Area);
    
    let rectangle1=new rectangle(1,5,5,4);
    console.log(rectangle1. Area);
    
    module.exports= {circle,rectangle};



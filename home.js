function abc(){
   def();
   console.log("inside abc"+ a)
   console.log("inside abc " , b)
    function def(){
        console.log("inside def" + a)
        var b = 20
    }
}

var a =10;
abc();

class QuestionOne {
  constructor(){
  
   this.question = createElement("h2");

   this.option1 = createElement("h1");
   this.option2 = createElement("h1")
   this.option3 = createElement("h1")
   this.input = createInput("Type in the Correct Option...")
 }


  display(){

   
   this.question.html("What animal has pupils shapes as rectangles?");
   this.question.position(windowWidth/2-250,windowHeight/2-275);
   
   this.option1.html("1) Dogs");
   this.option1.position(windowWidth/2 - 575,windowHeight/2+100,400);
   
   this.option2.html("2) Crocodiles");
   this.option2.position(windowWidth/2 - 200,windowHeight/2+100,400);

   this.option3.html("3) Goats");
   this.option3.position(windowWidth/2 + 225,windowHeight/2+100,400);

   this.input.position(windowWidth/2 - 200, windowHeight-75)

 }




}
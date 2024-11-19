
// COPY AND PASTE FROM WORKIGN COPY

let startButton;
let nextButton;
//let backButton;
let yesButton, noButton;
let completeButton;
let question1, question2, question3, question4, question5;
let password1, password2, password3, password4, password5;
//let passCorrect;
//let catcher, fallingObject;
let screen = 0;
let score = 0;
let counter = 0;

let explainImg, finalImg, fishImg, nearImg, page2Img, page3Img, resusableImg, titleImg, cakeImg, lemonadeImg; 

function preload()
{
    titleImg = loadImage("../assets/title.png");
    page2Img = loadImage("../assets/page2.png");
    page3Img = loadImage("../assets/page3.png");
    resusableImg = loadImage("../assets/resusable.png");
    explainImg = loadImage("../assets/explain.png");
    finalImg = loadImage("../assets/final.png");
    fishImg = loadImage("../assets/fishnchips.png");
    nearImg = loadImage("../assets/nearend.png");
    cakeImg = loadImage("../assets/cake.png");
    lemonadeImg = loadImage("../assets/lemonade.png");
}


function setup()
{
  createCanvas(600,400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  
  background(titleImg);
  fill("white");
  /*
  text(
    "CyberChef's Recipe for Internet Safety",
    width / 2,
    height / 2 - 150
  );
  fill("black");
  text("Help CyberChef create a tasty meal by learning tips ad tricks about internet safety!", 100, 100, 400);
  
  */
  startButton = new Sprite(width / 2, height / 2 + 100);
  nextButton = new Sprite(-200,-200);
  nextButton.rotationLock = "true";
  // backButton = new Sprite(-200,-200);



  //Creating Yes/No Buttons for Phishing Game
  yesButton = new Sprite(-200,-200,50,50,"k");
  yesButton.color = color("green");

  noButton = new Sprite(-200,-200,50,50,"k");
  noButton.color = color("red");


  //Creating question/answer sprites for final test
  question1 = new Sprite(-200,-200,25,25,"k");
  question1.color = color("white");

  question2 = new Sprite(-200,-200,25,25,"k");
  question2.color = color("white");

  question3 = new Sprite(-200,-200,25,25,"k");
  question3.color = color("white");

  question4 = new Sprite(-200,-200,25,25,"k");
  question4.color = color("white");

  question5 = new Sprite(-200,-200,25,25,"k");
  question5.color = color("white");

  completeButton = new Sprite(-200,-200);
  completeButton.color = color("green");
  completeButton.rotationLock = "true";

  //Creating password sprites for password game
  password1 = new Sprite(-200,-200,25,25);
  password1.color = color("white");

  password2 = new Sprite(-200,-200,25,25);
  password2.color = color("white");

  password3 = new Sprite(-200,-200,25,25);
  password3.color = color("white");

  password4 = new Sprite(-200,-200,25,25);
  password4.color = color("white");

  password5 = new Sprite(-200,-200,25,25);
  password5.color = color("white");
}

function draw()
{
  startButton.width = 100;
  startButton.height = 50;
  startButton.collider = "k";
  startButton.color = "white";
  startButton.text = "START";


  if(startButton.mouse.presses()){
    showScreen1();
    screen = 1;
  }

  if(screen == 1){
    if(nextButton.mouse.presses()){
      screen = 2;
    }
  }
  else if(screen == 2)
  {
    showScreen2();
    if(nextButton.mouse.presses()){
      showScreen3();
      screen = 3;
    }
  }
  else if(screen == 3)
  {
    if(nextButton.mouse.presses()){
      screen = 4;
    }
  }
  else if(screen == 4)
  {
    showScreen4();
    if(nextButton.mouse.presses()){
      screen = 5;
    }
  }
  else if (screen == 5)
  {
    showScreen5();
    if(nextButton.mouse.presses()){
      screen = 6;
    }
  }
  // Minigame 1
  else if (screen == 6)
  {
    showScreen6();
    if(nextButton.mouse.presses()){
      screen = 30;
    }
  }
  else if (screen == 30){
    showScreenLemon();
    if(nextButton.mouse.presses()){
      showScreen7();
      screen = 7;
    }
  }
  // MiniGame 1
  else if (screen == 7)
  {
    if(nextButton.mouse.presses()){
      screen = 8;
    }
  }
  else if (screen == 8)
  {
    showScreen8();
    if(nextButton.mouse.presses()){
      screen = 9;
    }
  }
  // MiniGame 2
  else if(screen == 9)
  {
  background(resusableImg);
  text("In Phishing Dectector, click green for phishing emails and red for legitimate emails!",100,50,400);
  if(nextButton.mouse.presses()){
    screen = 10;
  }
  }

  else if(screen == 10){
    if(nextButton.mouse.presses()){
      screen = 11;
  }
  }
  else if(screen==11){
    showMiniScreen1();
    if(yesButton.mouse.presses()){
      screen = 12;
  }
  }
  else if(screen==12){
    showMiniScreen2();
    if(yesButton.mouse.presses()){
      screen = 13;
    }
  }
  else if(screen==13){
    showMiniScreen3();
    if(noButton.mouse.presses()){
      screen = 14;
  }
  }
  else if(screen == 14){
    showMiniScreen4();
    if(yesButton.mouse.presses()){
      screen = 15;
    }
  }
  else if(screen == 15){
    showMiniScreen5(); 
    if(noButton.mouse.presses()){
      screen = 16;
    }
  }
  else if (screen == 16){
    showScreen16();
    if(nextButton.mouse.presses()){
      screen = 17;
    }
  }

  else if (screen == 17){
    showScreen17();
    if(nextButton.mouse.presses()){
      screen = 18;
    }
  }

  else if (screen == 18){
    showScreen18();
    if(nextButton.mouse.presses()){
      screen = 19;
    }
  }

  else if (screen == 19){
    showScreen19();
    if(nextButton.mouse.presses()){
      screen = 20;
    }
  }

  else if(screen == 20){
    showScreen20();
    if(nextButton.mouse.presses()){
      screen = 21;
      
    }
  }
  else if(screen == 21){
    showScreen21();
  }
    
  

  /*else if (screen == 8)
  {
    showMiniGame1();
  }
  */
  

}

function showScreen1(){
  startButton.pos = {x: -200, y: -200};
  background(page2Img);
  //fill("white");
  textFont('Courier New'); 
  textStyle(BOLD);
  text("CyberChef's restaurant is about to have its grand opening, but they need one more recipe to serve on the big day!",180,60,400);

  showNext();
}

function showScreen2()
{
  background(page3Img);
  text("While CyberChef was checking was websurfing for ideas, they noticed a suspicious email in their inbox. It gave them a great idea!", 180,50,400);
  showNext();
}

function showScreen3()
{
  background(resusableImg);
  text("Help Cyberchef build their menu by learning how to be safe online!", 100,50,400);
  showNext();
}

function showScreen4()
{
  background(resusableImg);
  text("Something we all use online are passwords! Because of how important they are, it's crucial you're careful in how/when you use them.", 100,50,400);
  showNext();
}

function showScreen5()
{
  background(resusableImg);
  text("1. Don't use recognizable words like 'password' or '12345'\n 2. Don't reuse passwords across your accounts\n 3. Mix upper/lowercase letters\n 4. Don't share your passwords with others!\n 5. Don't use personal info like your name or address!",100,70,400);
  showNext();
}


function showScreen6()
{
  background(resusableImg);
  text("Use these tips in: PASSWORD DETECTOR, select the good passwords!", 100,10,400);
  password1.pos = {x: 100, y:90};
  password2.pos = {x: 100, y:140};
  password3.pos = {x: 100, y:190};
  password4.pos = {x: 100, y:240};
  password5.pos = {x: 100, y:290};



  text("password_password", 250, 90);
  text("gJ12!!fVBopD90", 250, 140);
  text("1234567890", 250, 190);
  text("!!90sdfDFasdfK_!", 250, 240);
  text("MiaFoster03", 200, 300);

  if(password1.mouse.presses()){
    if(password1.color.levels[0] === 255){
      password1.color = color("black");
    }
    else{
      password1.color = color("white");
    }
  }
  if(password2.mouse.presses()){
    if(password2.color.levels[0] === 255){
      password2.color = color("black");
    }
    else{
      password2.color = color("white");
    }
  }
  if(password3.mouse.presses()){
    if(password3.color.levels[0] === 255){
      password3.color = color("black");
    }
    else{
      password3.color = color("white");
    }
  }
  if(password4.mouse.presses()){
    if(password4.color.levels[0] === 255){
      password4.color = color("black");
    }
    else{
      password4.color = color("white");
    }
  }
  if(password5.mouse.presses()){
    if(password5.color.levels[0] === 255){
      password5.color = color("black");
    }
    else{
      password5.color = color("white");
    }
  }

  if(password2.color == "black" && password4.color == "black"){
    passwordCorrect = true;
  }

}


function showScreen7()
{
  background(resusableImg);
  text("Now let's talk 'fishing!'\nBut not real fish! Phishing is where people who want to take your info send fake emails\nThey hope to trick you into clicking links, or talking to fake people to steal and use your personal information!", 100,50,400);
  showNext();
}

// Catching a fish (phish hehe) for the final dish?
// 5 Screens to detect
function showScreen8()
{
  background(resusableImg);
  text("Here are some important tips to detect phishing!\n1.Message has lots of typos\n2.They promise something too and unexpected good to be true (you didn't enter a raffle for a cruise!)\n3.Email domain or link is wrong (google.com vs. gooogle.com",100,50,400);
}

function showScreen16()
{
  yesButton.pos = {x: -200, y:-200};
  noButton.pos = {x: -200, y:-200};
  background(fishImg)
  text("Congrats on completing the Phishing Game! CyberChef has added Fish (haha) and Chips to the Menu", 100,50,400);
  showNext();
}

function showScreen17()
{
  background(nearImg);
  text("Are you ready to help CyberChef with the ultimate test before opening?", 100,50,400);
}

function showScreen18()
{
  background(resusableImg);
  text("Here's a refresher of some you've learned so far: 1.Don't use personal information in passwords\n2.Always double check the source and content of emails\n3.Don't reuse passwords", 100,50,400);
}

//Final Game
function showScreen19()
{
  removeNext();

  completeButton.pos = {x: width/2 + 100, y: height/2 + 150}
  completeButton.width = 75;
  completeButton.collider = "k";
  completeButton.text = "DONE";

  background(resusableImg);
  question1.pos = {x: 15, y:100};
  question2.pos = {x: 15, y:150};
  question3.pos = {x: 15, y:200};
  question4.pos = {x: 15, y:250};
  question5.pos = {x: 15, y:300};

  text("Unexpected emails are likely phishing emails", 320,110);
  text("I should use my full name for my password", 315,160);
  text("Emails from fake companies are phishing emails", 330,210);
  text("Changing my password for sites is a bad idea", 320,260);
  text("I feel safer on the internet!", 250,310);

  // Switching between colors when clicking
 


  if(question1.mouse.presses()){

    if(question1.color.levels[0] === 255){
      question1.color = color("black");
    }
    else{
      question1.color = color("white");
    }
  }
  if(question2.mouse.presses()){
    if(question2.color.levels[0] === 255){
      question2.color = color("black");
    }
    else{
      question2.color = color("white");
    }
  }
  if(question3.mouse.presses()){
    if(question3.color.levels[0] === 255){
      question3.color = color("black");
    }
    else{
      question3.color = color("white");
    }
  }
  if(question4.mouse.presses()){
    if(question4.color.levels[0] === 255){
      question4.color = color("black");
    }
    else{
      question4.color = color("white");
    }
  }
  if(question5.mouse.presses()){
    if(question5.color.levels[0] === 255){
      question5.color = color("black");
    }
    else{
      question5.color = color("white");
    }
  }

  //checking for correct answers
  if((completeButton.mouse.presses())){
    screen = 20;
  }

}

function showScreen20()
{
  question1.pos = {x: -200, y:-200};
  question2.pos = {x: -200, y:-200};
  question3.pos = {x: -200, y:-200};
  question4.pos = {x: -200, y:-200};
  question5.pos = {x: -200, y:-200};
  completeButton.pos ={x: -200, y:-200};

  background(cakeImg);
  text("Great job, cake is added to the menu! Testing the information you know is a great addition to learning like a sweet treat!", 100, 30, 400);
  showNext();
}

function showScreen21()
{
  background(finalImg);
  removeNext();
  text("Congratulations! CyberChef has a full Menu, and you are smarter on Internet Safety!", 100, 50, 400);
}


function showMiniScreen1()
{
  removeNext();
  background(resusableImg);
  text("prizzes@gmail.com:\nHEY! YOU'VE WONN $1000000 DOLLRAS REDEEM WITH TIHS LINK:\na89fajdfsdfjal.com/fraud",100,50,400);
  yesButton.pos = {x: width/2 - 35, y:height/2+100};
  noButton.pos = {x: width/2 + 35, y:height/2 +100};
  

}
function showMiniScreen2()
{
  background(resusableImg);
  text("DlSNEY@yahoo.com:\n Congrats! You've won a 30 day disney cruise for being so cool :) Redeem below:\n DlSNEYGIFTS.COM/REDEEM",100,50,400);

}
function showMiniScreen3()
{
  background(resusableImg);
  text("grandmadora@gmail.com:\nHappy Birthday Sweetie! Here's a special present for you:\n www.giftcards.com",100,50,400);

}
function showMiniScreen4()
{
  background(resusableImg);
  text("randomguy@hotmail.com:\nClick this link or else punk\nwww.virusesgalore.net",100,50,400);
  
}
function showMiniScreen5()
{
  background(resusableImg);
  text("jhardwood@school.edu:\nDear Student,\nIf you're getting this email, it means you forgot to upload your persmission slip to canvas, please do so below:\ncanvas.com/school\nSincerely, Ms. Hardwood",100,50,400);

}

function showScreenLemon()
{
  password1.pos = {x: -200, y:-200};
  password2.pos = {x: -200, y:-200};
  password3.pos = {x: -200, y:-200};
  password4.pos = {x: -200, y:-200};
  password5.pos = {x: -200, y:-200};
  background(lemonadeImg);
  text("Good job, CyberChef added lemonade to the menu! Like lemonade, passwords need a balance to be good! Too much of one ingredient will make them unusable!",100,50,400);
}


function showNext()
{
  nextButton.pos = {x: width/2, y: height/2 + 150}
  nextButton.width = 75;
  nextButton.collider = "k";
  nextButton.color = "white";
  nextButton.text = "NEXT"
}

function removeNext()
{
  nextButton.pos = {x: -200, y: -200};
}





let palavra;

function setup() {
  createCanvas(400, 400);
 palavra=palavraAleatória();
}

function palavraAleatória(){
   let palavras=["Carro","Agatha", "foda","Duda"];
  return random(palavras);
}

function inicializaCores(){
   background("black");
  fill("red");
  textSize(40);
  textAlign(CENTER,CENTER);
}

function palavraParcial(minimo,maximo){
   let quantidade=map(mouseX,minimo,maximo,1,palavra.length)
  let parcial = palavra.substring(0,quantidade);
  return parcial;
}

function draw() {
 inicializaCores();
 let texto= palavraParcial(0,width);
    
  text (texto,200,200);
  /*if(mouseX<50){
    let palavra="C"
    text(palavra,200,200);
  }else if(mouseX<100){
    let palavra = "Ca";
    text(palavra,200,200);
  } else if(mouseX<150){
    let palavra = "Car";
    text(palavra,200,200);
  } else if(mouseX<200){
    let palavra = "Carr";
    text(palavra,200,200);
        } else if(mouseX<250){
    let palavra = "Carro";
    text(palavra,200,200);
  } */
}
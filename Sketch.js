//posicao do circulo
var x = 200;
var y = 200;

//velocidade do circulo
var vx = Math.floor(Math.random() * 10) + 1;
var vy = Math.floor(Math.random() * 10) + 1;


// funcao setup do p5Js
function setup() {
    createCanvas(400, 400);
   
    }


//funcao draw do p5Js
function draw() {
//desenha um circulo
    background(0);
    fill(255);
    ellipse(x, y, 50, 50);  
    x = x + vx;
    y = y + vy;

  // se tpocar na parede, inverte a velocidade
    if (x < 25 || x > 375) {
        vx = vx * -1;
    }
    //idem para a parede de cima e de baixo
    if (y < 25 || y > 375) {
        vy = vy * -1;
    }

}


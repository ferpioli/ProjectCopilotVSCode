class Bola{
    constructor(x,y,vx,vy){
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = 25;
        this.reset();
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
    }
    reset(){
        this.x = width/2;
        this.y = height/2;  
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
    }
    update(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        if(this.x <this.r || this.x > width - this.r){
            this.reset();
        }

        // se tocar na parede, inverte a velocidade
        if (this.x < 25 || this.x > width -25) {
            this.vx = this.vx * -1;
        }
        //idem para a parede de cima e de baixo
        if (this.y < 25 || this.y > height -25) {
            this.vy = this.vy * -1;
        }
    }
    desenha(){
        fill(255);
        ellipse(this.x, this.y, 50, 50);  
    }
}
var bola;
// funcao setup do p5Js
function setup() {
    createCanvas(800, 400);
    bola = new Bola(200,200,Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 10) + 1);
   
    }


//funcao draw do p5Js
function draw() {
//desenha uma bola
    background(0);
    bola.desenha();
    bola.update();
}
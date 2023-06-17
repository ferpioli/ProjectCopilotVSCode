class Raquete {
    constructor() {
        this.x = 30;
        this.y = height / 2;
        this.w = 10;
        this.h = 60;

    }
    desenha() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }
    update() {
        this.y = mouseY;
        //limitar dentro da tela
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y > height - this.h) {
            this.y = height - this.h;
        }
    }
}
class Bola {
    constructor(x, y, vx, vy) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = 25;
        this.reset();
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
    }
    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
    }
    update() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        if (this.x < this.r || this.x > width - this.r) {
            this.reset();
        }

        // se tocar na parede, inverte a velocidade
        if (this.x < 25 || this.x > width - 25) {
            this.vx = this.vx * -1;
        }
        //idem para a parede de cima e de baixo
        if (this.y < 25 || this.y > height - 25) {
            this.vy = this.vy * -1;
        }
        //se colisao com o jogador inverte a velocidade considerando o raio da bola
        const colideNoX = this.x - this.r > jogador.x && this.x -this.r < jogador.x + jogador.w;
        const colideNoY = 
        this.y + this.r >= jogador.y && 
        this.y - this.r <= jogador.y + jogador.h;

        if (colideNoX && colideNoY) {
            this.vx = this.vx * -1;
        }

    }
    desenha() {
        fill(255);
        ellipse(this.x, this.y, 50, 50);
    }
}
let bola;
let jogador;

// funcao setup do p5Js
function setup() {
    createCanvas(800, 400);
    bola = new Bola(200, 200, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
    jogador = new Raquete();


}


//funcao draw do p5Js
function draw() {
    //desenha uma bola
    background(0);
    bola.desenha();
    bola.update();
    jogador.desenha();
    jogador.update();
}
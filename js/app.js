
const world = document.querySelector('#gameBoard');
const c = world.getContext('2d');

world.width = world.clientWidth;
world.height = world.clientHeight;

let frames = 0;

const keys = {
    ArrowLeft: {pressed:false},
    ArrowRight: {pressed:false},
}

class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        if (keys.ArrowLeft.pressed) {
            this.x -= 5;
        }
        if (keys.ArrowRight.pressed) {
            this.x += 5;
        }
    }
}

const player = new Player();

// Boucle d'animation
const animationLoop = () => {
    requestAnimationFrame(animationLoop);
    // console.log(frames);
  
  
    frames++;
}
animationLoop();
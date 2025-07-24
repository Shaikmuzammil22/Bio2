const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Background animation (simple floating circles)
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Circle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = 10 + Math.random() * 20;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.alpha = 0.2 + Math.random() * 0.3;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < -this.radius) this.x = width + this.radius;
    else if (this.x > width + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = height + this.radius;
    else if (this.y > height + this.radius) this.y = -this.radius;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 0, ${this.alpha})`;
    ctx.fill();
  }
}

const circles = [];
for(let i=0; i<40; i++) {
  circles.push(new Circle());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  circles.forEach(circle => {
    circle.update();
    circle.draw();
  });
  requestAnimationFrame(animate);
}
animate();

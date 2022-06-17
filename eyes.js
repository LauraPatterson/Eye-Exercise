var balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  var x = (event.clientX * 100) / window.innerWidth + '%';
  var y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < balls.length; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

function addEyes(){
    const ball = document.createElement("div");
    ball.className = "ball";
    const eye = document.createElement("div");
    eye.className = "eye";
    eye.appendChild(ball);
    document.getElementById("eyes").appendChild(eye);
}

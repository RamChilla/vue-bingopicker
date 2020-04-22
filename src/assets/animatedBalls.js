export default function(num) {
    num = num ? num : 25;

    // var w = window.innerWidth;
    // var h = window.innerHeight;
    var w = 256;
    var h = 256;
    var canvas = document.getElementById("canvas");
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext("2d");
    var colors = [
        "#FF5733",
        "#7dcea0",
        "#e67e22",
        "#b2babb",
        "#f7dc6f",
        "#7d3c98",
        "#d7bde2"
    ];
    function Circle(x, y, dx, dy, color, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.radius = radius;
        this.draw = function () {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.strokeStlye = "black";
            ctx.stroke();
            ctx.fill();
        };
        this.update = function () {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + this.radius >= canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            } else if (
                this.y + this.radius >= canvas.height ||
                this.y - this.radius < 0
            ) {
                this.dy = -this.dy;
            }
        };
    }
    var circleArray = [];
    function random(min, max) {
        return Math.random() * (max - min + 1);
    }
    for (var i = 0; i < num; i++) {
        var radius = random(5, 15);
        var x = Math.random() * (w - radius * 2) + radius;
        var y = Math.random() * (h - radius * 2) + radius;
        var dx = Math.random() - 0.5 * 4;
        var dy = Math.random() - 0.3 * 5;
        var color = colors[Math.floor(Math.random() * colors.length)];
        circleArray.push(new Circle(x, y, dx, dy, color, radius));
    }
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].draw();
            circleArray[i].update();
        }
    }
    animate();
}
/** p5.turtle-is.js
 Copyright 2015 Yutaka Catch.

 instance mode and draw static.
 release under the MIT License.
 **/

var Pjs;

var var_angulo;

var result;

var s = function(p) {
	var turtles_path = [];
	var pathPointer = 0;
	var turtle;
	var turtleSprite;
	var tPlane;
	var stack_moves= [];

	p.setup = function() {
		p.createCanvas(500, 500);
		p.background(255);
		p.fill(255);

		tPlane = p.createGraphics(p.width, p.height);
		
		// Start turtle code - recode turtle moving. -------------------------------------
		
		turtle = new p.Turtle();
		turtle.x = 250;
		turtle.y = 500;
		turtle.penDown = true;
		turtle.penColor = turtle.color.black;

		turtle.left(180)

		var angulo;

		if(var_angulo){
			angulo= var_angulo			
		}else{
			angulo=60
		}

		if(result){
			stack=result.split("")
			stack.forEach(function(element) {
				switch(element){
					case 'F':
						turtle.forward(5)
						break;
					case '+':
						turtle.left(angulo)
						break;
					case '-':
						turtle.right(angulo)
						break;
					case '[':
						pos=[turtle.x,turtle.y,turtle.angleInRadians]
						stack_moves.push(pos)
						break;
					case ']':
						temp=stack_moves.pop()
						turtle.x=temp[0]
						turtle.y=temp[1]
						turtle.angleInRadians=temp[2]
						break;
				}

				//console.log(stack_moves)
			    
			});

		}

		
		// End of turtle code ------------------------------------------------------------
	};

	p.TBody = function() {
		this.x = 200;
		this.y = 60;
		this.step = 3;
		this.stepAngle = Math.PI / 36;
		this.angleInRadians = 0;
		this.penDown = false;
		this.penColor = "#000000";
		this.lineWidth = 2;
	};

	p.Turtle = function() {
		var body = new p.TBody();
		for (var prop in body) {
			this[prop] = body[prop];
		};

		this.color = {
			black : "#000000",
			gray: "#808080",
			lightgray: "#C0C0C0",
			red: "#ff0000",
			green: "#00ff00",
			blue: "#0000ff",
			yellow: "#ffff00",
			magenta: "#ff00ff",
			aqua: "#00ffff",
			white: "#ffffff"
		};

		this.forward = function(length) {
			var x0 = this.x;
			var y0 = this.y;
			var xx = Math.sin(this.angleInRadians);
			var yy = Math.cos(this.angleInRadians);
			this.x = x0 + length * xx;
			this.y = y0 + length * yy;
			
			if (this.penDown) {
				p.stroke(this.penColor);
				p.strokeWeight(this.lineWidth);
				p.line(this.x, this.y, x0, y0);
			}
		};
		
		this.back = function(length) {
			this.forward(-length);
		};
		
		this.left = function(angleInDegrees) {
			var angle0 = this.angleInRadians;
			var targetAngle = angleInDegrees * Math.PI / 180.0;
			this.angleInRadians = angle0 + targetAngle;
			if(targetAngle >= Math.PI) {
				targetAngle -= Math.PI;
			}
		};
		
		this.right = function(angleInDegrees) {
			this.left(-angleInDegrees);
		};
	};

};

Pjs = new p5(s, "p5Canvas");
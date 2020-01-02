class Line
{
	constructor(x, y, length, rot_speed,
		rot_direction='clockwise', draw=true,
		red=floor(random(256)),
		green=floor(random(256)),
		blue=floor(random(256)),
		paint_radius_x = 5,
		paint_radius_y = 5)
	{
		this.center_x = x;
		this.center_y = y;
		this.length = length;
		this.rot_speed = rot_speed;
		this.rot_direction = (rot_direction=='clockwise' || rot_direction=='+') ? 1 : -1;
		this.draw = draw;
		this.R = red;
		this.G = green;
		this.B = blue;
		this.paint_radius_x = paint_radius_x;
		this.paint_radius_y = paint_radius_y;

		this.end_x = this.center_x + this.length;
		this.end_y = this.center_y;
		this.t = 0;
		noStroke();
	}

	display_line()
	{
		stroke("#ddd");
		line(this.center_x,this.center_y,this.end_x,this.end_y);
	}
	display_pattern(dot=false)
	{
		if (this.draw)
		{
			fill(this.R, this.G, this.B);	
			noStroke();
			if (dot)
			{
				ellipse(this.end_x, this.end_y, 1.5*this.paint_radius_x, 1.5*this.paint_radius_y);
			}
			else
			{
				ellipse(this.end_x, this.end_y, this.paint_radius_x,this.paint_radius_y);
			}
			stroke(1);
		}
	}

	display_dot()
	{
		this.display_pattern(true);
	}

	display_structure()
	{
		stroke("#dddddd");
		noFill()
		ellipse(this.center_x, this.center_y, this.length*2, this.length*2);
		stroke(1);
	}

	rotate()
	{
		this.end_x = this.center_x + this.length*cos(0.001 * this.t*this.rot_speed);
		this.end_y = this.center_y + this.rot_direction * this.length*sin(0.001 * this.t*this.rot_speed);
		this.t++;
	}

	update_rot_direction(rot_direction)
	{
		this.rot_direction = (rot_direction=='clockwise' || rot_direction=='+') ? 1 : -1;
	}
}

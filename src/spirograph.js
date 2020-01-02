class Spirograph
{
	constructor(conf)
	{
		this.n = conf.lines.length;
		this.l = [];
		this.pattern_vision = false;
		for (let i=0;i < this.n; i++)
		{
			var new_line;
			new_line = new Line(
				(i == 0) ? width/2 : this.l[i-1].end_x,
				(i == 0) ? height/2 : this.l[i-1].end_y,
				conf.lines[i].line_length,
				conf.lines[i].rotation_speed,
				conf.lines[i].rotation_direction,
				conf.lines[i].draw,
				conf.lines[i].red,
				conf.lines[i].green,
				conf.lines[i].blue,
				conf.lines[i].paint_radius_x,
				conf.lines[i].paint_radius_y,
				);
			
			this.l.push(new_line);
		}
	}

	centralize()
	{
		this.l[0].center_x = width/2;
		this.l[0].center_y = height/2;
	}

	update()
	{
		if(this.l.length > 0)
		{
			this.l[0].rotate();
			for (let i = 1; i < this.l.length; i++)
			{
				this.l[i].center_x = this.l[i-1].end_x;
				this.l[i].center_y = this.l[i-1].end_y;
				this.l[i].rotate();
			}
		}
	}

	display()
	{
		if (this.pattern_vision)
		{
			for (let i = 0; i < this.l.length; i++)
			{
				this.l[i].display_pattern();
			}

		}
		else
		{	
			background("#222")
			for (let i = 0; i < this.l.length; i++)
			{
				this.l[i].display_line();
				this.l[i].display_structure();
				this.l[i].display_dot();
			}
		}
	}

	toogle_vision()
	{
		background('#222');
		this.pattern_vision = !this.pattern_vision;
	}

	reload(conf)
	{
		for (let i = 0; i < conf.lines.length; i++)
		{
			this.l[i].length = conf.lines[i].line_length;
			this.l[i].rot_speed = conf.lines[i].rotation_speed;
			this.l[i].update_rot_direction(conf.lines[i].rotation_direction);
			this.l[i].draw = conf.lines[i].draw;
			this.l[i].paint_radius_x = conf.lines[i].paint_radius_x;
			this.l[i].paint_radius_y = conf.lines[i].paint_radius_y;
		}
	}
}
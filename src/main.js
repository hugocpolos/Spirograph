function setup()
{
	// console.log('rodou setup');
	record_gif = false;
	recorder = null;
	if (record_gif)
	{
		recorder = new P5Recorder({gifLength: 100, framerate: 30});
	}
	else delete recorder;
	createCanvas(window.innerWidth,window.innerHeight);
	frameRate(60);
	s = new Spirograph({
		lines : [
		{
			line_length : 10 + floor(random(90)),
			rotation_speed : 1 + floor(random(39)),
			rotation_direction: (floor(random(2)) % 2 == 0) ? "clockwise" : "anti",
			draw: (floor(random(2)) % 2 == 0)
		},
		{
			line_length : 10 + floor(random(90)),
			rotation_speed : 1 + floor(random(39)),
			rotation_direction: (floor(random(2)) % 2 == 0) ? "clockwise" : "anti",
			draw: (floor(random(2)) % 2 == 0)
		},
		{
			line_length : 10 + floor(random(90)),
			rotation_speed : 1 + floor(random(39)),
			rotation_direction: (floor(random(2)) % 2 == 0) ? "clockwise" : "anti",
			draw: (floor(random(2)) % 2 == 0)
		},
		{
			line_length : 10 + floor(random(90)),
			rotation_speed : 1 + floor(random(39)),
			rotation_direction: (floor(random(2)) % 2 == 0) ? "clockwise" : "anti",
			draw: (floor(random(2)) % 2 == 0)
		},
		]
	});
	background("#222222");
}
function draw()
{
	// background("#222222");
	s.display();
	s.update();
	if(record_gif)
	{
		recorder.capture(frameCount);
	}
}

function keyPressed()
{
	// console.log(keyCode);
	if (keyCode == 32) //spacebar
	{
		s.toogle_vision();
	}
	if (keyCode == 81)
	{
		restart();
	}
}

function windowResized()
{
	// resizeCanvas(window.innerWidth,window.innerHeight);
	// s.centralize();
	// background("#222222");
}

function reload_spirograph()
{
	s.reload(getconfig());
}

function restart()
{
	s = new Spirograph(getconfig());
}
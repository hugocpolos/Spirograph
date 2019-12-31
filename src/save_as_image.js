function save_as_tif()
{
	save("spiro_"+
		Math.random().toString(20).substring(10)+
		".tif");
}

function save_as_gif()
{
	recorder.finish();
	draw();
}

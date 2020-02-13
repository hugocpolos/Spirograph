function getconfig()
{
	var config_obj = {
		lines: []
	};

	for (var i = 0; i < $(".input").length; i++)
	{
		let new_line = {}
		new_line.line_length = $(".linelength").eq(i).val();
		new_line.rotation_speed = $(".rotationspeed").eq(i).val();
		new_line.rotation_direction = $(".rotationdirection").eq(i).val();
		new_line.draw = $(".draw").eq(i).prop('checked');
		new_line.paint_radius_x = $(".xradius").eq(i).val();
		new_line.paint_radius_y = $(".yradius").eq(i).val();
		config_obj.lines.push(new_line);
	}
	// console.log(config_obj);
	return config_obj;
}


var line_counter = 0;
var slider_counter = 0; 
function add_line()
{
	line_counter++;
	var new_input = "\
	<div class=\"input\">\
			<div style=\"font-size: 1.1em;\">Circle"+line_counter+"</div>\
			<div class=\"two-column\">\
			Radius:\
			<div class=\"slidecontainer\">\
			  <input type=\"range\" id=\""+(slider_counter++)+"\" oninput=\"update_rage_value(this);reload_spirograph();\" min=\"1\" max=\"250\" value=\"50\" class=\"slider linelength column\">\
			  <span class=\"output\">50</span>\
			</div>\
			</div>\
			<div class=\"two-column\">\
			Rotation Speed:\
			<div class=\"slidecontainer\">\
			  <input type=\"range\" id=\""+(slider_counter++)+"\" oninput=\"update_rage_value(this);reload_spirograph();\" min=\"1\" max=\"100\" value=\"20\" class=\"slider rotationspeed column\">\
			  <span class=\"output\">20</span>\
			</div>\
			</div>\
			<!-- Rotation Direction -->\
			<button style=\"float: right;display: block; width: 100%\" value=\"+\" onclick=\"toogle_rotate(this);reload_spirograph();\" class=\"rotationdirection\">Direction Positive</i></button>\
			<div>Brush</div> \
			<div class=\"two-column\">\
			x-Radius:\
			<div class=\"slidecontainer\">\
			  <input type=\"range\" id=\""+(slider_counter++)+"\"oninput=\"update_rage_value(this);reload_spirograph();\" min=\"1\" max=\"20\" value=\"5\" class=\"slider xradius column\">\
			  <span class=\"output\">5</span>\
			</div>\
			</div>\
			<div class=\"two-column\">\
			y-Radius:\
			<div class=\"slidecontainer\">\
			  <input type=\"range\" id=\""+(slider_counter++)+"\" oninput=\"update_rage_value(this);reload_spirograph();\" min=\"1\" max=\"20\" value=\"5\" class=\"slider yradius column\">\
			  <span class=\"output\">5</span>\
			</div>\
			</div>\
			Draw:\
			<input style=\"float: right; display: block;\" type=\"checkbox\" class=\"draw\" onchange=\"reload_spirograph();\" checked>\
	</div>\
	" 
	$("#inputbox").append(new_input);
}

function del_line()
{
	$(".input").eq(this.length-1).remove();
	if(line_counter > 0)
	{
		line_counter--;
		slider_counter -= 4;
	}
}

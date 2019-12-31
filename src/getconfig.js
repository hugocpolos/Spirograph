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
		config_obj.lines.push(new_line);
	}
	console.log(config_obj);
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
			Radius:\
			<div class=\"slidecontainer\">\
			  <input type=\"range\" id=\""+(slider_counter++)+"\" oninput=\"update_rage_value(this);\" min=\"1\" max=\"250\" value=\"50\" class=\"slider linelength\">\
			  <span class=\"output\">50</span>\
			</div>\
			Rotation Speed:\
			<div class=\"slidecontainer\">\
			  <input type=\"range\" id=\""+(slider_counter++)+"\" oninput=\"update_rage_value(this);\" min=\"1\" max=\"100\" value=\"20\" class=\"slider rotationspeed\">\
			  <span class=\"output\">20</span>\
			</div>\
			<!-- Rotation Direction -->\
			<button style=\"float: right;display: block; width: 100%\" value=\"+\" onclick=\"toogle_rotate(this)\" class=\"rotationdirection\">Direction Positive</i></button>\
			Draw:\
			<input style=\"float: right; display: block;\" type=\"checkbox\" class=\"draw\" checked>\
	</div>\
	" 
	$("#inputbox").append(new_input);
	/*<div class="input">
			<div>Line 1</div>
			Line length:
			<div class="slidecontainer">
			  <input type="range" id="0" oninput="update_rage_value(this);" min="1" max="100" value="50" class="slider linelength">
			  <span class="output"></span>
			</div>
			Rotation Speed:
			<div class="slidecontainer">
			  <input type="range" id="1" oninput="update_rage_value(this);" min="1" max="500" value="250" class="slider rotationspeed">
			  <span class="output"></span>
			</div>
			<!-- Rotation Direction -->
			<button style="float: right;display: block; width: 100%" value="+" onclick="toogle_rotate(this)" class="rotationdirection">Direction Positive</i></button>
			Draw:
			<input style="float: right; display: block;" type="checkbox" class="draw">
	</div>*/
}

function del_line()
{
	$(".input").eq(this.length-1).remove();
	if(line_counter > 0)
	{
		line_counter--;
		slider_counter -= 2;
	}
}


$(".rotationdirection").on('input',function(){
		console.log('aaaa');
});
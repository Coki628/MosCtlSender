function sender(action, url) {

	var $data = $("input[name='" + action + "']");

	$("#" + action).submit(function(event) {

		event.preventDefault();
		$.post(url + "?mode=add", {data: $data.val()}, function(data) { $data.val(""); });
	});
}

function setFace(_id, _data) {

	$(_id).on("click", function() {
		$.post("http://searching4freedom.razor.jp/Chat/Face.php?mode=add",
		{data: _data}, function(data){});
	});
}

window.onload = function() {

	sender("speak", "http://searching4freedom.razor.jp/Chat/Speak.php");
	sender("move", "http://searching4freedom.razor.jp/Chat/Move.php");

	setFace("#face00", "00");
	setFace("#face01", "01");
	setFace("#face02", "02");
	setFace("#face03", "03");
	setFace("#face04", "04");
	setFace("#face05", "05");



}
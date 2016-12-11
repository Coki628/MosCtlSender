// 話す内容の送信
function sendSpeak() {

	var $data = $("input[name='speak']");

	$("#speak").submit(function(event) {

		event.preventDefault();

		console.log($data.val());

		$.post("http://searching4freedom.razor.jp/Chat/Speak.php?mode=add",
				{data: $data.val()}, function(data) { $data.val(""); });
	});
}
// 動作の種類の送信
function sendMove(url) {

	var $data = $("select[name='move']");

	$("#move").submit(function(event) {

		event.preventDefault();

		// .の手前まで(数字部分)を切り出す
//		var move = $data.val().substring(0, $data.val().indexOf("."));

		console.log($data.val());

		$.post("http://searching4freedom.razor.jp/Chat/Move.php?mode=add",
				{data: $data.val()}, function(data) { $data.val(""); });
	});
}
// タップした画像を指定する
function setFace(_id, _data) {

	$(_id).on("click", function() {
		$.post("http://searching4freedom.razor.jp/Chat/Face.php?mode=add",
				{data: _data}, function(data){});
	});
}

// メイン処理
window.onload = function() {

	sendSpeak();
	sendMove();

	setFace("#face00", "00");
	setFace("#face01", "01");
	setFace("#face02", "02");
	setFace("#face03", "03");
	setFace("#face04", "04");
	setFace("#face05", "05");

}
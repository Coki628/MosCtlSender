/**
 * セリフと顔の種類を送信
 */
function sendSpeakAndFace() {

	var $data = $("input[name='speak']");

	$("#speak").submit(function(event) {

		event.preventDefault();

		console.log($data.val());
		console.log($("input[name='RadioGroup1']:checked").val());

		$.post("http://searching4freedom.razor.jp/Chat/Speak.php?mode=add",
				{data: $data.val()}, function(data) { $data.val(""); });

		$.post("http://searching4freedom.razor.jp/Chat/Face.php?mode=add",
				// チェックが入っているラジオボタンのvalueを取得して送信
				{data: $("input[name='RadioGroup1']:checked").val()},
				function(data){});
	});
}

/**
 * 動作の種類の送信
 */
function sendMove() {

	var $data = $("select[name='move']");

	$("#move").submit(function(event) {

		event.preventDefault();

		console.log($data.val());

		$.post("http://searching4freedom.razor.jp/Chat/Move.php?mode=add",
				{data: $data.val()}, function(data) { $data.val(""); });
	});
}

/**
 * 初期化処理
 */
function init() {

	// セリフをなくす
	$.post("http://searching4freedom.razor.jp/Chat/Speak.php?mode=add",
			{data: "…"}, function(data) {});
	// 顔を標準に戻す
	$.post("http://searching4freedom.razor.jp/Chat/Face.php?mode=add",
			{data: "00"}, function(data){});
	// ホームポジションに戻す
	$.post("http://searching4freedom.razor.jp/Chat/Move.php?mode=add",
			{data: "1"}, function(data) {});

}

/**
 * メイン処理
 */
window.onload = function() {

	init();

	sendSpeakAndFace();
	sendMove();

}
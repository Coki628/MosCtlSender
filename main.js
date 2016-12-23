/**
 * セリフと顔の種類を送信
 */
function sendSpeakAndFace() {

	// セリフ欄の変数を設定
	var $speak = $("input[name='speak']");

	// 送信ボタンが押されたら呼ばれる。
	$("#speak").submit(function(event) {

		// HTMLからのイベントはキャンセル(画面遷移とかしない)
		event.preventDefault();

		console.log($speak.val());
		console.log($("input[name='RadioGroup1']:checked").val());

		// 値を送信して欄を空白にする。
		$.post("http://searching4freedom.razor.jp/Chat/Speak.php?mode=add",
				{data: $speak.val()}, function(data) { $speak.val(""); });

		// チェックが入っているラジオボタンのvalueを取得して送信
		$.post("http://searching4freedom.razor.jp/Chat/Face.php?mode=add",
				{data: $("input[name='RadioGroup1']:checked").val()},
				function(data){});
	});
}

/**
 * 動作の種類の送信
 */
function sendMove() {

	// 動き欄の変数を設定
	var $move = $("select[name='move']");

	// 送信ボタンが押されたら呼ばれる。
	$("#move").submit(function(event) {

		// HTMLからのイベントはキャンセル(画面遷移とかしない)
		event.preventDefault();

		console.log($move.val());

		// 値を送信して欄を空白にする。
		$.post("http://searching4freedom.razor.jp/Chat/Move.php?mode=add",
				{data: $move.val()}, function(data) { $move.val(""); });
	});
}

/**
 * 初期化処理
 */
function init() {

	// セリフ欄を空白に戻す
	$("input[name='speak']").val("");
	// ラジオボタンを初期位置に戻す
	$('input[name=RadioGroup1]').val(['00']);
	// 動き欄を空白に戻す
	$("select[name='move']").val("");

	// セリフ"…"を送信
	$.post("http://searching4freedom.razor.jp/Chat/Speak.php?mode=add",
			{data: "…"}, function(data) {});
	// 標準の顔を送信
	$.post("http://searching4freedom.razor.jp/Chat/Face.php?mode=add",
			{data: "00"}, function(data){});
	// ホームポジションを送信
	$.post("http://searching4freedom.razor.jp/Chat/Move.php?mode=add",
			{data: "1"}, function(data) {});

	console.log("リセット完了");
}

/**
 * メイン処理
 */
window.onload = function() {

	init();

	sendSpeakAndFace();
	sendMove();

}
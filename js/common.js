
// 点击链接
function clicked(id) {
	if (plus.webview.getWebviewById(id)) {
		plus.webview.getWebviewById(id).show("pop-in", null);
	} else {
		var _openw = plus.webview.create(id, id, {scrollIndicator:'none',scalable:false,popGesture:'close'});
		_openw.show("pop-in", null);
	}
	
}
// 返回
function goback() {
	plus.webview.currentWebview().close("slide-out-left", null);
}

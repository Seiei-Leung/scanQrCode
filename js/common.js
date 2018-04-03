// 点击链接
function clicked(id) {
	if(plus.webview.getWebviewById(id)) {
		plus.webview.getWebviewById(id).show("pop-in", null);
	} else {
		var _openw = plus.webview.create(id, id, {
			scrollIndicator: 'none',
			scalable: false,
			popGesture: 'close'
		});
		_openw.show("pop-in", null);
	}

}
// 返回
function goback() {
	plus.webview.currentWebview().close("slide-out-left", null);
}

// 使用原生跳转链接
function clickLink(link) {
	location.assign(link);
}

// post方法
function submitPost(url, data, callback) {
	xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				callback(xhr.responseText);
			} else {
				alert('链接服务器错误，上传失败');
			}
		}
	}
	xhr.open("POST", url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(data));
}
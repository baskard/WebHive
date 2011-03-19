var config={};
var brlang = getBrowserLanguage();

if (brlang == "ja") {
	config = {
		ui: {
			inputEmptyText : 'ここに HiveQL を入力し[実行]ボタンを押下してください',
			titleSelect: 'HiveQL選択',
			titleInput: 'HiveQL入力',
			btnSql: 'HiveQL管理画面',
			btnUpd: 'HiveQL情報更新',
			btnReg: 'HiveQL登録',
			btnRun: 'HiveQL実行',
			btnExplain: 'HiveQL Explain',
			btnReset: 'リセット'
		},
		msg: {
			emptyInput: 'HiveQLが未入力です',
			emptyTitle: 'タイトルが未入力です',
			noSupportDML: '入力されたSQLはサポートしていません'
		}
	}
} else {
	config = {
		ui: {
			inputEmptyText : 'Please input HiveQL here and push the Run button.',
			titleSelect: 'HiveQL Select',
			titleInput: 'HiveQL Input',
			btnSql: 'HiveQL Management',
			btnUpd: 'HiveQL Download',
			btnReg: 'HiveQL Register',
			btnExplain: 'HiveQL Explain',
			btnRun: 'HiveQL Run',
			btnReset: 'Reset'
		},
		msg: {
			emptyInput: 'HiveQL is a uninput.',
			emptyTitle: 'Title is a uninput.',
			noSupportDML: 'HiveQL is not supported.'
		}
	}
}

function getBrowserLanguage() {
	var lang = "ja";

	// IE
	if (document.all) {
		lang = navigator.browserLanguage;
	// N4
	} else if (document.layers) {
		lang = navigator.language ;
	//N6,Moz用
	} else {
		lang = navigator.language.substr(0,2);
	}
	return lang;
}

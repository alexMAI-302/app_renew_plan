Ext.define('app.view.Polygraph.FileWindowCandidate', {
	extend: 'Ext.window.Window',

	id: 'fileWindowCandidate',
	modal: true,
	resizable: false,
	closeAction: 'hide',
	items:
	[
		{
			xtype: 'form',
			enctype: 'utf-8',
			items: [
				{
					xtype: 'filefield',
					name: 'image',
					fieldLabel: 'Фото кандидата',
					labelWidth: 60,
					msgTarget: 'side',
					allowBlank: false,
					width: 600,
					buttonText: 'Выберите файл'
				}
			],
			buttons: [
				{
					id: 'uploadFileCandidate',
					xtype: 'button',
					text: 'Загрузить'
				}
			]
		}
	]
});
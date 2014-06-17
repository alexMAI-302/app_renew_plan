Ext.define('app.view.keyValueDictionary.Container', {
    extend: 'app.view.Lib.Grid.Panel',
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	
	config:
	{
		xtype: 'simpleGrid',
		suffix: 'Dictionary',
		store: 'keyValueDictionary.DictionaryEntries',
		disableDeleteColumn: true,
		columns : [
			{
				width : 200,
				header : Ext.get('property_display_name').getValue(),
				dataIndex : 'name',
				field: {
					xtype: 'textfield'
				}
			}
		]
	}
});
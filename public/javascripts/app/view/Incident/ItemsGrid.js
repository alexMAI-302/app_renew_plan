Ext.define('app.view.Incident.ItemsGrid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.incidentItemsGrid',
	requires: 'app.view.Lib.Grid.column.ComboColumn',
	
	config: {
		suffix: 'TermAttrValue',
    disabled: true,
    disableSave: true,
    disableAdd: true,
    disableDelete: true,
    disableDeleteColumn: true,
		disableRefresh: true,
    disableDeleteColumn: true,
    store: 'Incident.TermAttrValue',
		columns: [
			{
				width: 170,
				header: 'Атрибут',
				dataIndex: 'attribute'
			},
			{
				width: 170,
				header: 'Значение',
				dataIndex: 'value'
			}
		]
	}
});
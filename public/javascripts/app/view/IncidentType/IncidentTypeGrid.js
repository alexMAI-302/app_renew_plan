Ext.define('app.view.IncidentType.IncidentTypeGrid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.incidentTypeIncidentTypeGrid',
	requires: 'app.view.Lib.Grid.column.ComboColumn',
	
	config: {
		store: 'IncidentType.IncidentType',
		suffix: 'IncidentType',
		title: 'Типы инцидентов',
		disableSave: false,
		disableRefresh: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		
		columns: [
			{
				dataIndex: 'id',
        hidden: true
			},
      {
				width: 100,
				header: 'Класс',
				dataIndex: 'class',
        xtype : 'combocolumn',
        store : 'app.store.IncidentType.ClassCombo',
        allowNull: true
			},      
      {
				width: 200,
				header: 'Название',
				dataIndex: 'name',
        field: {
					xtype: 'textfield'
				}				
			},
      {
				width: 200,
				header: 'Описание',
				dataIndex: 'description',
        field: {
					xtype: 'textfield'
				}				
			},
			{
				width: 100,
				header: 'Отрицание',
				dataIndex: 'negative',
        xtype: 'checkcolumn',
			}
		]
	}
});
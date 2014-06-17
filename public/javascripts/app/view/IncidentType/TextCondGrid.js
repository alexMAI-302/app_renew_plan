Ext.define('app.view.IncidentType.TextCondGrid', {
	extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.incidentTypeTextCondGrid',
  requires: 'app.view.Lib.Grid.column.ComboColumn',
	
	config: {
		suffix: 'TextCond',
		disabled: true,
		disableSave: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		autoScroll: true,
		title: 'Символьные условия',
		store: 'IncidentType.TextCond',
		columns:  [
			{
				hidden: true,
				dataIndex: 'id'        
			},
      {
				hidden: true,
				dataIndex: 'incident_type'        
			},
      {
				width: 120,
				header: 'Атрибут',
				dataIndex: 'attribute',
        xtype: 'combocolumn',
        store: 'app.store.IncidentType.TextAttributeCombo',
        allowNull: true        
			},
      {
				width: 200,
				header: 'Значение',
				dataIndex: 'formula',
        field: {
					xtype: 'textfield'
				}				
			},
      {
				width: 100,
				header: 'Система',
				dataIndex: 'src_system',
        xtype: 'combocolumn',
        store: 'app.store.IncidentType.TextSystemCombo',
        allowNull: true        
			}
		]
	}
});
Ext.define('app.view.IncidentType.TimeCondGrid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.incidentTypeTimeCondGrid',
	requires: [
		'app.view.Lib.Grid.Panel',
    'app.view.Lib.Grid.column.ComboColumn'
	],

	config: {
		store: 'IncidentType.TimeCond',
		suffix: 'TimeCond',
		title: 'Условия на время',
    disabled: true,
		disableSave: false,
		disableRefresh: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		columns: [
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
				header: 'Атрибут1',
				dataIndex: 'attribute1',
        xtype: 'combocolumn',
        store: 'app.store.IncidentType.TimeAttribute1Combo',
        allowNull: true        
			},
      {
				width: 120,
				header: 'Атрибут2',
				dataIndex: 'attribute2',
        xtype: 'combocolumn',
        store: 'app.store.IncidentType.TimeAttribute2Combo',
        allowNull: true        
			},
		  {
				width: 100,
				header: 'Система',
				dataIndex: 'src_system',
        xtype: 'combocolumn',
        store: 'app.store.IncidentType.TimeSystemCombo',
        allowNull: true        
			},
      {
				width: 100,
				header: 'Время',
				dataIndex: 'timediff',
        xtype: 'numbercolumn',
        format: '#,##0',
        field: {
					xtype: 'numberfield'
        }        
			}
		]
	}
});
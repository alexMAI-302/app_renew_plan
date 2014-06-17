Ext.define('app.view.Incident.Grid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.IncidentGrid',
	requires: 'app.view.Lib.Grid.column.ComboColumn',
	
	config: {
		store: 'Incident.Incident',
		suffix: 'Incident',
		title: 'Список инцидентов',
		disableSave: false,
    disableAdd: true,
    disableDelete: true,
		disableDeleteColumn: true,
		disableRefresh: true,
		columns: [
			{
				dataIndex: 'id',
				hidden: true
			},
      {
				width: 120,
				header: 'Код',
				dataIndex: 'code'
			},
      {
				width: 320,
				header: 'Адрес',
				dataIndex: 'address'
			},
      {
				width: 60,
				header: 'Класс',
				dataIndex: 'class1'
			},
      {
				width: 100,
				header: 'Тип инцидента',
				dataIndex: 'incident_type'
			},
      {
				width: 120,
				header: 'Время возникновения',
				dataIndex: 'emergence_ts',
				xtype: 'datecolumn',
				format: 'd.m.Y H:i'
			},
      {
				width: 120,
				header: 'Время регистрации',
				dataIndex: 'cts',
				xtype: 'datecolumn',
				format: 'd.m.Y H:i'
			},
      {
				width: 120,
				header: 'Время закрытия',
				dataIndex: 'close_ts',
				xtype: 'datecolumn',
				format: 'd.m.Y H:i'
			},
      {
				width: 140,
				header: 'Статус',
				dataIndex: 'status1',
        xtype : 'combocolumn',
        store : 'app.store.Incident.StatusCombo'
			},      
			{
				width: 70,
				header: 'Убыточен',
				dataIndex: 'unprofit',
				xtype: 'checkcolumn'				
			}
		]
	}
});
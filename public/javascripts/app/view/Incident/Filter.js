Ext.define('app.view.Incident.Filter', {
    extend: 'app.view.Lib.DateIntervalFilter',
	alias: 'widget.incidentFilter',
	
	config: {
		suffix: 'IncidentFilter',
		shiftBegin: -1,
		filterItems: [
			{
				id: 'filterStatus',
				xtype: 'combobox',
				fieldLabel: 'Статус',
				valueField: 'id',
				displayField: 'name',
				queryMode: 'local',
				value: null,
				store: 'Incident.FilterStatusCombo',
				width: 255,
				labelWidth: 65
			},
      {
				id: 'filterClass',
				xtype: 'combobox',
				fieldLabel: 'Класс',
				valueField: 'id',
				displayField: 'name',
				queryMode: 'local',
				value: null,
				store: 'Incident.FilterClassCombo',
				width: 115,
				labelWidth: 65
			}
		]
	}
});
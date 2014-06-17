//фильтр
Ext.define('app.view.Directory.Photo.Filter', {
	 extend: 'Ext.container.Container',
    alias: 'widget.directoryPhotoFilter',
    
	defaults: {
		style: {
			margin: '5px'
		}
	},
	
	items: [
    {
      id: 'filterPerson',
      xtype: 'combobox',
      fieldLabel: 'Сотрудник',
      valueField: 'id',
      displayField: 'name',
      queryMode: 'local',
      allowNull: true,
      width: 410,
      labelWidth: 150,
      store: 'Directory.Photo.PersonCombo',
      
    }
	]
});
Ext.define('app.view.Directory.Division.PersonGrid', {
    extend: 'app.view.Lib.Grid.Panel',
    requires: [
		'app.view.Lib.Grid.column.ComboColumn'
    ],
	alias: 'widget.directory.division.personGrid',
	
	config: {
		suffix: 'PersonItem',
		disableSave: false,
		disableRefresh: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		disabled: true,
		store: 'Directory.Division.Person',
		columns: [
			{
				dataIndex: 'old_id',
				hidden : true
			},
      {
				width: 300,
        header: 'Сотрудник',
				dataIndex: 'id',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Division.PersonCombo',
        allowNull: true,
        renderer: function(value, metaDate, record) {
          return Ext.String.format('<a target="_blank" href="/directory/person?id={0}">{1}</a>', record.data.id, record.data.name);
        }
			}  
		]
	}
});
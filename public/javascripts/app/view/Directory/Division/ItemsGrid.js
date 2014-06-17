Ext.define('app.view.Directory.Division.ItemsGrid', {
    extend: 'app.view.Lib.Grid.Panel',
    requires: [
		'app.view.Lib.Grid.column.ComboColumn'
    ],
	alias: 'widget.directory.division.itemGrid',
	
	config: {
		suffix: 'DivisionItem',
		disableSave: false,
		disableRefresh: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		disabled: true,
		store: 'Directory.Division.Division',
		columns: [
			{
				dataIndex: 'id',
				hidden : true
			},
      {
        width: 300,
				header: 'Название',
				dataIndex: 'name',
        field: {
					xtype: 'textfield'
				}
			},
			{
				width: 300,
        header: 'Подразделение',
				dataIndex: 'parent',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Division.DivisionCombo',
        allowNull: true    
			},
      {
        width: 300,
				header: 'Руководитель',
				dataIndex: 'head',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Division.HeadCombo',
        allowNull: true,
         renderer: function(value, metaDate, record) {
          return Ext.String.format('<a target="_blank" href="/directory/person?id={0}">{1}</a>', record.data.head, record.data.head_name);
        }
			}      
		]
	}
});
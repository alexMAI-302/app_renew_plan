Ext.define('app.view.Directory.Division.Tree', {
    extend: 'Ext.tree.Panel',
	alias: 'widget.divisionTree',
	
	initComponent: function() {
		var suffix = 'DivisionTree';
        Ext.apply(this, {
			id: suffix+'Table',
      rootVisible: false,
			useArrows: true,
			store: Ext.create('app.store.Directory.Division.DivisionTree'),
			hideHeaders: true,
      deferRowRender: false,
			title: 'Подразделения',
			header: false,
      autoShow: true,
      //autoRender: true,
			columns: [
				{
					width: 400,
					xtype: 'treecolumn',
					header: 'Наименование',
					dataIndex: 'name',
					editor: {
						xtype: 'textfield'
					}
				}
			]
			});
        
        this.callParent(arguments);
    }
});
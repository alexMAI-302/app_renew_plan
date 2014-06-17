Ext.define('app.store.Directory.Division.DivisionTree', {
	extend: 'Ext.data.TreeStore',
	model: 'app.model.valueModel',
	folderSort: true,
	recursive: true,
	storeId: 'DivisionTreeStore',
	proxy: {
		type: 'rest',
		url : '/directory/division/division_tree',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});
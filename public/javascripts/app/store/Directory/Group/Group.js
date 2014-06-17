Ext.define('app.store.Directory.Group.Group', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Group.GroupModel',
	proxy: {
		type: 'rest',
		url : '/directory/group/group',
		reader: {
			type: 'json'
		}
	}
});
Ext.define('app.store.Directory.Group.GroupPerson', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Group.GroupPersonModel',
	proxy: {
		type: 'rest',
		url : '/directory/group/group_person',
		reader: {
			type: 'json'
		}
	}
});
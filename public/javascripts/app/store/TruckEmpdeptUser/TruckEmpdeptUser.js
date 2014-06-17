Ext.define('app.store.TruckEmpdeptUser.TruckEmpdeptUser', {
	extend: 'Ext.data.Store',
	model: 'app.model.TruckEmpdeptUser.TruckEmpdeptUserModel',
	proxy: {
		type: 'rest',
		url : '/truck_empdept_user/truck_empdept_users',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});

Ext.define('app.store.TruckEmpdeptUser.EmpDept', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck_empdept_user/get_empdept',
		reader: {
			type: 'json'
		}
	}
});

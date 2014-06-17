Ext.define('app.store.Truck.EmpDept', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_dept',
		reader: {
			type: 'json'
		}
	}
});
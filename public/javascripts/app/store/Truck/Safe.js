Ext.define('app.store.Truck.Safe', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
proxy: {
		type: 'memory'
	},
	data: 
	[
		{id: 0, name: 'Нет'},
		{id: 1, name: 'Есть'},
		{id: 2, name: 'Есть Б'}
	]
});
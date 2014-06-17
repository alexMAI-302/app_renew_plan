Ext.define('app.store.Truck.Signaling', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
proxy: {
		type: 'memory'
	},
	data: 
	[
		{id: 0, name: 'Нет'},
		{id: 1, name: 'Есть'}
	]
});
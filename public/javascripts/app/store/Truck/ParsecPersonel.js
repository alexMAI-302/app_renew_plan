Ext.define('app.store.Truck.ParsecPersonel', {
	extend: 'Ext.data.Store',
	model: 'app.model.Truck.ParsecPersonelModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_parsec_personel',
		reader: {
			type: 'json'
		}
	}
});
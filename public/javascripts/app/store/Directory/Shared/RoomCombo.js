Ext.define('app.store.Directory.Shared.RoomCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/group/roomCombo',
		reader: {
			type: 'json'
		}
	}
});
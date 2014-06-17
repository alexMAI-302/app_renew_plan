Ext.define('app.store.Directory.Room.Room', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Room.RoomModel',
	proxy: {
		type: 'rest',
		url : '/directory/room/room',
		reader: {
			type: 'json'
		}
	}
});
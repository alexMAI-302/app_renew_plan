Ext.define('app.store.Directory.PersonRoom.PersonRoom', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.PersonRoom.PersonRoomModel',
	proxy: {
		type: 'rest',
		url : '/directory/person_room/person_room',
		reader: {
			type: 'json'
		}
	}
});
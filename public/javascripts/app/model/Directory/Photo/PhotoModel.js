Ext.define('app.model.Directory.Photo.PhotoModel', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id',     type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'small_width', type: 'int'},
		{name: 'small_height', type: 'int'}
	]
});

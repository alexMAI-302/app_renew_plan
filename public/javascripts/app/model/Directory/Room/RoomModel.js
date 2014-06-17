Ext.define('app.model.Directory.Room.RoomModel', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id',     type: 'int'},
		{name: 'name', type: 'string'},
    {name: 'parent', type: 'int',	useNull: true },
    {name: 'site', type: 'int',	useNull: true },
    {name: 'area', type: 'float',	useNull: true },
    {name: 'rental_rate', type: 'float',	useNull: true },
		{name: 'responsible', type: 'int',	useNull: true }
	]
});

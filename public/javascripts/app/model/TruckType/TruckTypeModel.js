Ext.define('app.model.TruckType.TruckTypeModel', {
	extend: 'Ext.data.Model',
	fields: [
	{
		name: "id",
		type: "int"
	},
	{
		name: "name",
		type: "string"
	},
	{
		name: "weight",
		type: "float",
		useNull: true
		
	},
	{
		name: "length",
		type: "float",
		useNull: true
		
	},	
	{
		name: "width",
		type: "float",
		useNull: true
	},	
	{
		name: "height",
		type: "float",
		useNull: true
	},	
	

	{
		name: "body_type",
		type: "int",
		useNull: true
	}
	]
});

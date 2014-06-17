Ext.define('app.model.Truck.TruckTOModel', {
	extend: 'Ext.data.Model',
	fields: [
	{
		name: "id",
		type: "int"
	},
	{
		name: "truck",
		type: "int"
	},
	{
		name: "numbert",
		type: "string"
	},
	{
		name: "run",
		type: "int",
		useNull: true
	}
	]
});

Ext.define('app.model.TruckEmpdeptUser.TruckEmpdeptUserModel', {
	extend: 'Ext.data.Model',
	fields: [
	{
		name: "id",
		type: "int"
	},
	{
		name: "emp_dept",
		type: "int",
		useNull: true
	},
	{
		name: "users",
		type: "string"
	}
	]
});

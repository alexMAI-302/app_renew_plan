Ext.define('app.model.Truck.TruckBusModel', {
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
		name: "bus_type",
		type: "int",
		useNull: true
	},
	{
		name: "size",
		type: "int",
		useNull: true
	},
	{
		name: 'ddate',
		type:'date',
		convert: function(v, record){
			if(Ext.isDate(v)){
				return v
			} else {
				var val=Ext.Date.parse(v, 'Y-m-d H:i:s');
				val = (val==null || val==undefined) ? Ext.Date.parse(v, "Y-m-d\\TH:i:s") : val;
				val = (val==null || val==undefined) ? Ext.Date.parse(v, "d.m.Y H:i") : val;
				return val;
			}
	}
	}
	]
});

Ext.define('app.model.Truck.TruckModel', {
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
		name: "buyers_route",
		type: "int",
		useNull: true
	},

	{
		name: "type",
		type: "int",
		useNull: true
	},
	{
		name: "driver",
		type: "int",
		useNull: true
	},
	{
		name: "security_driver",
		type: "int",
		useNull: true
	},
	{
		name: "securer",
		type: "int",
		useNull: true

	},
	
	{
		name: "site",
		type: "int",
		useNull: true
	},
	{
		name: "preceiver",
		type: "int",
		useNull: true
	},
	
	{
		name: "usestatus",
		type: "boolean"
	},
	
	{
		name: "istms",
		type: "boolean"
	},
	
	{
		name: "parsec_id_user",
		type: "uniqueidentifier",
		useNull: true
	},
	{
		name: "rent",
		type: "boolean"
	},

	
	
	{
		name: "pa_card",
		type: "int",
		useNull: true
	},
	
	
	

	{
		name: "emp_dept",
		type: "int",
		useNull: true
		
	},
	{
		name: "use_carfleet",
		type: "boolean"
	},
	{
		name: "org_balance",
		type: "int",
		useNull: true
	},
	{
		name: "tr_year",
		type: "int",
		useNull: true
	},
	{
		name: 'gto',
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
	},
		{
		name: 'osago',
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
	},
		{
		name: 'kasko',
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
	},
	{
		name: "safe",
		type: "int",
		useNull: true
	},
	{
		name: "signaling",
		type: "int",
		useNull: true
	},
	{
		name: "status_car",
		type: "int",
		useNull: true
		
	}
	


	


	]
});
Ext.define('app.model.Directory.PersonRoom.PersonRoomModel', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id',     type: 'int'},
    {name: 'person', type: 'int', useNull: true},
    {name: 'room',   type: 'int',	useNull: true},		
    {name: 'ddateb',	dateFormat: 'd.m.Y',
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
		{name: 'ddatee'	, type: 'date',		dateFormat: 'd.m.Y',
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

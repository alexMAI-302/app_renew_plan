Ext.define('app.model.Directory.Search.ProfileModel', {
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id', type:'integer'},
  {name: 'fname', type:'string'},
	{name: 'lname', type:'string'},
	{name: 'mname', type:'string'},
	{name: 'tabnum', type:'string'},  
	{name: 'phone', type:'string'},
  {name: 'phone_cell', type:'string'},
	{name: 'dept_name', type:'string'},
  {name: 'pos_name', type:'string'},
  {name: 'room_name', type:'string'}
  ]
  
});

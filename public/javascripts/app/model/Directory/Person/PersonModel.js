Ext.define('app.model.Directory.Person.PersonModel', {
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id', type:'integer'},
  {name: 'fio', type:'string'},
	{name: 'tabnum', type:'string'},  
	{name: 'phone', type:'string'},
  {name: 'phone_cell', type:'string'},
	{name: 'dept_name', type:'string'},
  {name: 'dept_path', type:'string'},
  {name: 'pos_name', type:'string'},
  {name: 'head', type:'int'},
  {name: 'head_name', type:'string'},
  {name: 'division', type:'int'},
  {name: 'division_path', type:'string'},
  {name: 'role', type:'int'},
  {name: 'room_name', type:'string'},
  {name: 'birth_date', type:'string'}
  ]
  
});

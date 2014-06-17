Ext.define('app.model.Directory.Search.SearchModel', {
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id', type:'integer'},
  {name: 'group_name', type:'string'},
  {name: 'person_id', type:'integer'},
	{name: 'fio', type:'string'},
	{name: 'phone', type:'string'},
	{name: 'room', type:'string'},
  {name: 'depts', type:'string'},
  {name: 'pos_name', type:'string'},
  {name: 'division_path', type:'string'},
  {name: 'head_name', type:'string'}]
});

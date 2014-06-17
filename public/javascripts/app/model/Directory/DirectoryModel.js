Ext.define('app.model.Directory.DirectoryModel', {
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id', type:'integer'},
	{name: 'lname', type:'string'},
	{name: 'fname', type:'string'},
	{name: 'mname', type:'string'},
	{name: 'phone', type:'string'},
	{name: 'room', type:'string'}]
});

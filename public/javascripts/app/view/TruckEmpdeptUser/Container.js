Ext.define('app.view.TruckEmpdeptUser.Container', {
    extend: 'app.view.Lib.Grid.Panel',
	requires: [
		'app.view.Lib.Grid.column.ComboColumn'
	],
	title: 'Права на словарь автомобили',
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 150,
	
	config:{
		suffix: 'TruckEmpdeptUser',
		store: 'TruckEmpdeptUser.TruckEmpdeptUser',
		disableDelete: true,
		columns : [
			{
				width : 150,
				header : 'Принадлежность<br>подразделению',
				dataIndex : 'emp_dept',
				xtype: 'combocolumn',
				store: 'app.store.TruckEmpdeptUser.EmpDept'
			},			
			{
				width : 1000,
				header : 'Список пользователей (через ; без @unact.ru)',
				dataIndex : 'users',
				field: {
					xtype: 'textfield'
				}
			}
	]
	}
});

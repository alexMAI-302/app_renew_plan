Ext.define('app.view.Truck.Grid', {
    extend: 'app.view.Lib.Grid.Panel',
	requires: [
		'app.view.Lib.Grid.column.ComboColumn'
	],
	title: 'Автомобили',
	
	alias: 'widget.truckgrid',
	

	
	config:{
		suffix: 'Truck',
		store: 'Truck.Truck',
		disableDelete: true,
		columns : [
			{
				width : 100,
				header : 'Номер',
				dataIndex : 'name',
				field: {
					xtype: 'textfield'
				}
			},
			{
				width : 100,
				header : 'Маршрут',
				dataIndex : 'buyers_route',
				xtype: 'combocolumn',
				store: 'app.store.Truck.BuyersRoute'
			},
			{
				width : 120,
				header : 'Тип',
				dataIndex : 'type',
				xtype: 'combocolumn',
				store: 'app.store.Truck.TruckType'

			},
			{
				width : 100,
				header : 'Водитель',
				dataIndex : 'driver',
				xtype: 'combocolumn',
				store: 'app.store.Truck.Drivers'
			},
			{
				width : 100,
				header : 'Водитель<br>охранник',
				dataIndex : 'security_driver',
				xtype: 'combocolumn',
				store: 'app.store.Truck.Drivers'
			},
			{
				width : 100,
				header : 'Сопровождение',
				dataIndex : 'securer',
				xtype: 'combocolumn',
				store: 'app.store.Truck.Securers'
			},
			{
				width : 100,
				header : 'Площадка',
				dataIndex : 'site',
				xtype: 'combocolumn',
				store: 'app.store.Truck.Site'
			},
			
			{
				width : 150,
				header : 'Получатель<br> платежей',
				dataIndex : 'preceiver',
				xtype: 'combocolumn',
				store: 'app.store.Truck.PayReceiver'
			},
			
			
			{
				width : 50,
				header : 'Исп.',
				dataIndex : 'usestatus',
				xtype: 'checkcolumn'
			},
			
			{
				width : 50,
				header : 'ТМС',
				dataIndex : 'istms',
				xtype: 'checkcolumn'
			},
			
			
			{
				width : 100,
				header : 'Машина из Parsec',
				dataIndex : 'parsec_id_user',
				xtype: 'combocolumn',
				store: 'app.store.Truck.ParsecPersonel'
			},
			
			{
				width : 50,
				header : 'Аренда',
				dataIndex : 'rent',
				xtype: 'checkcolumn'
			},
			{
				width : 150,
				header : 'Основное средство',
				dataIndex : 'pa_card',
				xtype: 'combocolumn',
				store: 'app.store.Truck.PaCard'
			},
			{
				width : 150,
				header : 'Принадлежность<br>подразделению',
				dataIndex : 'emp_dept',
				xtype: 'combocolumn',
				store: 'app.store.Truck.EmpDept'
			},
			{
				width : 50,
				header : 'Обслуж.<br>автох.',
				dataIndex : 'use_carfleet',
				xtype: 'checkcolumn'
			},
			{
				width : 120,
				header : 'Балансодержатель',
				dataIndex : 'org_balance',
				xtype: 'combocolumn',
				store: 'app.store.Truck.Organization'
			},			
			{
				width: 60,
				xtype: 'numbercolumn',
				header: 'Год',
				dataIndex: 'tr_year',
				format: '0',
				field: {
					xtype: 'numberfield',
					allowDecimal: false
				}
			},
			{
				align: 'center',
				xtype: 'datecolumn',
				width: 80,
				header: 'ГТО',
				dataIndex: 'gto',
				name: 'gto',
				format: 'd.m.Y',
				field: {
					xtype: 'datefield'
				}
			},
			{
				align: 'center',
				xtype: 'datecolumn',
				width: 80,
				header: 'ОСАГО',
				dataIndex: 'osago',
				name: 'osago',
				format: 'd.m.Y',
				field: {
					xtype: 'datefield'
				}
			},			{
				align: 'center',
				xtype: 'datecolumn',
				width: 80,
				header: 'КСАКО',
				dataIndex: 'kasko',
				name: 'kasko',
				format: 'd.m.Y',
				field: {
					xtype: 'datefield'
				}
			},
			{
				width : 120,
				header : 'Сейф',
				dataIndex : 'safe',
				xtype: 'combocolumn',
				store: 'app.store.Truck.Safe'
			},
			{
				width : 120,
				header : 'Сигнал.',
				dataIndex : 'signaling',
				xtype: 'combocolumn',
				store: 'app.store.Truck.Signaling'
			},
			{
				width : 120,
				header : 'Статус',
				dataIndex : 'status_car',
				xtype: 'combocolumn',
				store: 'app.store.Truck.StatusCar'
			}
			
			
			
			
	]
	}
});
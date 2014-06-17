//локальное хранилище записей по текущему заказу
Ext.define('app.store.movementDiff.actionType', {
	extend: 'Ext.data.Store',

	fields: ['id', 'name'],
	data: [
		{'id': 1, 'name': 'По площадке отправителя'},
		{'id': 2, 'name': 'По площадке получателя'},
		{'id': 3, 'name': 'По номеру документа заказа'},
		{'id': 4, 'name': 'По номеру документа поставки'},
		{'id': 5, 'name': 'Одиночные позиции'}
	]
});
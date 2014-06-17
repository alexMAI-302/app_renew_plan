//таблица
Ext.define('app.view.Directory.Search.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.directorySearchGrid',
    
	id: 'directorySearchTable',
	store: 'Directory.Search.Search',
	title: 'Данные справочника',
	columns: [
		{
			width: 100,
			header: 'Группа',
			dataIndex: 'group_name'
		},
		{
			width: 200,
			header: 'ФИО',
			dataIndex: 'fio'
		},
		{
			width: 100,
			header: 'Телефон',
			dataIndex: 'phone'
		},
    {
			width: 70,
			header: 'Помещение',
			dataIndex: 'room'
		},
    {
			width: 200,
			header: 'Отдел',
			dataIndex: 'depts'
		},
    {
			width: 150,
			header: 'Должность',
			dataIndex: 'pos_name'
		},
    {
			width: 150,
			header: 'Подразделение',
			dataIndex: 'division_path'
		},
    {
			width: 100,
			header: 'Руководитель',
			dataIndex: 'head_name'
		},
    {
			width: 100,
			header: 'Фото',
      dataindex: 'person_id',
      renderer: function(v, metaData, r){
        return '<img height="128" src="/directory/photo/get_photo_small/'+r.get('person_id')+'" />';
      }
		}
  ]  
});

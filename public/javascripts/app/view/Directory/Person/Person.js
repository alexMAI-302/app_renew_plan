Ext.define('app.view.Directory.Person.Person' ,{
  extend: 'Ext.form.Panel',
  
  alias: 'widget.directoryPersonPerson',
	border: false,
	margin: "5 0 0 5",

	layout: {
		type: 'table',
		columns: 2,
    width: '100%'
	},

  id: 'directoryPersonPersonPanel',
	title: 'Информация о сотруднике',
  items: [
    {
			xtype: 'displayfield',
      value: '',
      name: 'photo',
      rowspan: 3,
      labelWidth: 0,
      width: '20%',
		},
    {
			xtype: 'displayfield',
      fieldLabel: '',
      name: 'fio',
      value: '',
      labelWidth: 0,
      cls: 'x-bold',
      width: '80%',
      rowspan: 3
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Тел.:',
      name: 'phone',
      value: '',
      labelWidth: 150,
      width: 200,
      colspan: 2
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Отдел:',
      name: 'dept_name',
      value: '',
      labelWidth: 150,
      width: 200,
      colspan: 2
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Моб.:',
      labelWidth: 150,
      name: 'phone_cell',
      value: '',
      colspan: 2
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Таб. номер:',
      name: 'tabnum',
      value: '',
      labelWidth: 150,
      colspan: 2
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Помещение:',
      name: 'room_name',
      value: '',
      labelWidth: 150,
      colspan: 2
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Отделы:',
      name: 'dept_path',
      value: '',
      labelWidth: 150,
      colspan: 2
    },
    {
      id: 'division_combo',
      xtype: 'combobox',
      fieldLabel: 'Подразделение:',
      labelWidth: 150,
      name: 'division',
      value: '',
      allowNull: true,
      valueField: 'id',
      displayField: 'name',
      queryMode: 'local',
      allowBlank: false,
      colspan: 2
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Подразделения:',
      name: 'division_path',
      value: '',
      labelWidth: 150,
      colspan: 2
    },
   {
			xtype: 'displayfield',
      fieldLabel: 'Руководитель:',
      name: 'head_name',
      value: '',
      labelWidth: 150,
      colspan: 2
    },     
   {
			xtype: 'displayfield',
      fieldLabel: 'Дата рождения:',
      name: 'birth_date',
      value: '',
      labelWidth: 150,
      colspan: 2
    },     
    {
			id: 'role_combo',
      xtype: 'combobox',
      fieldLabel: 'Роль:',
      labelWidth: 150,
      name: 'role',
      allowNull: true,
      value: '',
      valueField: 'id',
      displayField: 'name',
      queryMode: 'local',
      allowBlank: false,
      colspan: 2
    }
  ],
});

Ext.define('app.view.Directory.Search.Profile' ,{
  extend: 'Ext.form.Panel',
  
  alias: 'widget.directorySearchProfile',
	border: false,
	margin: "5 0 0 5",

	layout: {
		type: 'table',
		columns: 4,
    rows: 3
	},

  id: 'directorySearchProfilePanel',
	title: 'Личная информация',
  
	items: [
    {
			xtype: 'displayfield',
      value: '',
      name: 'photo',
      rowspan: 3,
      labelWidth: 0,
      width: 100,
      //value: '<img height="128" src="/directory/photo/get_photo_small/2182" />'
      /*,
			/*renderer: function(v, metaData){
        return '<img height="128" src="/directory/photo/get_photo_small/'+controller.profileStore.data.items[0].get(person_id)+'" />';
      }*/
		},
    {
			xtype: 'displayfield',
      fieldLabel: '',
      name: 'lname',
      value: '',
      labelWidth: 0,
      width: 100
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Тел.:',
      name: 'phone',
      value: '',
      labelWidth: 70,
      width: 200
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Отдел:',
      name: 'dept_name',
      value: '',
      labelWidth: 100,
      width: 200
    },
    {
			xtype: 'displayfield',
      fieldLabel: '',
      name: 'fname',
      value: ''
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Моб.:',
      labelWidth: 70,
      name: 'phone_cell',
      value: ''
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Должность:',
      name: 'pos_name',
      value: '',
      labelWidth: 100,
    },
    {
			xtype: 'displayfield',
      fieldLabel: '',
      labelWidth: 0,
      name: 'mname',
      value: ''
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Таб. номер:',
      name: 'tabnum',
      value: '',
      labelWidth: 70
    },
    {
			xtype: 'displayfield',
      fieldLabel: 'Помещение:',
      name: 'room_name',
      value: '',
      labelWidth: 100,
    }   
  ],


	/*initComponent: function() {
		var config = {
			url: '/schedule_request/sending',
		}

		Ext.apply(this, Ext.apply(this.initialConfig, config));
		this.superclass.initComponent.apply(this);
	}*/
});

Ext.Loader.setPath('Ext.ux', '/ext/examples/ux');
Ext.require([
	'Ext.ux.DataView.LabelEditor'
]);

Ext.define('app.controller.Directory.Person', {
    extend: 'Ext.app.Controller',
	stores: [
		'Directory.Person.Person',
    'Directory.Person.Role',
    'Directory.Person.Division'    
	],
	
	models: [
		'valueModel',
		'Directory.Person.PersonModel'
	],
	
	views: [
		'Directory.Person.Container'
	],
	
	mainContainer: null,
	personStore:null,
  pictureStore:null,
  roleComboStore: null,
  divisionComboStore: null,

  search: function() {
    var controller = this;
    var searchField = Ext.getCmp('searchDirectoryField'),
        search=searchField.getValue();
    
    if(search){
      controller.directoryStore.proxy.extraParams={
        search: search
      };
      
      controller.mainContainer.setLoading(true);
      controller.directoryStore.load(
        function(records, operation, success){
          var e=Ext.getCmp('errorDirectory'),
            t=Ext.getCmp('directorySearchTable');
          if(success!==true){
            e.setText('Ошибка сервера. Попробуйте еще раз.');
            e.show();
            t.hide();
          } else {
            if(records.length==0){
              e.setText('Ничего не найдено. Измените условия поиска.');
              e.show();
              t.hide();
            } else {
              e.hide();
              t.show();
            }
          }
          controller.mainContainer.setLoading(false);
          return true;
        }
      );
    }
  },
  
  init: function() {
    var controller = this;
    controller.mainContainer=Ext.create('app.view.Directory.Person.Container');
    
    controller.control({
			'#searchDirectoryField': {
        specialkey: function(field, e, eOpts){
					if(e.getKey()==e.ENTER){
						controller.search();
					}
				}
			},
      '#filterSearchDirectory': {        
				click: function(button){
					controller.search();
				}
			}
		});
	},
	
  initStores: function(){
		var controller=this;
		
		//controller.personStore=Ext.getCmp('directoryPersonTable').getStore();
    controller.personStore=Ext.create('app.store.Directory.Person.Person');
    controller.personStore.proxy.extraParams={
        person: Ext.getDom('person').value
      };
    
    controller.personStore.load(
      function(records, operation, success){
        if(success==true)
        {
           Ext.getCmp('directoryPersonPersonPanel').items.each(
              function(record){
                  name = record.name;
                  if (name!=='photo')
                  {
                    record.setValue(controller.personStore.data.items[0].get(name));
                  }
              }
           );
           function renderer(v, metaData){
            return '<img height="128" src="/directory/photo/get_photo_small/'+controller.personStore.data.items[0].get('id')+'" />';
           };
           Ext.getCmp('directoryPersonPersonPanel').items.items[0].setValue('<img height="128" src="/directory/photo/get_photo_small/'+controller.personStore.data.items[0].get('id')+'" />');
           

        }        
      }
    );
    controller.roleComboStore=controller.getDirectoryPersonRoleStore();
    Ext.getCmp('role_combo').bindStore(controller.roleComboStore);
    
    controller.divisionComboStore=controller.getDirectoryPersonDivisionStore();
    Ext.getCmp('division_combo').bindStore(controller.divisionComboStore);
    
	},
  
  onLaunch: function(){
		var controller = this;
		controller.initStores();
	}
});

	

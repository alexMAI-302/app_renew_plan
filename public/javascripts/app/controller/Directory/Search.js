Ext.Loader.setPath('Ext.ux', '/ext/examples/ux');
Ext.require([
	'Ext.ux.DataView.LabelEditor'
]);

Ext.define('app.controller.Directory.Search', {
    extend: 'Ext.app.Controller',
	stores: [
		'Directory.Search.Search',
    'Directory.Photo.Photo',
    'Directory.Search.Profile',
	],
	
	models: [
		'valueModel',
		'Directory.Search.SearchModel',
    'Directory.Search.ProfileModel'
	],
	
	views: [
		'Directory.Search.Container'
	],
	
	mainContainer: null,
	directoryStore:null,
  profileStore:null,
  pictureStore:null,

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
    controller.mainContainer=Ext.create('app.view.Directory.Search.Container');
    
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
		
		controller.directoryStore=Ext.getCmp('directorySearchTable').getStore();
    
    controller.profileStore=Ext.create('app.store.Directory.Search.Profile');
    controller.profileStore.load(
      function(records, operation, success){
        if(success==true)
        {
           Ext.getCmp('directorySearchProfilePanel').items.each(
              function(record){
                  name = record.name;
                  if (name!=='photo')
                  {
                    record.setValue(controller.profileStore.data.items[0].get(name));
                  }
              }
           );
           function renderer(v, metaData){
            return '<img height="128" src="/directory/photo/get_photo_small/'+controller.profileStore.data.items[0].get('id')+'" />';
           };
           Ext.getCmp('directorySearchProfilePanel').items.items[0].setValue('<img height="128" src="/directory/photo/get_photo_small/'+controller.profileStore.data.items[0].get('id')+'" />');
           

        }        
      }
    );      
	},
  
  onLaunch: function(){
		var controller = this;
		controller.initStores();
	}
});

	

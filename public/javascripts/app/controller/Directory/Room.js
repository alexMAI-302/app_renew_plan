Ext.define('app.controller.Directory.Room', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Directory.Room.Room',
	  'Directory.Shared.PersonCombo',
	  'Directory.Shared.SiteCombo'
	],
	
	models: [
		'valueModel',
		'Directory.Room.RoomModel'
	],
	
	views: [
		'Directory.Room.Container'
		
	],
	
	Container: null,
	roomStore: null,
	personComboStore: null,
  siteComboStore: null,	
		
	showServerError: function(response, options) {
		var controller=this;
		Ext.Msg.alert('Ошибка', response.responseText);
		controller.Container.setLoading(false);
	},
	
	init: function() {
		var controller = this;
		controller.Container=Ext.create('app.view.Directory.Room.Container');
		controller.Container.addListener(
				"show",
				function(){
					//controller.loadDictionaries();
				}
		);
				
				
				
		function getId(r){
			return (r!=null)?
					((r.getId()!=null && r.getId()!=0)?
						r.getId():
						r.get('id')
					):
					null;
		}
				
		controller.control({
			'#addRoom': {
				click: function(){
					var r = Ext.ModelManager.create({
						}, 'app.model.Directory.Room.RoomModel');
					controller.roomStore.insert(0, r);
					return true;
				}
			},
      '#saveRoom': {
				click: function(){
          controller.Container.setLoading(true);
					controller.roomStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка при сохранении помещений", batch.exceptions[0].getError().responseText);
							}
							controller.Container.setLoading(false);
						}
					});
					return true;
				}
			},
			'#refreshRoom': {
				click: function() {
          controller.Container.setLoading(true);
					controller.roomStore.load(
           function(records, operation, success){
              if(!success){
                Ext.Msg.alert("Ошибка выборки помещений");
              }
              controller.Container.setLoading(false);
              return true;
            }
          );  
				}
			},
			'#deleteRoom': {
				click: function(button){
					var sm = Ext.getCmp('RoomTable').getSelectionModel();
					controller.roomStore.remove(sm.getSelection()[0]);
					if (controller.roomStore.getCount() > 0) {
						sm.select(0);
					}
				}
			}
		});
		
		
	controller.initStores();
	},
	
	loadDictionaries: function(){
		var controller=this;
		controller.personComboStore.load(
      function(records, operation, success){
        if(success){
          controller.siteComboStore.load(
            function(records, operation, success){
              if(success){
                controller.roomStore.load();
              }
              return true;
            }
          ); 
        }
        return true;
      }
    );     
	},
	
	initStores: function(){
		var controller=this,
			roomTable = Ext.getCmp('RoomTable'),
      personColumn=roomTable.columns[4],
			siteColumn=roomTable.columns[1];
			

		 
    controller.roomStore = roomTable.store;
		
    controller.personComboStore = personColumn.store;
    controller.siteComboStore = siteColumn.store;
    
    controller.loadDictionaries();
       
	}
});
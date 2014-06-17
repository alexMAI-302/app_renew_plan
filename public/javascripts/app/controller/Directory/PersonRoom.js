Ext.define('app.controller.Directory.PersonRoom', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Directory.PersonRoom.PersonRoom',
	  'Directory.Shared.PersonCombo',
	  'Directory.Shared.RoomCombo'
	],
	
	models: [
		'valueModel',
		'Directory.PersonRoom.PersonRoomModel'
	],
	
	views: [
		'Directory.PersonRoom.Container'
		
	],
	
	Container: null,
	personRoomStore: null,
	personComboStore: null,
  roomComboStore: null,	
		
	showServerError: function(response, options) {
		var controller=this;
		Ext.Msg.alert('Ошибка', response.responseText);
		controller.Container.setLoading(false);
	},
	
	init: function() {
		var controller = this;
		controller.Container=Ext.create('app.view.Directory.PersonRoom.Container');
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
			'#addPersonRoom': {
				click: function(){
					var r = Ext.ModelManager.create({
						}, 'app.model.Directory.PersonRoom.PersonRoomModel');
					controller.personRoomStore.insert(0, r);
					return true;
				}
			},
      '#savePersonRoom': {
				click: function(){
          controller.Container.setLoading(true);
					controller.personRoomStore.sync({
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
			'#refreshPersonRoom': {
				click: function() {
          controller.Container.setLoading(true);
					controller.personRoomStore.load(
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
			'#deletePersonRoom': {
				click: function(button){
					var sm = Ext.getCmp('PersonRoomTable').getSelectionModel();
					controller.personRoomStore.remove(sm.getSelection()[0]);
					if (controller.personRoomStore.getCount() > 0) {
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
          controller.roomComboStore.load(
            function(records, operation, success){
              if(success){
                controller.personRoomStore.load();
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
			personRoomTable = Ext.getCmp('PersonRoomTable'),
      personColumn=personRoomTable.columns[0],
			roomColumn=personRoomTable.columns[1];
			

		 
    controller.personRoomStore = personRoomTable.store;
		
    controller.personComboStore = personColumn.store;
    controller.roomComboStore = roomColumn.store;
    
    controller.loadDictionaries();
       
	}
});
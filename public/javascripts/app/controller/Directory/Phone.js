Ext.define('app.controller.Directory.Phone', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Directory.Phone.Phone',
	  'Directory.Phone.PersonCombo',
	  'Directory.Phone.GroupCombo'
	],
	
	models: [
		'valueModel',
		'Directory.Phone.PhoneModel'
	],
	
	views: [
		'Directory.Phone.Container'
		
	],
	
	Container: null,
	phoneStore: null,
	personComboStore: null,
  groupComboStore: null,	
		
	showServerError: function(response, options) {
		var controller=this;
		Ext.Msg.alert('Ошибка', response.responseText);
		controller.Container.setLoading(false);
	},
	
	init: function() {
		var controller = this;
		controller.Container=Ext.create('app.view.Directory.Phone.Container');
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
			'#addPhone': {
				click: function(){
					var r = Ext.ModelManager.create({
						}, 'app.model.Directory.Phone.PhoneModel');
					controller.phoneStore.insert(0, r);
					return true;
				}
			},
      '#savePhone': {
				click: function(){
          controller.Container.setLoading(true);
					controller.phoneStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка при сохранении телефонов", batch.exceptions[0].getError().responseText);
							}
							controller.Container.setLoading(false);
						}
					});
					return true;
				}
			},
			'#refreshPhone': {
				click: function() {
          controller.Container.setLoading(true);
					controller.phoneStore.load(
           function(records, operation, success){
              if(!success){
                Ext.Msg.alert("Ошибка выборки телефонов");
              }
              controller.Container.setLoading(false);
              return true;
            }
          );  
				}
			},
			'#deletePhone': {
				click: function(button){
					var sm = Ext.getCmp('PhoneTable').getSelectionModel();
					controller.phoneStore.remove(sm.getSelection()[0]);
					if (controller.phoneStore.getCount() > 0) {
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
          controller.groupComboStore.load(
            function(records, operation, success){
              if(success){
                controller.phoneStore.load();
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
			phoneTable = Ext.getCmp('PhoneTable'),
      personColumn=phoneTable.columns[2],
			groupColumn=phoneTable.columns[3];
			

		 
    controller.phoneStore = phoneTable.store;
		
    controller.personComboStore = personColumn.store;
    controller.groupComboStore = groupColumn.store;
    
    controller.loadDictionaries();
       
	}
});
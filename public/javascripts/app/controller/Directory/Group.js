Ext.define('app.controller.Directory.Group', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Directory.Group.Group',
		'Directory.Group.GroupPerson',
    'Directory.Group.Phone',
    'Directory.Group.RoomCombo',
	  'Directory.Group.PersonCombo',
	  'Directory.Group.PhoneCombo'
	],
	
	models: [
		'valueModel',
		'Directory.Group.GroupModel',
    'Directory.Group.GroupPersonModel',
    'Directory.Group.PhoneModel'
	],
	
	views: [
		'Directory.Group.Container'
		
	],
	
	Container: null,
	groupStore: null,
	personStore: null,
	phoneStore: null,
	roomComboStore: null,
  personComboStore: null,
  phoneComboStore: null,	
		
	showServerError: function(response, options) {
		var controller=this;
		Ext.Msg.alert('Ошибка', response.responseText);
		controller.Container.setLoading(false);
	},
  
	loadDetail: function(masterId){
		var controller=this,
			selected=Ext.getCmp('GroupTable').getSelectionModel().getSelection();
		
    if (masterId==null)
		{
			if(selected!=null && selected.length>0){
				masterId=selected[0].get('id');
			} else
			{
				masterId=-1
			}
		}
    controller.Container.setLoading(true);
    if (masterId <= 0)
    {
				controller.personStore.removeAll();
        controller.phoneStore.removeAll();
        Ext.getCmp('GroupPersonTable').setDisabled(true);
        Ext.getCmp('PhoneTable').setDisabled(true);
        controller.Container.setLoading(false);
    }
    else
    { 
      controller.personStore.proxy.extraParams={
        master_id: masterId
      };
      controller.personStore.load(
        function(records, operation, success){
          if(!success){
            Ext.Msg.alert("Ошибка выборки сотрудников");
            controller.Container.setLoading(false);
          }
          else {
            controller.phoneStore.proxy.extraParams={
              master_id: masterId
            };
            controller.phoneStore.load(
              function(records, operation, success){
                if(!success){
                  Ext.Msg.alert("Ошибка выборки телефонов");
                }
                controller.Container.setLoading(false);
                Ext.getCmp('PhoneTable').setDisabled(false);
                Ext.getCmp('GroupPersonTable').setDisabled(false);
                return true;
              }
            );  
          }
          return true;
        }
      );
		}
	},
	
	init: function() {
		var controller = this;
		controller.Container=Ext.create('app.view.Directory.Group.Container');
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
			'#GroupTable': {
				selectionchange: function(sm, selected, eOpts){
					if(selected!=null && selected.length>0){
            controller.loadDetail(
							getId(selected[0])
						);
					} else {
          controller.loadDetail(-1);
					}
					return true;
				}
			},
			'#addGroup': {
				click: function(){
					var r = Ext.ModelManager.create({
						}, 'app.model.Directory.Group.GroupModel');
					controller.groupStore.insert(0, r);
					return true;
				}
			},
      '#saveGroup': {
				click: function(){
          controller.Container.setLoading(true);
					controller.groupStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка при сохранении групп", batch.exceptions[0].getError().responseText);
							}
              controller.loadDetail();
							controller.Container.setLoading(false);
						}
					});
					return true;
				}
			},
			'#refreshGroup': {
				click: function() {
          controller.Container.setLoading(true);
					controller.groupStore.load(
           function(records, operation, success){
              if(!success){
                Ext.Msg.alert("Ошибка выборки групп");
              }
              controller.Container.setLoading(false);
              return true;
            }
          );  
				}
			},
			'#deleteGroup': {
				click: function(button){
					var sm = Ext.getCmp('GroupTable').getSelectionModel();
					controller.groupStore.remove(sm.getSelection()[0]);
					if (controller.groupStore.getCount() > 0) {
						sm.select(0);
					}
				}
			},
      '#addGroupPerson': {
				click: function(){
					var masterId = Ext.getCmp('GroupTable').getSelectionModel().getSelection()[0].getId(),
          r = Ext.ModelManager.create({ group: masterId
						}, 'app.model.Directory.Group.GroupPersonModel');
					controller.personStore.insert(0, r);
					return true;
				}
			},
      '#saveGroupPerson': {
				click: function(){
          var  masterId = Ext.getCmp('GroupTable').getSelectionModel().getSelection()[0].getId();
          controller.Container.setLoading(true);
          //controller.personStore.each(function(r){ r.set('group',masterId ) } );
					controller.personStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка при сохранении сотрудников", batch.exceptions[0].getError().responseText);
							}
							controller.Container.setLoading(false);
						}
					});
					return true;
				}
			},
			'#refreshGroupPerson': {
				click: function() {
          var  masterId = Ext.getCmp('GroupTable').getSelectionModel().getSelection()[0].getId();
          controller.Container.setLoading(true);
          controller.personStore.proxy.extraParams={
            master_id: masterId
          };
					controller.personStore.load(
           function(records, operation, success){
              if(!success){
                Ext.Msg.alert("Ошибка выборки сотрудников");
              }
              controller.Container.setLoading(false);
              return true;
            }
          );  
				}
			},
			'#deleteGroupPerson': {
				click: function(button){
					var sm = Ext.getCmp('GroupPersonTable').getSelectionModel();
					controller.personStore.remove(sm.getSelection()[0]);
					if (controller.personStore.getCount() > 0) {
						sm.select(0);
					}
				}
			},
      '#addPhone': {
				click: function(){
					var masterId = Ext.getCmp('GroupTable').getSelectionModel().getSelection()[0].getId(),
          r = Ext.ModelManager.create({ group: masterId
						}, 'app.model.Directory.Group.PhoneModel');
					controller.phoneStore.insert(0, r);
					return true;
				}
			},
      '#savePhone': {
				click: function(){
          var  masterId = Ext.getCmp('GroupTable').getSelectionModel().getSelection()[0].getId();
          controller.Container.setLoading(true);
          //controller.phoneStore.each(function(r){ r.set('group',masterId ) } );
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
          var  masterId = Ext.getCmp('GroupTable').getSelectionModel().getSelection()[0].getId();
          controller.Container.setLoading(true);
          controller.phoneStore.proxy.extraParams={
            master_id: masterId
          };
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
					if (controller.personStore.getCount() > 0) {
						sm.select(0);
					}
				}
			}
		});
		
		
	controller.initStores();
	},
	
	loadDictionaries: function(){
		var controller=this;
		
		controller.roomComboStore.load();
    controller.personComboStore.load();
    controller.phoneComboStore.load();
    
    controller.groupStore.load();
    
	},
	
	initStores: function(){
		var controller=this,
			groupTable = Ext.getCmp('GroupTable'),
      roomColumn=groupTable.columns[2],
			personTable=Ext.getCmp('GroupPersonTable'),
      personColumn=personTable.columns[0],
			phoneTable = Ext.getCmp('PhoneTable'),
			phoneColumn=phoneTable.columns[0];
			

		 
    controller.groupStore = groupTable.store;
		controller.personStore = personTable.store;
		controller.phoneStore = phoneTable.store;
    
    controller.roomComboStore = roomColumn.store;
    controller.personComboStore = personColumn.store;
    controller.phoneComboStore = phoneColumn.store;
    
    controller.loadDictionaries();
   
    
	}
});
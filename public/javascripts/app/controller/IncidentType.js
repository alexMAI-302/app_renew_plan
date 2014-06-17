Ext.define('app.controller.IncidentType', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'IncidentType.IncidentType',
		'IncidentType.TextCond',
    'IncidentType.TimeCond',
    'IncidentType.ClassCombo',
    'IncidentType.TextAttributeCombo',
    'IncidentType.TextSystemCombo',
    'IncidentType.TimeAttribute1Combo',
    'IncidentType.TimeAttribute2Combo',
    'IncidentType.TimeSystemCombo',
	],
	
	models: [
		'valueModel',
		'IncidentType.IncidentTypeModel',
    'IncidentType.TextCondModel',
    'IncidentType.TimeCondModel',
	],
	
	views: [
		'IncidentType.Container'
		
	],
	
	Container: null,
	incidentTypeStore: null,
	textCondStore: null,
	timeCondStore: null,
	classComboStore: null,
  textAttributeComboStore: null,
  textSystemComboStore: null,
  timeAttribute1ComboStore: null,
  timeAttribute2ComboStore: null,
  timeSystemComboStore: null,
		
	showServerError: function(response, options) {
		var controller=this;
		Ext.Msg.alert('Ошибка', response.responseText);
		controller.Container.setLoading(false);
	},
  
	loadDetail: function(masterId){
		var controller=this,
			selected=Ext.getCmp('IncidentTypeTable').getSelectionModel().getSelection();
		
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
				controller.textCondStore.removeAll();
        controller.timeCondStore.removeAll();
        Ext.getCmp('TextCondTable').setDisabled(true);
        Ext.getCmp('TimeCondTable').setDisabled(true);
        controller.Container.setLoading(false);
    }
    else
    { 
      controller.textCondStore.proxy.extraParams={
        master_id: masterId
      };
      controller.textCondStore.load(
        function(records, operation, success){
          if(!success){
            Ext.Msg.alert("Ошибка выборки символьных условий");
            controller.Container.setLoading(false);
          }
          else {
            controller.timeCondStore.proxy.extraParams={
              master_id: masterId
            };
            controller.timeCondStore.load(
              function(records, operation, success){
                if(!success){
                  Ext.Msg.alert("Ошибка выборки временных условий");
                }
                controller.Container.setLoading(false);
                Ext.getCmp('TextCondTable').setDisabled(false);
                Ext.getCmp('TimeCondTable').setDisabled(false);
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
		controller.Container=Ext.create('app.view.IncidentType.Container');
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
			'#IncidentTypeTable': {
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
			'#addIncidentType': {
				click: function(){
					var r = Ext.ModelManager.create({
						}, 'app.model.IncidentType.IncidentTypeModel');
					controller.incidentTypeStore.insert(0, r);
					return true;
				}
			},
      '#saveIncidentType': {
				click: function(){
          controller.Container.setLoading(true);
					controller.incidentTypeStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка при сохранении типов инцидентов", batch.exceptions[0].getError().responseText);
							}
              controller.loadDetail();
							controller.Container.setLoading(false);
						}
					});
					return true;
				}
			},
			'#refreshIncidentType': {
				click: function() {
          controller.Container.setLoading(true);
					controller.incidentTypeStore.load(
           function(records, operation, success){
              if(!success){
                Ext.Msg.alert("Ошибка выборки типов инцидентов");
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
      '#addTextCond': {
				click: function(){
					var masterId = Ext.getCmp('IncidentTypeTable').getSelectionModel().getSelection()[0].getId(),
          r = Ext.ModelManager.create({ incident_type: masterId
						}, 'app.model.IncidentType.TextCondModel');
					controller.textCondStore.insert(0, r);
					return true;
				}
			},
      '#saveTextCond': {
				click: function(){
          var  masterId = Ext.getCmp('IncidentTypeTable').getSelectionModel().getSelection()[0].getId();
          controller.Container.setLoading(true);
					controller.textCondStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка при сохранении символьных условий", batch.exceptions[0].getError().responseText);
							}
							controller.Container.setLoading(false);
						}
					});
					return true;
				}
			},
			'#refreshTextCond': {
				click: function() {
          var  masterId = Ext.getCmp('IncidentTypeTable').getSelectionModel().getSelection()[0].getId();
          controller.Container.setLoading(true);
          controller.textCondStore.proxy.extraParams={
            master_id: masterId
          };
					controller.textCondStore.load(
           function(records, operation, success){
              if(!success){
                Ext.Msg.alert("Ошибка выборки текстовых условий");
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
      '#addTimeCond': {
				click: function(){
					var masterId = Ext.getCmp('IncidentTypeTable').getSelectionModel().getSelection()[0].getId(),
          r = Ext.ModelManager.create({ incident_type: masterId
						}, 'app.model.IncidentType.TimeCondModel');
					controller.timeCondStore.insert(0, r);
					return true;
				}
			},
      '#saveTimeCond': {
				click: function(){
          var  masterId = Ext.getCmp('IncidentTypeTable').getSelectionModel().getSelection()[0].getId();
          controller.Container.setLoading(true);
					controller.timeCondStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка при временных условий", batch.exceptions[0].getError().responseText);
							}
							controller.Container.setLoading(false);
						}
					});
					return true;
				}
			},
			'#refreshTimeCond': {
				click: function() {
          var  masterId = Ext.getCmp('IncidentTypeTable').getSelectionModel().getSelection()[0].getId();
          controller.Container.setLoading(true);
          controller.timeCondStore.proxy.extraParams={
            master_id: masterId
          };
					controller.timeCondStore.load(
           function(records, operation, success){
              if(!success){
                Ext.Msg.alert("Ошибка выборки временных условий");
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
		
		controller.classComboStore.load();
    controller.textSystemComboStore.load();
    controller.textAttributeComboStore.load();
    controller.timeAttribute1ComboStore.load();
    controller.timeAttribute2ComboStore.load();
    controller.timeSystemComboStore.load();
    
    controller.incidentTypeStore.load();
    
	},
	
	initStores: function(){
		var controller=this,
			IncidentTypeTable = Ext.getCmp('IncidentTypeTable'),
      ClassColumn=IncidentTypeTable.columns[1],
			TextCondTable=Ext.getCmp('TextCondTable'),
      TextAttributeColumn=TextCondTable.columns[2],
      TextSystemColumn=TextCondTable.columns[4],
			TimeCondTable = Ext.getCmp('TimeCondTable'),
			TimeAttribute1Column=TimeCondTable.columns[2],
      TimeAttribute2Column=TimeCondTable.columns[3],
      TimeSystemColumn=TimeCondTable.columns[4];
			

		 
    controller.incidentTypeStore = IncidentTypeTable.store;
		controller.textCondStore = TextCondTable.store;
		controller.timeCondStore = TimeCondTable.store;
    
    controller.classComboStore = ClassColumn.store;
    controller.textAttributeComboStore = TextAttributeColumn.store;
    controller.textSystemComboStore = TextSystemColumn.store;
    controller.timeAttribute1ComboStore = TimeAttribute1Column.store;
    controller.timeAttribute2ComboStore = TimeAttribute2Column.store;
    controller.timeSystemComboStore = TimeSystemColumn.store;
    
    controller.loadDictionaries();
   
    
	}
});
Ext.define('app.controller.Incident', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Incident.Incident',
		'Incident.TermAttrValue',
    'Incident.FilterClassCombo',
    'Incident.FilterStatusCombo',
    'Incident.StatusCombo'
	],
	
	models: [
		'valueModel',
		'Incident.IncidentModel',
    'Incident.TermAttrValueModel'
	],
	
	views: [
		'Incident.Container'
		
	],
	
	Container: null,
	IncidentStore: null,
	TermAttrValueStore: null,
	filterClassComboStore: null,
  filterStatusComboStore: null,
  StatusComboStore: null,
		
	showServerError: function(response, options) {
		var controller=this;
		Ext.Msg.alert('Ошибка', response.responseText);
		controller.Container.setLoading(false);
	},
  
  refreshIncident: function(){
		var controller=this;
		
		controller.IncidentStore.proxy.extraParams = {
			ddateb: Ext.getCmp('ddatebIncidentFilter').getValue(),
			ddatee: Ext.getCmp('ddateeIncidentFilter').getValue(),
			status: Ext.getCmp('filterStatusIncidentFilter').getValue(),
			class: Ext.getCmp('filterClassIncidentFilter').getValue()
		};
		
		controller.IncidentStore.load(
			function(records, operation, success){
				if(!success){
					Ext.Msg.alert("Ошибка", "Ошибка при загрузке инцидентов");
				}
			}
		);
	},

  
	loadDetail: function(masterId){
		var controller=this,
			selected=Ext.getCmp('IncidentTable').getSelectionModel().getSelection();
		
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
				controller.TermAttrValueStore.removeAll();
        Ext.getCmp('TermAttrValueTable').setDisabled(true);
        controller.Container.setLoading(false);
    }
    else
    { 
      controller.TermAttrValueStore.proxy.extraParams={
        master_id: masterId
      };
      controller.TermAttrValueStore.load(
        function(records, operation, success){
          if(!success){
            Ext.Msg.alert("Ошибка выборки значений аттрибутов");
            controller.Container.setLoading(false);
          }
          else {
            Ext.getCmp('TermAttrValueTable').setDisabled(false);
            controller.Container.setLoading(false);
          }
          return true;
        }
      );
		}
	},
	
	init: function() {
		var controller = this;
		controller.Container=Ext.create('app.view.Incident.Container');
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
			'#filterIncidentFilter': {
				click: controller.refreshIncident
			},
      '#IncidentTable': {
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
			'#saveIncident': {
				click: function(){
          controller.Container.setLoading(true);
					controller.IncidentStore.sync({
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
			'#refreshIncident': {
				click: function() {
          controller.incidentStore.load(
           function(records, operation, success){
              if(!success){
                Ext.Msg.alert("Ошибка выборки инцидентов");
              }          
              return true;
            }
          );  
				}
			},
		});
		StatusColumn=Ext.getCmp('IncidentTable').columns[8];
    StatusColumn.field.addListener(
			"expand",
			function(field, eOpts){
				var r = Ext.getCmp('IncidentTable').getSelectionModel().getSelection()[0];
				controller.StatusComboStore.clearFilter();
        if ((r.get('status1')==1) || (r.get('status1')==2)) {
          controller.StatusComboStore.filter([{property:"id", value: /[12]/}]);
          return true;
        }
        else        
        {
          controller.StatusComboStore.filter([{property:"id", value: -1}]);
          return false;
        }
				
			}
		);
	
	controller.initStores();
	},
	
	loadDictionaries: function(){
		var controller=this;
		
		controller.filterClassComboStore.load();
    controller.filterStatusComboStore.load();
    controller.StatusComboStore.load();
    
    //controller.IncidentStore.load();
    
	},
	
	initStores: function(){
		var controller=this,
			IncidentTable = Ext.getCmp('IncidentTable'),
      StatusColumn=IncidentTable.columns[8],
      TermAttrValueTable = Ext.getCmp('TermAttrValueTable');
			

		controller.filterStatusComboStore=Ext.getCmp('filterStatusIncidentFilter').store;
    controller.filterClassComboStore=Ext.getCmp('filterClassIncidentFilter').store;
    controller.IncidentStore = IncidentTable.store;
		controller.TermAttrValueStore = TermAttrValueTable.store;
		
    controller.StatusComboStore = StatusColumn.store;
    
    controller.loadDictionaries();
   
    
	}
});
Ext.define('app.controller.Truck', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Truck.Truck',
		'Truck.BuyersRoute',
		'Truck.TruckType',
		'Truck.Drivers',
		'Truck.Securers',
		'Truck.Site',
		'Truck.PayReceiver',
		'Truck.ParsecPersonel',
		'Truck.PaCard',
		'Truck.EmpDept',
		'Truck.Organization',
		'Truck.Safe',
		'Truck.Signaling',
		'Truck.StatusCar',
		'Truck.TruckBattery',
		'Truck.TruckBus',
		'Truck.BusType',
		'Truck.TruckTO'
		
		
	],
	
	models: [
		'valueModel',
		'Truck.TruckModel',
		'Truck.ParsecPersonelModel'
	],
	
	views: [
		'Truck.Container'
	],
	
	mainContainer: null,
	
	masterStore: null,
	BuyersRoute: null,
	TruckType: null,
	Drivers: null,
	Drivers2: null,
	Securer: null,
	Site: null,
	PayReceiver: null,
	ParsecPersonel: null,
	PaCard: null,
	EmpDept: null,
	Organization:null,
	StatusCar:null,
	BusType:null, 
	
	detailStore: null,         //первое подчиненное окно
	detailStore2: null,         //второе подчиненное окно
	detailStore3: null,         //третье подчиненное окно
	
	
	storeHasChanges: function(store){
		return (store.getNewRecords().length > 0) ||
			(store.getUpdatedRecords().length > 0) ||
			(store.getRemovedRecords().length > 0)
	},
	
	showServerError: function(response, options) {
		var controller=this;
		Ext.Msg.alert('Ошибка', response.responseText);
		controller.mainContainer.setLoading(false);
	},
	
	syncMaster: function(container, selectedMasterId){
		var controller=this;
		function syncDetail(container, masterId)
		{
			 container.setLoading(true);
			if(masterId == null || masterId == 0 )
			{
					var selected = Ext.getCmp('TruckBatteryTable').getSelectionModel().getSelection()[0];
					masterId = ((selected != null) ? selected.get('id') : null);

			};
			if(masterId == null || masterId == 0 )
			{
			  Ext.Msg.alert("Внимание", "Ваши данные в таблице с детализацией были утеряны. Сначала сохраняйте данные в основной таблице, затем вводите детализацию.");
			  container.setLoading(false);
			  return;
			};
			if (controller.storeHasChanges(controller.detailStore))
			{
			controller.detailStore.proxy.extraParams={master_id: masterId};
					
					controller.detailStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0)
							{
								Ext.Msg.alert("Ошибка", batch.exceptions[0].getError().responseText);
								container.setLoading(false);
							}
							
						}
					});
			};
			
			
			if (controller.storeHasChanges(controller.detailStore2))
			{
			controller.detailStore2.proxy.extraParams={master_id: masterId};
					
					controller.detailStore2.sync({
						callback: function(batch){
							if(batch.exceptions.length>0)
							{
								Ext.Msg.alert("Ошибка", batch.exceptions[0].getError().responseText);
								container.setLoading(false);
							}
							
						}
					});
			};
			
			if (controller.storeHasChanges(controller.detailStore3))
			{
			controller.detailStore3.proxy.extraParams={master_id: masterId};
					
					controller.detailStore3.sync({
						callback: function(batch){
							if(batch.exceptions.length>0)
							{
								Ext.Msg.alert("Ошибка", batch.exceptions[0].getError().responseText);
								container.setLoading(false);
							}
							
						}
					});
			};

			
			
			container.setLoading(false);
		};
		
		container.setLoading(true);
		if (controller.storeHasChanges(controller.masterStore)){
			controller.masterStore.sync({
				callback: function(batch){
					if(batch.exceptions.length>0){
						Ext.Msg.alert("Ошибка", batch.exceptions[0].getError().responseText);
						container.setLoading(false);
					} else {
						syncDetail(container, selectedMasterId);
					}
				}
			});
		} else {
			syncDetail(container, selectedMasterId);
		}
	},
	
	init: function() {
		var controller = this;
		
		controller.mainContainer=Ext.create('app.view.Truck.Container');
		function getId(r){
			return (r!=null)?
					((r.getId()!=null && r.getId()!=0)?
						r.getId():
						r.get('id')
					):
					null;
		}
		
		controller.control({
		
     		'#refreshTruck': {
				click: function(){
					controller.masterStore.load();
				}
			},
			
			'#addTruck': {
				click: function(){
						controller.masterStore.insert(0, {});
				}
			},
			'#saveTruck': {
				click: function(){
					var selected=Ext.getCmp('TruckTable').getSelectionModel().getSelection()[0];
					controller.syncMaster(
						controller.mainContainer,
						(selected!=null)?selected.get('id'):null);
					return true;
				}
			},
			'#TruckTable': 
			{
				selectionchange: function(sm, selected, eOpts)
				{
				    
  					if(selected!=null && selected.length>0)
					{
						controller.loadDetail(controller.detailStore, getId(selected[0]),'Ошибка');
						controller.loadDetail(controller.detailStore2, getId(selected[0]),'Ошибка');
						controller.loadDetail(controller.detailStore3, getId(selected[0]),'Ошибка');
						Ext.getCmp('deleteTruckBattery').setDisabled(false);  //кнопку удалить активируем
						Ext.getCmp('deleteTruckBus').setDisabled(false);  //кнопку удалить активируем
						Ext.getCmp('deleteTruckTO').setDisabled(false);  //кнопку удалить активируем
											} 
					else {
					

						controller.detailStore.removeAll();
						controller.detailStore2.removeAll();
						Ext.getCmp('TruckBatteryTable').setDisabled(true);
						Ext.getCmp('deleteTruckBattery').setDisabled(true);
						
						Ext.getCmp('TruckBusTable').setDisabled(true);
						Ext.getCmp('deleteTruckBus').setDisabled(true);
						
						Ext.getCmp('TruckTOTable').setDisabled(true);
						Ext.getCmp('deleteTruckTO').setDisabled(true);


						
						
						
					}
					return true;
				}

			    
			},
				'#addTruckBattery': {
				click: function()
				{
						var sm=Ext.getCmp('TruckTable').getSelectionModel(),
						id = sm.getSelection()[0].getId();
						r = Ext.ModelManager.create({master_id: id}, 'app.model.Truck.TruckBatteryModel');
					    controller.detailStore.insert(0, r);
						
				}
			},
			
			'#addTruckTO': {
				click: function()
				{
						var sm=Ext.getCmp('TruckTable').getSelectionModel(),
						id = sm.getSelection()[0].getId();
						r = Ext.ModelManager.create({master_id: id}, 'app.model.Truck.TruckTOModel');
					    controller.detailStore3.insert(0, r);
						
				}
			},

			
				'#addTruckBus': {
				click: function()
				{
						var sm=Ext.getCmp('TruckTable').getSelectionModel(),
						id = sm.getSelection()[0].getId();
						r = Ext.ModelManager.create({master_id: id}, 'app.model.Truck.TruckBusModel');
					    controller.detailStore2.insert(0, r);
						
				}
			},
				'#deleteTruckBattery': {
				click: function(button){
					var sm = Ext.getCmp('TruckBatteryTable').getSelectionModel();
					
					controller.detailStore.remove(sm.getSelection()[0]);
					if (controller.detailStore.getCount() > 0) {
						sm.select(0);
					}
				}
			},
			
			
			'#deleteTruckTO': {
				click: function(button){
					var sm = Ext.getCmp('TruckTOTable').getSelectionModel();
					
					controller.detailStore3.remove(sm.getSelection()[0]);
					if (controller.detailStore3.getCount() > 0) {
						sm.select(0);
					}
				}
			},
			
			
				'#deleteTruckBus': {
				click: function(button){
					var sm = Ext.getCmp('TruckBusTable').getSelectionModel();
					
					controller.detailStore2.remove(sm.getSelection()[0]);
					if (controller.detailStore2.getCount() > 0) {
						sm.select(0);
					}
				}
			},
			
		});
	},
		loadDetail: function(store, masterId, errorString){
		var controller = this;
		
		
			store.proxy.extraParams={
				master_id: masterId
			};
			store.load(
				function(records, operation, success){
					if(success!==true){
						Ext.Msg.alert("Ошибка", errorString);
					} 
				}
			)
		
	},
	
	
	
		loadDictionariesRek: function (X, K, N)
		{
			var controller=this;
			if (K <= N) 
			{
				X [K].load (
				function(records, operation, success)
				{
					if(success===true)
					{
						controller.loadDictionariesRek (X,K+1,N);
					}
					else Ext.Msg.alert('Ошибка', "Ошибка при загрузке справочника");
				}
				)		
			}
		},
		
				
	
		loadDictionaries: function(){
		var controller=this;
		
		var A = new Array();
		
		
		
		  
	    A[0] = controller.Organization;	
		A[1] = controller.TruckType;
		A[2] = controller.Drivers;
		A[3] = controller.Drivers2;
		A[4] = controller.Securer;
		A[5] = controller.Site;
		A[6] = controller.PayReceiver;
		A[7] = controller.ParsecPersonel;
		A[8] = controller.PaCard;
		A[9] = controller.EmpDept;
		A[10] = controller.BuyersRoute;
		A[11] = controller.StatusCar;
		A[12] = controller.masterStore;
		controller.loadDictionariesRek (A,0,12);

				

		
	},
	
	
	
	initStores: function(){
		var controller=this,
		TruckTable = Ext.getCmp('TruckTable');
		controller.masterStore = TruckTable.getStore();
		controller.BuyersRoute = TruckTable.columns[1].store;
		controller.TruckType = TruckTable.columns[2].store;
		controller.Drivers= TruckTable.columns[3].store;
		controller.Drivers2= TruckTable.columns[4].store;
		controller.Securer= TruckTable.columns[5].store;
		controller.Site= TruckTable.columns[6].store;
	    controller.PayReceiver= TruckTable.columns[7].store;
	    controller.ParsecPersonel= TruckTable.columns[10].store;
	    controller.PaCard= TruckTable.columns[12].store;
	    controller.EmpDept= TruckTable.columns[13].store;
	    controller.Organization= TruckTable.columns[15].store;
	    controller.StatusCar= TruckTable.columns[22].store;
	    TruckBatteryTable = Ext.getCmp('TruckBatteryTable');
	    controller.detailStore = TruckBatteryTable.getStore();
	    
	    TruckBusTable = Ext.getCmp('TruckBusTable');
	    controller.detailStore2 = TruckBusTable.getStore();
	    controller.BusType= TruckBusTable.columns[0].store;
	    
	    TruckTOTable = Ext.getCmp('TruckTOTable');
	    controller.detailStore3 = TruckTOTable.getStore();
	    
	    
	    
	         
	    

		controller.loadDictionaries();
		
	},
	
	onLaunch: function(){
		var controller = this;
		
		controller.initStores();
	}
});
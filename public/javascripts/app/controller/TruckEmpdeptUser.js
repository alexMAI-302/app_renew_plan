Ext.define('app.controller.TruckEmpdeptUser', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'TruckEmpdeptUser.TruckEmpdeptUser'
	],
	
	models: [
		'valueModel',
		'TruckEmpdeptUser.TruckEmpdeptUserModel'
	],
	
	views: [
		'TruckEmpdeptUser.Container'
	],
	
	mainContainer: null,
	
	masterStore: null,
	EmpdeptUser: null,
	
	
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
		
		if (controller.storeHasChanges(controller.masterStore)){
				
			container.setLoading(true);
			controller.masterStore.sync({
				callback: function(batch){
					if(batch.exceptions.length>0){
						Ext.Msg.alert("Ошибка", batch.exceptions[0].getError().responseText);
						container.setLoading(false);
					}
					container.setLoading(false);
				}
			});
		}
	},
	
	init: function() {
		var controller = this;
		
		controller.mainContainer=Ext.create('app.view.TruckEmpdeptUser.Container');
		
		controller.control({
		
     		'#refreshTruckEmpdeptUser': {
				click: function(){
					controller.masterStore.load();
				}
			},
			
			'#addTruckEmpdeptUser': {
				click: function(){
						controller.masterStore.insert(0, {});
				}
			},
			'#saveTruckEmpdeptUser': {
				click: function(){
					var selected=Ext.getCmp('TruckEmpdeptUserTable').getSelectionModel().getSelection()[0];
					controller.syncMaster(
						controller.mainContainer,
						(selected!=null)?selected.get('id'):null);
					return true;
				}
			},

		});
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
		A[0] = controller.EmpdeptUser;
		A[1] = controller.masterStore;
		controller.loadDictionariesRek (A,0,1);
	},				
	
	initStores: function(){
		var controller=this,
		TruckEmpdeptUserTable = Ext.getCmp('TruckEmpdeptUserTable');
		controller.masterStore = TruckEmpdeptUserTable.getStore();
		controller.EmpdeptUser = TruckEmpdeptUserTable.columns[0].store;
		
		controller.loadDictionaries();
	},
	
	onLaunch: function(){
		var controller = this;
		
		controller.initStores();
	}
});

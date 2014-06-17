Ext.define('app.controller.Directory.Division', {
    extend: 'Ext.app.Controller',
	
	views: [
		'Directory.Division.Container'
	],
	
  models: [
		'valueModel',
    'app.model.Directory.Division.DivisionModel'
  ],

	stores: [
		'Directory.Division.DivisionTree',
		'Directory.Division.Division',
    'Directory.Division.Person',
    'Directory.Division.DivisionCombo',
    'Directory.Division.PersonCombo',
    'Directory.Division.HeadCombo',
    
	],
	DivisionTreeStore:null,
	DivisionStore:null,
  divisionComboStore:null,
  personStore:null,
  personComboStore:null,
  headComboStore:null,
	Container: null,
	
  loadDivision: function(masterId){
		var controller=this,
			selected=Ext.getCmp('DivisionTreeTable').getSelectionModel().getSelection();
		
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
    
    controller.personStore.removeAll();
    Ext.getCmp('PersonItemTable').setDisabled(true);
        
    if (masterId < 0)
    {
				controller.DivisionStore.removeAll();
        Ext.getCmp('DivisionItemTable').setDisabled(true);
        controller.Container.setLoading(false);
    }
    else
    { 
      controller.DivisionStore.proxy.extraParams={
        division: masterId
      };
      controller.DivisionStore.load(
        function(records, operation, success){
          if(!success){
            Ext.Msg.alert("Ошибка выборки подразделений");            
          }
          else {
            Ext.getCmp('DivisionItemTable').setDisabled(false);
          }
          controller.Container.setLoading(false);
          return true;
        }
      );
		}
	}, 
  
  loadPerson: function(masterId){
		var controller=this,
			selected=Ext.getCmp('DivisionItemTable').getSelectionModel().getSelection();
		
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
        Ext.getCmp('PersonItemTable').setDisabled(true);
        controller.Container.setLoading(false);
    }
    else
    { 
      controller.personStore.proxy.extraParams={
        division: masterId
      };
      controller.personStore.load(
        function(records, operation, success){
          if(!success){
            Ext.Msg.alert("Ошибка выборки сотрудников");            
          }
          else {
            Ext.getCmp('PersonItemTable').setDisabled(false);
          }
          controller.Container.setLoading(false);
          return true;
        }
      );
		}
	},  
  
	init: function() {
		var controller = this;
		controller.Container = Ext.create('app.view.Directory.Division.Container');
		
    function getId(r){
			return (r!=null)?
					((r.getId()!=null && r.getId()!=0)?
						r.getId():
						r.get('id')
					):
					null;
		}
		controller.control({
			'#DivisionTreeTable': {
				selectionchange: function(sm, selected, eOpts){
					if(selected!=null && selected.length>0){
						controller.loadDivision(selected[0].get('id'))
          }
        }
			},
      '#refreshDivisionItem': {
        click: function() {
           controller.loadDivision();
        }
	    },
      '#addDivisionItem': {
				click: function(){
					var r = Ext.ModelManager.create({
						}, 'app.model.Directory.Division.DivisionModel');
          r.set('parent', Ext.getCmp('DivisionTreeTable').getSelectionModel().getSelection()[0].get('id'));
					controller.DivisionStore.insert(0, r);          
          return true;
				}
			},
      '#saveDivisionItem': {
				click: function(){
					controller.Container.setLoading(true);
					controller.DivisionStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка", batch.exceptions[0].getError().responseText);
							}
							controller.Container.setLoading(false);
						}
					});
					controller.Container.setLoading(false);
					return true;
				}
			},
      '#DivisionItemTable': {
				selectionchange: function(sm, selected, eOpts){
					if(selected!=null && selected.length>0){
            controller.loadPerson(
							getId(selected[0])
						);
					} else {
          controller.loadPerson(-1);
					}
					return true;
				}
			},
      '#addPersonItem': {
				click: function(){
					var r = Ext.ModelManager.create({
						}, 'app.model.Directory.Division.PersonModel');
					controller.personStore.insert(0, r);
					return true;
				}
			},
      '#refreshPersonItem': {
        click: function() {
          controller.loadPerson();
        }
	    },
			'#savePersonItem': {
				click: function(){
					controller.Container.setLoading(true);
					controller.personStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка", batch.exceptions[0].getError().responseText);
							}
							controller.Container.setLoading(false);
						}
					});
					controller.Container.setLoading(false);
					return true;
				}
			},      
		});
    headColumn = Ext.getCmp('DivisionItemTable').columns[3];
    headColumn.field.addListener(
			"select",
			function(combo, selected, eOpts){
				var r=Ext.getCmp('DivisionItemTable').getSelectionModel().getSelection()[0],
					s=selected[0];
          r.set('head_name',selected[0].get('name'));
				return true;
			}
		);
    
    personColumn = Ext.getCmp('PersonItemTable').columns[1];
    personColumn.field.addListener(
			"select",
			function(combo, selected, eOpts){
				var r=Ext.getCmp('PersonItemTable').getSelectionModel().getSelection()[0],
					s=selected[0];
          r.set('name',selected[0].get('name'));
				return true;
			}
		);
    
   Ext.getCmp('DivisionTreeTable').on('load', function() {
         init_div=Ext.getDom('init_div').value;
         if ((init_div!=null) &&  (init_div>=0))
         {
            node = Ext.getCmp('DivisionTreeTable').store.getNodeById(init_div);
            parent = node.parent;
            Ext.getCmp('DivisionTreeTable').getSelectionModel().select(node)
         }
    });

    
	},
	initStores: function(){
		var controller=this,
		  divTable = Ext.getCmp('DivisionItemTable'),
      divColumn=divTable.columns[2],
      headColumn=divTable.columns[3],
      personTable = Ext.getCmp('PersonItemTable'),
      personColumn=personTable.columns[1];
				 
    controller.DivisionStore = divTable.store;
    controller.personStore = personTable.store;
    
    //	controller.DivisionStore=controller.getDirectoryDivisionDivisionStore();
    
    controller.divisionComboStore = divColumn.store;
    controller.divisionComboStore.load();
    controller.headComboStore = headColumn.store;
    controller.headComboStore.load();
    controller.personComboStore = personColumn.store;
    controller.personComboStore.load();
    
    
    
	},
	bindStores: function(){
		var controller=this;
	},
	initTables: function(){
		var controller=this;
	},
	onLaunch: function(){
		var controller = this;
		controller.initStores();
		controller.bindStores();
		controller.initTables();
	},

});
Ext.define('app.controller.PolygraphTabs.Candidate', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Polygraph.Zodiacs',
		'Polygraph.EmpPos',
		'Polygraph.Candidates',
		'Polygraph.MaritalStatus',
		'Polygraph.CandidateResult',
		'Polygraph.Experienxes',
		'Polygraph.CandidateAnswers',
		'Polygraph.CandidatePictures'
	],
	
	models: [
		'valueModel',
		'Polygraph.Candidates',
		'Polygraph.Experienxes',
		'Polygraph.CandidateAnswers',
		'Polygraph.PictureModel'
	],
	
	views: [
		'Polygraph.Container',
		'Polygraph.FileWindowCandidate'
	],
	
	mainContainer: null,
	
	MaritalStatusStore: null,   //семейное положение
	ZodiacsStore: null,         //знак зодиака
	CandidateResultStore: null, //результат
	EmpPosStore:null,			//должность				
	QuestionsStore:null,        //вопросы
	masterStore: null,          //главная сторка
	detailStore: null,         //первое подчиненное окно
	detailStore2: null,         //второе подчиненное окно
	Polygraph_CandidateFoto:null,
	fileWindow: null,
	picturesStore: null,


	
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
			if(masterId == null)
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
	


	
	loadDetail: function(masterId, detailTable)
	{
		var controller=this;
		controller.detailStore.proxy.extraParams={master_id: masterId};
		controller.detailStore.load(function(){detailTable.setDisabled(false);});
	},
	
	loadDetail2: function(masterId, detailTable)
	{
		var controller=this;
		controller.detailStore2.proxy.extraParams={master_id: masterId};
		controller.detailStore2.load(function(){detailTable.setDisabled(false);});
	},
	
	
	loadPicture: function(store, masterId, errorString){
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


	init: function() {
		var controller = this;
		
		controller.mainContainer=Ext.create('app.view.Polygraph.Candidates.Container');
		controller.fileWindow=Ext.create('app.view.Polygraph.FileWindowCandidate');
		controller.mainContainer.addListener(
			"show",
			function(){
				controller.loadDictionaries();
			}
		);
		Ext.getCmp('PolygraphMain').add(controller.mainContainer);
		
		function getId(r){
			return (r!=null)?
					((r.getId()!=null && r.getId()!=0)?
						r.getId():
						r.get('id')
					):
					null;
		}
		

		
		controller.control({
		
		  '#refreshPolygraphCandidate': {
				click: function(){
					controller.masterStore.load();
				}
			},

			'#savePolygraphCandidate': {
				click: function(){
					var selected=Ext.getCmp('CandidatesTable').getSelectionModel().getSelection()[0];
					var personal_qualities = Ext.getCmp('personal_qualities').getValue();
					var features = Ext.getCmp('features').getValue();
					var problematic_quality = Ext.getCmp('problematic_quality').getValue();
					
					
					selected.set('personal_qualities', personal_qualities);
					selected.set('features', features);
					selected.set('problematic_quality', problematic_quality);
					
					controller.syncMaster(controller.mainContainer,(selected!=null)?selected.get('id'):null);
				}
			},

			


			'#addCandidates': {
				click: function(){
					var sm=Ext.getCmp('CandidatesTable').getSelectionModel(),
					r = Ext.ModelManager.create({ddate: new Date()}, 'app.model.Polygraph.Candidates');
					controller.masterStore.insert(0, r);
					sm.select(r);

				}
			},
			
			
			'#deleteCandidates': {
				click: function(button)
				{
					var sm = Ext.getCmp('CandidatesTable').getSelectionModel();
					
					controller.masterStore.remove(sm.getSelection()[0]);
					if (controller.masterStore.getCount() > 0) {
						sm.select(0);
					}
				}
			},
			
			
			
			
			
			'#CandidatesTable': 
			{
				selectionchange: function(sm, selected, eOpts)
				{
				    
  					if(selected!=null && selected.length>0)
					{
						var personal_qualities = selected[0].get ('personal_qualities');
						var features = selected[0].get ('features');
						var problematic_quality = selected[0].get ('problematic_quality');
						
						Ext.getCmp('personal_qualities').setValue(personal_qualities);
						Ext.getCmp('features').setValue(features);
						Ext.getCmp('problematic_quality').setValue(problematic_quality);
						
						
						
						controller.loadDetail(getId(selected[0]),Ext.getCmp('ExperienxesTable'));
						controller.loadDetail2(getId(selected[0]),Ext.getCmp('AnswersTable'));
						Ext.getCmp('deleteCandidates').setDisabled(false);  //кнопку удалить активируем
						Ext.getCmp('PolygraphCandidateLoadFoto').setDisabled(false);  //кнопку загрузить фото активируем
						controller.loadPicture(controller.picturesStore,getId(selected[0]),'Ошибка');
					} 
					else {
						controller.detailStore.removeAll();
						controller.detailStore2.removeAll();
						Ext.getCmp('ExperienxesTable').setDisabled(true);
						Ext.getCmp('AnswersTable').setDisabled(true);
						
						Ext.getCmp('deleteCandidates').setDisabled(true);
						Ext.getCmp('deleteAnswers').setDisabled(true);
						
					}
					return true;
				}

			    
			},
			
			'#PolygraphCandidateLoadFoto': {
				click: function(button){
				controller.fileWindow.setTitle("Загрузка фото для сотрудника");
					controller.fileWindow.show();

					}
				},
				
			'#uploadFileCandidate': {
				click: function(button) {
					var form = button.up('form').getForm();
					
					if(form.isValid())
					{
						
						var sm=Ext.getCmp('CandidatesTable').getSelectionModel(),
						masterId = sm.getSelection()[0].getId();
									if(masterId == null || masterId == 0 )
						{
						
						   controller.fileWindow.hide();
						   Ext.Msg.alert('Внимание', 'Сначало сохраните данные');
						}
						else
						{

						
						

						form.submit({
							url: '/polygraph/upload_candidate_picture',
							params: {
								authenticity_token: window._token,
								master_id: masterId
							},
							waitMsg: 'Загрузка данных...',
							success: function(fp, o) {
								
								controller.loadPicture(controller.picturesStore,masterId,'Ошибка');
								controller.fileWindow.hide();
							},
							errors: function(fp, o){
								controller.fileWindow.hide();
								Ext.Msg.alert("Ошибка обработки файла", o.result.errors);
							}
						})};
						
						
					}
				}
			},		
			
			
			
			'#addExperienxes': {
				click: function()
				{
						var sm=Ext.getCmp('CandidatesTable').getSelectionModel(),
						r = Ext.ModelManager.create({master_id: sm.getSelection()[0].getId()}, 'app.model.Polygraph.Experienxes');
					    controller.detailStore.insert(0, r);

						
				}
			},
			'#deleteExperienxes': {
				click: function(button){
					var sm = Ext.getCmp('ExperienxesTable').getSelectionModel();
					
					controller.detailStore.remove(sm.getSelection()[0]);
					if (controller.detailStore.getCount() > 0) {
						sm.select(0);
					}
				}
			},
			'#ExperienxesTable': {
				selectionchange: function(sm, selected, eOpts){
					Ext.getCmp('deleteExperienxes').setDisabled(selected==null || selected.length==0);
					return true;
				}
			},
			
			'#addAnswers': {
				click: function()
				{
						var sm=Ext.getCmp('CandidatesTable').getSelectionModel(),
						r = Ext.ModelManager.create({master_id: sm.getSelection()[0].getId()}, 'app.model.Polygraph.CandidateAnswers');
					    controller.detailStore2.insert(0, r);
						
				}
			},
			'#deleteAnswers': {
				click: function(button){
					var sm = Ext.getCmp('AnswersTable').getSelectionModel();
					
					controller.detailStore2.remove(sm.getSelection()[0]);
					if (controller.detailStore2.getCount() > 0) {
						sm.select(0);
					}
				}
			},
			
			'#AnswersTable': {
				selectionchange: function(sm, selected, eOpts){
					Ext.getCmp('deleteAnswers').setDisabled(selected==null || selected.length==0);
					return true;
				}
			}
			
			
		



		});
	},
	
	
		//загружаем словари
		loadDictionaries: function(){
		var controller=this;
		controller.EmpPosStore.load();
		controller.MaritalStatusStore.load();
		controller.CandidateResultStore.load();
		controller.ZodiacsStore.load();
		controller.QuestionsStore.load();
	},
	
	
    //инициируем сторки
	initStores: function(){
		var controller=this,
		CandidatesTable = Ext.getCmp('CandidatesTable');
		ExperienxesTable = Ext.getCmp('ExperienxesTable');
		

		
		AnswersTable = Ext.getCmp('AnswersTable');
		controller.masterStore = CandidatesTable.getStore();

		controller.detailStore = ExperienxesTable.getStore();
		controller.detailStore2 = AnswersTable.getStore();
		controller.EmpPosStore = CandidatesTable.columns[4].store;
		controller.ZodiacsStore = CandidatesTable.columns[6].store;
		controller.MaritalStatusStore = CandidatesTable.columns[7].store;
		controller.CandidateResultStore = CandidatesTable.columns[9].store;
		controller.QuestionsStore = AnswersTable.columns[0].store;
		controller.picturesStore=Ext.getCmp('PolygraphPicturesList1').getStore();
		Ext.getCmp('PolygraphCandidateLoadFoto').setDisabled(true);
		controller.loadDictionaries();
	},
	
	onLaunch: function(){
		var controller = this;
		
		controller.initStores();
	}
});
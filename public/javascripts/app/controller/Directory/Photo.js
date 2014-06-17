Ext.Loader.setPath('Ext.ux', '/ext/examples/ux');
Ext.require([
	'Ext.ux.DataView.LabelEditor'
]);

Ext.define('app.controller.Directory.Photo', {
    extend: 'Ext.app.Controller',
	stores: [
		'Directory.Photo.Photo',
    'Directory.Photo.PersonCombo'
	],
	
	models: [
		'valueModel',
    'app.model.Directory.Photo.PhotoModel'
	],
	
	views: [
		'Directory.Photo.Container',
    'Directory.Photo.FileWindow'
	],
	
	mainContainer: null,
	personStore:null,
  pictureStore:null,
  fileWindow: null,

  refreshPhoto: function() {
    var controller = this;
    
    person = Ext.getCmp('filterPerson').getValue()
    
    if (person!=null && person!='')
    {						
      controller.mainContainer.setLoading(false);
			controller.pictureStore.proxy.extraParams={
        master_id: person
      };
      controller.pictureStore.load(
        function(records, operation, success){
          if (success==true && records.length>0)
          {
            Ext.getCmp('deletePhoto').setDisabled(false);
            Ext.getCmp('addPhoto').setDisabled(true);                   
          
          } else {
            Ext.getCmp('deletePhoto').setDisabled(true);
            Ext.getCmp('addPhoto').setDisabled(false);                  
          }
          controller.mainContainer.setLoading(false);
          return true;
        }              
      );
    }     
  },
  
  init: function() {
    var controller = this;
    controller.mainContainer=Ext.create('app.view.Directory.Photo.Container');
    controller.fileWindow=Ext.create('app.view.Directory.Photo.FileWindow');
    
    controller.control({
      '#filterPerson': {
				change: function(combo, newValue, oldValue, eOpts){								
            controller.refreshPhoto();
				}
			},  
			'#addPhoto': {
				click: function(){
					controller.fileWindow.setTitle(
						"Добавление фото для сотрудника \"" + 
						Ext.getCmp('filterPerson').getDisplayValue() +
						"\"");
					controller.fileWindow.show();
				}
			},
			'#deletePhoto': {
				click: function(){
					controller.pictureStore.removeAt(0);
				}
			},
			'#savePhoto': {
				click: function(){
					controller.pictureStore.proxy.extraParams = {
						master_id: Ext.getCmp('filterPerson').getValue()
					};
					controller.pictureStore.sync({
						callback: function(batch){
							if(batch.exceptions.length>0){
								Ext.Msg.alert("Ошибка", batch.exceptions[0].getError().responseText);
							}
						}
					});
				}
			},
			'#refreshPhoto': {
				click: function(){
					controller.refreshPhoto();
				}
			},
      '#UnionPicturesList': {
				selectionchange: function(sm, selected, eOpts){
					var selectionPresent = (selected!=null && selected.length>0);
					
					Ext.getCmp('deletePicture').setDisabled(!selectionPresent);
				}
			},
			'#uploadFile': {
				click: function(button) {
					var form = button.up('form').getForm();
					if(form.isValid()){
						var masterId = Ext.getCmp('filterPerson').getValue();
						form.submit({
							url: '/directory/photo/upload_photo',
							params: {
								authenticity_token: window._token,
								master_id: masterId
							},
							waitMsg: 'Загрузка данных...',
							success: function(fp, o) {
								controller.refreshPhoto();
								controller.fileWindow.hide();
							},
							errors: function(fp, o){
								controller.fileWindow.hide();
								Ext.Msg.alert("Ошибка обработки файла", o.result.errors);
							}
						});
					}
				}
			}
    });
      
	},
	
  initStores: function(){
		var controller=this;
		
		controller.personStore=Ext.getCmp('filterPerson').getStore();
    controller.personStore.load();
    controller.pictureStore=Ext.getCmp('PersonPhoto').getStore();
    //controller.pictureStore=Ext.getCmp('directorySearchTable').columns[9].store;
	},
  
  onLaunch: function(){
		var controller = this;
		controller.initStores();
	}
});

	

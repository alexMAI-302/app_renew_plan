Ext.define('app.controller.sellPrice', {
    extend: 'Ext.app.Controller',
    
    views: [
		'app.view.sellPrice.Container'
	],
	stores: [
		'sellPrice.Partner',
		'sellPrice.SellPrices',
		'sellPrice.Goods',
		'sellPrice.DiscountReasons'
	],
	
	models: [
		'app.model.valueModel',
		'app.model.valueStrModel',
		'app.model.sellPrice.sellPriceModel',
		'app.model.sellPrice.goodsPriceModel'
	],
		
		
	loadSellPrices:	function(){
		var controller = this,		
		    ddateb = new Date(Ext.getCmp('startDate').getValue()),
		    ddatee = new Date(Ext.getCmp('endDate').getValue()),
		    partnerId = Ext.getCmp('partnerFilter').value,
		    count = 1

		if(partnerId == null) {
			Ext.Msg.alert('Ошибка', 'Задайте значение для поля "Партнер"');
			return;
		}
		
		controller.mainContainer.setLoading(true);

		function checkLoading(val) {
			if (val == 0) {
				controller.mainContainer.setLoading(false);
			}
		};

		controller.sellPriceStore.proxy.extraParams={
			partner_id: partnerId,
			ddateb: Ext.Date.format(ddateb, 'Y-m-d'),
			ddatee: Ext.Date.format(ddatee, 'Y-m-d'),
		};
		controller.sellPriceStore.load(function(records, operation, success){
			count--;
			
			if(success) 
				records.forEach(function(r) {
					r.setUpDiscount();
				});
			else {
				Ext.Msg.alert('Ошибка', operation.getError().responseText);
			}
			checkLoading(count);
		});
	},
	
	
	initStores: function() {
		var controller = this
		
		controller.sellPriceStore = controller.getSellPriceSellPricesStore();		
		controller.goodsStore     = controller.mainContainer.down("#column_goods_id").store;
		controller.reasonStore    = controller.mainContainer.down("#col_reason_id").store;
	},
	
	bindStores: function(){
		var controller=this;
	
		controller.mainContainer.reconfigure(controller.sellPriceStore);
	},
	
	loadDictionaries : function() {
		var controller = this, count = 1;

		controller.mainContainer.setLoading(true);
		function checkLoading(val) {
			if (val == 0) {
				controller.mainContainer.setLoading(false);
			}
		};

		controller.reasonStore.load(function(success) {
			count--;
			checkLoading(count);
		});
	},
		
	onLaunch: function(){
		var controller = this;
		
		controller.initStores();
		controller.loadDictionaries();
		controller.bindStores();
	},
	
	
	initComboBox: function(records) {		
		var controller = this,
		    colGoods   = controller.mainContainer.down("#column_goods_id").getEditor();
		    
        // Странный случай, когда records == ["a"]
        // Воспроизводится, когда отказывает в сохранение из-за валидации 
		if (records!=null && records.length == 1 && Ext.getClassName(records[0]) == "app.model.sellPrice.sellPriceModel") {
			var r = records[0];
			
			controller.goodsStore.removeAll();
				
			controller.goodsStore.add({
				goods_id:   r.get('goods_id'),
				goods_name: r.get('goods_name')
			});
				
			colGoods.bindStore(controller.goodsStore);
		}
	},
	
	
		
    init: function() {
    	var controller = this;
    	    
    	controller.mainContainer=Ext.create('app.view.sellPrice.Container');
    	
    	Ext.getCmp('refreshSellPrice').setDisabled(true);
    	
    	
    	var colGoods    = controller.mainContainer.down("#column_goods_id").getEditor(),
    	    colDiscount = controller.mainContainer.down("#column_discount").getEditor(),
    	    colNewPrice = controller.mainContainer.down("#col_new_price").getEditor();


    	//Events
    	Ext.getCmp('partnerFilter').addListener(
			"select",
			function(field, value, options ) {
				var partner_id = value[0].data.id;
				
				Ext.getCmp('refreshSellPrice').setDisabled(partner_id == null)
				Ext.getCmp('addSellPrice').setDisabled(partner_id == null)
				
				controller.mainContainer.down("#column_goods_id").getEditor().store.proxy.extraParams = {
					partner_id: partner_id
				};
				
				return true;
			}
		);
		
		Ext.getCmp('partnerFilter').addListener(
			"change",
			function(field, newValue, oldValue, options) {
				Ext.getCmp('refreshSellPrice').setDisabled(Ext.getCmp('partnerFilter').value==null);
				Ext.getCmp('addSellPrice').setDisabled(Ext.getCmp('partnerFilter').value==null);
				return true;
			}
		);

		colGoods.addListener(
			'select',
			function(field, value, options){
				var r = controller.mainContainer.getSelectionModel().getSelection()[0];
				
				r.set('discount',   0);
				r.set('price',      value[0].data.price);
				r.set('new_price',  value[0].data.price);
				r.set('goods_name', value[0].data.goods_name);
				
				return true;
			}
		);

		colDiscount.addListener(
			'change',
			function(t, newValue, oldValue, options){
				var r = controller.mainContainer.getSelectionModel().getSelection()[0];
				
				r.beginEdit();
				r.setUpNewPrice(newValue);
				r.endEdit(false);
				
				return true;
			}
		);

		colNewPrice.addListener(
			'change',
			function(t, newValue, oldValue, options){
				var r = controller.mainContainer.getSelectionModel().getSelection()[0];
				
				r.beginEdit();
				r.setUpDiscount(newValue);
				r.endEdit(false);
				
				return true;
			}
		);		
		
		
		controller.control({
			'#refreshSellPrice': {
				click: controller.loadSellPrices
			},
			'#addSellPrice': {
				click: function() {
					var sm = controller.mainContainer.getSelectionModel(),
					    store = controller.sellPriceStore,
					    index = store.indexOf(sm.getLastSelected()),
					    cellEditing = controller.mainContainer.getPlugin('celleditingSellPrice'),
					    model = Ext.ModelManager.create({
									partner_id	: Ext.getCmp('partnerFilter').value
								}, 
								'app.model.sellPrice.sellPriceModel');
			
					cellEditing.cancelEdit();
					store.insert(Math.max(index, 0), model);
					sm.select(model);
					cellEditing.startEdit(model, 0);

				}
			},
			'#deleteSellPrice': {
				click: function() {
					var sm = controller.mainContainer.getSelectionModel(),
					    store = controller.sellPriceStore,
					    index = store.indexOf(sm.getLastSelected()),
					    cellEditing = controller.mainContainer.getPlugin('celleditingSellPrice');

					if (index>=0) {
						cellEditing.cancelEdit();

						store.remove(sm.getSelection());

						if (store.getCount() > 0) {
							sm.select(Math.min(index, store.getCount() - 1))
						}
					}
				}
			},
			'#saveSellPrice': {
				click: function() {
					var ok = true;

					controller.sellPriceStore.each(function(record){
						var errors = record.validate();
						
						if(!errors.isValid()) {
							var errText = "Нельзя произвести сохранение по причине:<ul>";
							errors.items.forEach(function(e) {
								errText += "<li>" + e.message + "</li></br>";
							}); 
							errText += "</br>";
							
							Ext.Msg.alert('Ошибка', errText);
							
							controller.mainContainer.getSelectionModel().select(record);
							ok = false;
							
							return false;
						}
					});
					
					if(ok){
						if(controller.sellPriceStore.hasChanges()) {
							controller.mainContainer.setLoading(true);
							
							controller.sellPriceStore.proxy.extraParams={};
							
							controller.sellPriceStore.sync({
								success: function(batch, opt){
									controller.mainContainer.setLoading(false);
								},
								
								failure: function(batch, opt){
									if(batch.exceptions.length>0){
										Ext.Msg.alert("Ошибка", Ext.String.htmlEncode(batch.exceptions[0].getError().responseText));
									};
									controller.mainContainer.setLoading(false);
								}
							});
						};
					};
				}
			},
			'#cloneSellPrice': {
				click: function() {
					var sm = controller.mainContainer.getSelectionModel(),
					    store = controller.sellPriceStore,
					    index = store.indexOf(sm.getLastSelected()),
					    cellEditing = controller.mainContainer.getPlugin('celleditingSellPrice'),
					    selection = sm.getSelection()[0],
					    copy;
					
					if(!selection) {
            			Ext.Msg.alert('Ошибка клонирования', 'Надо выбрать строку для клонирования');
            			return;
        			} else {        				
        				copy = selection.copy();
        				copy.set('id',         null);
        				copy.set('discount',   0);
						copy.set('price',      0);
						copy.set('new_price',  0);
						copy.set('goods_id',   null);
						copy.set('goods_name', null);
        				copy.phantom=true;
        				
						store.insert(Math.max(index, 0), copy);
						sm.select(copy);
						cellEditing.startEdit(copy, 2);
					}
				}
			},
			'#SellPriceTable': {
				selectionchange: function(view, records, e) {
					var disabled=!records.length;
					
					Ext.getCmp('deleteSellPrice').setDisabled(disabled);
					
					this.initComboBox(records);
					
					return true;
				}
			}
		});
	}
});
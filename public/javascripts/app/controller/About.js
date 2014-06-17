Ext.define('app.controller.About', {
    extend: 'Ext.app.Controller',

 	init: function() {

 		var grid = new Ext.grid.property.Grid({
		    title: 'Версии',
		    width: 300,
		    renderTo: 'js_container',
		    source: {
		    	'Ruby': RORProperties.ruby,
		    	'Rails': RORProperties.rails,
		        'Ext js': Ext.getVersion().version
		    }
		});
 	}   
});
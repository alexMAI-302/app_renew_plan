Ext.define('app.view.movementDiff.MainContainer', {
    extend: 'Ext.container.Container',
	
	requires: ['app.view.movementDiff.diffs.Container'],
	
	id: 'MainContainer',

    layout: {
		type: 'anchor'
	},
	
	renderTo: 'js_container',
	border: 1,
	style: {borderColor:'#000000', borderStyle:'solid', borderWidth:'1px'},
	defaults: {
		labelWidth: 80,
		style: {
			padding: '10px'
		}
	},
	items: [
        { xtype: 'diffsContainer'}
    ]
});
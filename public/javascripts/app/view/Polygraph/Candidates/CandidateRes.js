Ext.define('app.view.Polygraph.CandidateRes', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.polygraph_candidate_res',
	id: 'Polygraph_CandidateRes',
	
	
	title: 'Личностные качества, особенности, проблемные качества',
	autoScroll: true,
	defaultType: 'textareafield',
	store: 'Polygraph.Candidates',
	
	bodyPadding: '5 5 0',
    layout: {
		type: 'anchor'
	},

	 defaults: {

		anchor: '100%'

},
	 
	items: [
	{
		
		name: 'personal_qualities',
		labelAlign: 'top',
		fieldLabel: 'личностные качества',
		id: 'personal_qualities',
		dataIndex: 'personal_qualities'
		
	},
	{
		
		name: 'features',
		labelAlign: 'top',
		fieldLabel: 'особенности',
		id: 'features',
		dataIndex: 'features'
		
	},
	{
		
		name: 'problematic_quality',
		labelAlign: 'top',
		fieldLabel: 'проблемные качества',
		id: 'problematic_quality',
		dataIndex: 'problematic_quality'
		
	}



	]
    });
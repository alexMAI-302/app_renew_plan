Ext.define('app.view.Polygraph.Candidates.Container', {
    extend: 'Ext.panel.Panel',
	requires: [
		'app.view.Polygraph.Candidates.Grid',
		'app.view.Polygraph.Candidates.Grid_Experienxes',
		'app.view.Polygraph.Candidates.Grid_Answers',
		'app.view.Polygraph.Candidates.CandidateFoto',
		'app.view.Polygraph.Candidates.CandidateRes'
		
	
	],
	layout: {
		type: 'border'
	},
	
	title: 'Новый сотрудник',

        items: 
		[
			{
			xtype: 'toolbar',
			region: 'north',
			items:  [
						{
							id: 'refreshPolygraphCandidate',
							icon : '/ext/resources/themes/images/default/grid/refresh.gif',
							tooltip: 'Обновить'
						},
						{
							id: 'savePolygraphCandidate',
							icon: '/images/save.png',
							tooltip: 'Сохранить'
						},
						{
							xtype	: 'button',
							text    : 'Загрузить фото',
							id		: 'PolygraphCandidateLoadFoto',
							rowspan	: 2
						}
					]
			},
           {
			xtype: 'candidates_Grid',
			region: 'center',
			split: true,
			flex: 1
			},
			{
				xtype: 'polygraph_candidate_foto',
				region: 'east',

				width: 200,
			    split:true,             // установка возможности изменения размеров области.
				collapsible: true      // указываем что область может быть схлопнута
			},
			{
			
	        region: 'south',
	        xtype: 'panel',
			flex: 1,
			split:true,             // установка возможности изменения размеров области.
			layout: 'accordion',

	        items: 
			[
			
			{
				xtype: 'candidates_grid_Experienxes'
				
			},
			{
				xtype: 'candidates_grid_Answers'
				
			},
			{
				xtype: 'polygraph_candidate_res'
				
			}

			

			
	
			
			]
	      }
			

        ]
	

});
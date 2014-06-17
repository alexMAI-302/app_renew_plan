Ext.define('app.store.Polygraph.CandidatePictures', {
	extend: 'Ext.data.Store',
	model: 'app.model.Polygraph.PictureModel',
	proxy: {
		type: 'rest',
		url : '/polygraph/get_candidate_pictures',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});
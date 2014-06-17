Ext.define('app.store.Directory.Shared.SiteCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/shared/siteCombo',
		reader: {
			type: 'json'
		}
	}
});
Ext.define("app.store.lib.HasChangesMixin", {
	hasChanges: function() {
		var me = this;

		return (me.getNewRecords().length > 0) ||
		       (me.getUpdatedRecords().length > 0) ||
		       (me.getRemovedRecords().length > 0);
    }
});
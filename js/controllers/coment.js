App.MatchController = Ember.ObjectController.extend({
editMode: false,
edit: function(){
        this.setProperties({
            'editMode': true,
        });
        this.transitionToRoute('matchedit');
    }
});

App.MatchsCreateController = Ember.ObjectController.extend({
    needs: ['match'],

    actions: {
        save: function () {
            this.get('model').set('comment', new Comment());
            var newComment = this.store.createRecord('comment', this.get('comment'));
            newComment.save();
			this.transitionToRoute('comment', newComment);
        }
    }
});

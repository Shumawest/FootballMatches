Matches.Router.map(function() {
  this.resource("matches", { path: '/' });
  this.resource("match", { path: "/match/:match_id" });
  this.resource("addComment", { path: "/match/:match_id/create" });
});
Matches.MatchesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('match');
  }
});
Matches.MatchRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('match', params.match_id);
  },
});
App.AddCommentAndEditRoute = Ember.Route.extend({
activate: function(){
this.controllerFor('comment').setProperties({
'editMode': true
});
},

});
App.AddCommentsRoute = App.AddAndEditCommentRoute.extend({
model: function(){
return Em.Object.create({});
},

renderTemplate: function(){
this.render('addcomments', {
controller: 'addComment'
});
}
});

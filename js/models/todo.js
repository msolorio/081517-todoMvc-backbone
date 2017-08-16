var app = app || {};

app.Todo = Backbone.Model.extend({

  // default attributes ensure that each todo created has title and completed keys
  defaults: {
    title: '',
    completed: false
  },

  // todo model has toggle method that allows Todo items completion status can be set and
  // persisted in our data store
  toggle: function() {
    this.save({
      completed: !this.get('completed');
    });
  }
});

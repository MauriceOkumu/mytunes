// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
    // this.on('add', this.);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    //mvp
    this.trigger('ended', this);
    
  }
});

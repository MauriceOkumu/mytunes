// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
    console.log(this.get('add'));
    this.playFirst();

  },
                                       
  playFirst: function() {                                                     

  },

  render: function() {

  }
});
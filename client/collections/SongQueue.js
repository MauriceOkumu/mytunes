// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    // this.playFirst();
    this.on('play', this.play, this);
    this.on('ended', this.dequeue, this);
  },
                                       
  playFirst: function() {
    this.at(0).play();
  },
  enqueue: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },
  dequeue: function(songPlaying) {
    this.shift();
    if (this.at(0)) {
      this.playFirst();
    }

  }
});
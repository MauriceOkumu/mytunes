// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',
  initialize: function() {
    this.on('add remove', this.render(), this);
    // this.render();
  },

  render: function() {
    // return this.collection.forEach(function(song) {
      // var songInQue = new SongQueueEntryView({model: song});
      // return this.$el.append(songInQue.render());
    // });


    return this.$el.html('<div>new SongQueue</div>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      }));

    //calling this.collection.forEach(functionSongQueueEntryView.render() forEach in collection
  

  // render: function() {

  }

});

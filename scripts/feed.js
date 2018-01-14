function parseRSS(url, container) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      console.log(data.responseData.feed);
      var latest = data.responseData.feed.entries[0];
      
      $('#lastfm-song').html(latest.title);
    }
  });
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(function(){
  // running custom RSS functions
  parseRSS('//ws.audioscrobbler.com/1.0/user/prakhar625/recenttracks.rss', '#lastfm');
});
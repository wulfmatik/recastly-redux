import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  var type = 'HANDLE_VIDEO_SEARCH';

  return ({key, query, max = 5}, callback = (videos) => {
    changeVideoList(videos);
    changeVideo(videos[0]);
  }) => {
    $.get('https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      key: key,
      q: query,
      maxResults: max,
      type: 'video',
      videoEmbeddable: 'true'
    })
      .done(({items}) => {
        if (callback) {
          callback(items);
        }
      })
      .fail(({responseJSON}) => {
        responseJSON.error.errors.forEach((err) =>
          console.error(err)
        );
      });

  };
};

export default handleVideoSearch;

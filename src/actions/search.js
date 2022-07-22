import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  var type = 'HANDLE_VIDEO_SEARCH';
  console.log('Q', q);
  // var max = 5;
  // return (searchYoutube({YOUTUBE_API_KEY, q, max}, callback = (videos) => {
  //   changeVideoList(videos);
  //   changeVideo(videos[0]);
  // }));
  return ({key = YOUTUBE_API_KEY, query = q, max = 5}, callback = (videos) => {
    changeVideoList(videos);
    changeVideo(videos[0]);
  }) => {
    console.log('QUERY', query, 'KEY', key, 'MAX', max);
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

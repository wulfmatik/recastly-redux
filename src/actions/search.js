import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  var callback = (videos) => {
    changeVideoList(videos);
    changeVideo(videos[0]);
  };

  searchYouTube({YOUTUBE_API_KEY, q}, callback);
};

export default handleVideoSearch;

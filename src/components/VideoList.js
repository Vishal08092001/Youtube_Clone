import PlayButton from './PlayButton';
import Video from './Video';
import useVideos from '../hooks/Videos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useVideoDispatch from '../hooks/VideoDispatch';

function VideoList({ editVideo }) {

  const url = "https://my.api.mockaroo.com/users.json?key=7078a260";



  const videos = useVideos();
  const dispatch=useVideoDispatch();
 

  async function handleClick() {
    const res = await axios.get(url);
    console.log('i want sex', res.data);
    dispatch({type:'LOAD',payload:res.data});
  }


useEffect(()=>{
handleClick();
},[dispatch])

  return (
    <>
      {
        videos.map((video) => <Video
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >

          <PlayButton
            onPlay={() => console.log('play ')}
            onPause={() => console.log('pause')}
          >
            {video.title}

          </PlayButton>


        </Video>
        )

      }
      {/* <button onClick={handleClick}>Get Video</button> */}
    </>
  )

}
export default VideoList;
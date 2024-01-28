import './App.css'
import { useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';



function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer,[]);


  function videoReducer(videos, action) {

    switch (action.type) {

      case 'LOAD':
        return action.payload;

      case 'ADD':
        return [
          ...videos,
          {
            ...action.payload,
            id: videos.length + 1
          }
        ]

      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)

      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;

      default:
        return videos;

    }
  }


  function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id));

  }



  return (
    
    <VideosContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
        <div className='App'>
          
          <AddVideo editableVideo={editableVideo}></AddVideo>
          <VideoList editVideo={editVideo} ></VideoList>
        </div>
      </VideoDispatchContext.Provider>
    </VideosContext.Provider>
    
  )
};


export default App;
import useVideoDispatch from '../hooks/VideoDispatch';
import './AddVideo.css';
import { useRef,useEffect, useState } from 'react';

const intial = {
  channel: "Kingsman",
  time: "1 year",
  verified: true,
  title: '',
  views: ""
}

function AddVideo({ editableVideo }) {

  const [video, setVideo] = useState(intial);
  const dispatch = useVideoDispatch();
  const inputRef=useRef(null);


  function handleChange(e) {

    setVideo({
      ...video,
      [e.target.name]: e.target.value
    })

  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editableVideo) {
      dispatch({ type: 'UPDATE', payload: video });
    }
    else {

      dispatch({ type: 'ADD', payload: video });
    }
    setVideo(intial);
  }


  useEffect(() => {
    if (editableVideo) {

      setVideo(editableVideo)
    }

    inputRef.current.value="title de na biddu";
  }, [editableVideo]);


  return (
    <>
      <form>
        <input ref={inputRef} type="text" onChange={handleChange} name='title' placeholder="title" value={video.title}></input>
        <input type="text" onChange={handleChange} name='views' placeholder="views" value={video.views}></input>
        <button

          onClick={handleSubmit}

        >
          {editableVideo ? 'Edit' : 'Add'}Video
        </button>
      </form>
    </>
  )

}

export default AddVideo;
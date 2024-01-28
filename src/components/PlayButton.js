import { useState } from 'react';
import './PlayButton.css'

function PlayButton({message,children,onPlay,onPause})
{
   const [playing,setPlaying]=useState(false);

 function handleClick(){
//   e.stopPropogation();

   if(playing){
    
     onPause();
   }
   else
   {
   
    onPlay();
   }

   setPlaying(playing=>!playing);
  }

    return(

        <button onClick={handleClick}>{children} : {playing ?'>' : '||' } </button>
    )
}

export default PlayButton;
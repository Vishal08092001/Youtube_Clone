import './Video.css';
import useVideoDispatch from '../hooks/VideoDispatch';
//  import { useEffect } from 'react';

export default function Video({ title, channel, views, time, verified, id, children, editVideo }) {
    const dispatch = useVideoDispatch();

    return (
        <>
            <div className="container">
                <button className='close' onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
                <button className='edit' onClick={() => editVideo(id)}>edit</button>
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/640/480 `} alt="missing" />
                </div>
                <div className="title">{title}</div>

                <div className="channel">{channel} {verified && '✅'} </div>

                <div className="views">
                    {views} view <span>.</span>{time}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}


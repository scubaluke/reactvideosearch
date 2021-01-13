import './VideoItem.css'
import React from 'react'

export default function VideoItem({ video, onVideoSelect }) {
    return (
        <div onClick={() => onVideoSelect(video)} className="Video-item item" >
            <img className="ui avitar image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">
                {video.snippet.title}
                </div>
                <div className="description">
                  <strong>Description:</strong> {video.snippet.description}
                </div>
            </div>
            
        </div>
    )
}



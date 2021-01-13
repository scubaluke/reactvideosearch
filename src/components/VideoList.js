import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({ videos, onVideoSelect }) {
    const renderedList = videos.map(video => {
     return   <VideoItem 
                    onVideoSelect={onVideoSelect} 
                    key={video.id.videoId} 
                    video={video} 
                    />
    })
    return (
        <div className="ui relaxed divided list" >
            {renderedList}
        </div>
    )
}


// import React, { Component } from 'react'
// import VideoItem from './VideoItem'

// export default class VideoList extends Component {
//     render(props) {
//         const videosToDisplay = this.props.map(video => <VideoItem data={video} />)
//         return (
//             <div>
//                 {videosToDisplay}
//             </div>
//         )
//     }
// }

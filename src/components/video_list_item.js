import React from "react";

// const VideoListItem = (props) => {
//     const video = props.video;

//     return <li>Video</li>
// };
// The props argument and the first const statement together is equal to below ES6 syntax
// 
/* The props argument with JSON object format, 
* tells that there's a 'video' property from props which is got from the argument
*/
const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;

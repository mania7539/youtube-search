import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
    /* The 'props' in the functional component is an argument */
    // const videos = props.videos;
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });
    /* Create the layout result first, and then assign it to a const to make it functional */

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
    // recommend to stay away from for loop as much as possible to avoid typo and mistakes
    // instead try to using built-in iterator, like the 'map' iterator
};

export default VideoList;

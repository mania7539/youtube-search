import React from "react";

const VideoList = (props) => {
    /* The 'props' in the functional component is an argument */
    const videos = props.videos;

    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;

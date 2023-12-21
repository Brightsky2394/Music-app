// import React from "react";

// import "./TrackList.css";

// import Track from "../Track/Track";

// class TrackList extends React.Component {
//     render() {
//         return (
//             <div className="TrackList">
//                 {this.props.tracks.map(track => {
//                     return (
//                         <Track 
//                         track = {track}
//                         key = {track.id}
//                         onAdd = {this.props.onAdd}
//                         isRemoval = {this.props.isRemoval}
//                         onRemove = {this.props.onRemove}
//                         />
//                     );
//                 })}
//             </div>
//         )
//     }
// }

// export default TrackList;

import React from "react";
<<<<<<< HEAD
import "./TrackList.css";
=======

import "./TrackList.css"
>>>>>>> 403289f9240adbd553a051781f627bfbd2f851b8
import Track from "../Track/Track";

class TrackList extends React.Component {
    render() {
        console.log("props.tracks: ", this.props.tracks)
        return (
            <div className="TrackList">
<<<<<<< HEAD
                {this.props.tracks && this.props.tracks.map(track => {
                    return (
                        <Track
                            key={track.id}
                            track={track}
                            onAdd={this.props.onAdd}
                            isRemoval={this.props.isRemoval}
                            onRemove={this.props.onRemove}
=======
                {this.props.tracks.map(track => {
                        return(
                        <Track 
                        track = {track}
                        key = {track.id}
                        onAdd = {this.props.onAdd}
                        isRemoval = {this.props.isRemoval}
                        onRemove = {this.props.onRemove}
>>>>>>> 403289f9240adbd553a051781f627bfbd2f851b8
                        />
                        )
                    
                })
            }
            </div>
        );  
    }
}


TrackList.defaultProps = {
    tracks: [] // Set a default empty array if tracks is not provided
}

export default TrackList;
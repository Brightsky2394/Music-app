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
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks && this.props.tracks.map(track => {
                    return (
                        <Track
                            key={track.id}
                            track={track}
                            onAdd={this.props.onAdd}
                            isRemoval={this.props.isRemoval}
                            onRemove={this.props.onRemove}
                        />
                    );
                })}
            </div>
        );  
    }
}

export default TrackList;
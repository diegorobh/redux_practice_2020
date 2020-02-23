import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {

    renderList(){
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                        onClick={()=>this.props.selectSong(song)}
                        >Selected
                        </button>
                    </div>
            <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        return (
        <div className="ui divided list">{this.renderList()}</div>
        );
    };
}

//name not mandatory, it's a convention
const mapStateToProps = (state)=>{
    console.log(state);
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, {
    //argument for action creators, optional
    //this is to use this function with dispatch
    selectSong:selectSong
})(SongList);
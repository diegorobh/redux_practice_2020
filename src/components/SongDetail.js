import React from "react";
import { connect } from "react-redux";

const SongDetail = (props)=>{
    console.log("state from SongDetail", props.selectedSong);
    return (
    <div>{(props.selectedSong) ? props.selectedSong.title : "select one song"} </div>
    );
};

const mapStateToProps = (state)=>{
    console.log("state from SongDetail", state);
    return {
        selectedSong:state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);
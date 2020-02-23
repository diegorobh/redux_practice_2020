import { combineReducers } from "redux";

const songsReducer = ()=>{
    return [
        {title:"1979", duration:"2:30"},
        {title:"Wannabe", duration:"1:50"},
        {title:"I Will Always Love You", duration:"3:10"},
        {title:"My Heart Will Go On", duration:"2:50"}
    ]
}

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
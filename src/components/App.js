import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

//In this example all state it's going to be on redux
//that's why this is not a class based component

const App = () => {
    return (
    <div className="ui container grid">
        <div className="ui row">
            <div className="column eight wide">
                <SongList />
            </div>
            <div className="column eight wide">
                <SongDetail />
            </div>
        </div>
    </div>
    )
};

export default App;
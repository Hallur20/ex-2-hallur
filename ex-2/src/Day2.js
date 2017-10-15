import React from 'react';

class Day2 extends React.Component {

    constructor() {
        super();
        this.state = {
            "pictures": [
                "image/img1.png",
                "image/img2.png",
                "image/img3.png",
                "image/img4.png",
                "image/img5.png",
            ]
        }
        this.getPictures = this.getPictures.bind(this);

    }
    getPictures() {
        var rows = [];
        for (var i = 0; i < this.state.pictures.length; i++){
            rows.push(<img src={this.state.pictures[i]}/>)
        }
        return rows;
    }

    render() {
        return (<div>{this.getPictures()}</div>)
    }
}

export default Day2;
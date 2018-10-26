import React, { Component } from 'react';

export default class Boxes extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
            ]
        }
    }

    render() {
        // let wid = document.getElementsByClassName('boxes').offsetWidth;
        // console.log(wid)
        return (
            <main>
                {this.state.items.map(ele => <div key={ele} className="boxes"><p>{ele}</p></div>)}
            </main>
        )
    }
}
import React from 'react'

export default class DigitalClicker extends React.Component {

    constructor() {
        super();

        this.state = { 
            timesClicked: 0
        };
    }

    handleClick = () => {
        // let newCount = this.state.timesClicked + 1
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
    )}
}

// export default DigitalClicker

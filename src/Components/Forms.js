import React, { Component } from 'react'

export default class Forms extends Component {
    render() {
        return (
            <div>
                   <form onSubmit={this.props.getWeather}>
                         <input type='text' name='city' placeholder='city...'/>
                         <input type='text' name='country' placeholder='country...'/>
                         <button>get weather</button>
                   </form>
            </div>
        )
    }
}

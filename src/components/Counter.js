import React, { Component } from 'react';
import { connect } from "react-redux";
import  { increment, decrement, reset } from '../actions/counterAction';

class Counter extends Component {

    increment = () => {
        console.log("increment method called on click");
        const { dispatch } = this.props;
        dispatch(increment());
        }


    decrement = () => {
        const { dispatch } = this.props;
        dispatch( decrement());
    }

    reset = () => {
        const { dispatch } = this.props;
        dispatch (reset());
    }

    render() {
        const { count } = this.props;
        return(
            <div style={{textAlign: "center",margin: "20px"}}>
                <span>Counter : {count}</span>
                <div style={{textAlign: "center"}}>
                    <button type="button" onClick={this.increment}>Increment</button>
                    <button type="button" onClick={this.decrement}>Decrement</button>
                    <button type="button" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect( mapStateToProps, null )(Counter);
import React, { Component } from 'react';
import Counter from './counter';
import "./counters.css"

class Counters extends Component {

    handleReset = () =>
    {
        const counters = this.props.counters.map(c=>
            {
                c.value = 0;
                return c;
            });

        this.setState({counters});
    }

    render() { 
        return (
            
            <div>
                <div id='resetBtnContainer'>
                    <button id='resetBtn' onClick={this.handleReset}>RES</button>
                </div>
                <div id='addBtnContainer'>
                    <button id='addBtn' onClick={this.props.onAdd}>ADD</button>
                </div>
                {this.props.counters.map(
                    counter =>
                    <Counter
                        state={this.props.state}
                        key={counter.id}
                        counter={counter}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        selected={true}
                    >
                        <div className='counterHeader'>Counter {counter.id}</div>
                    </Counter>
                )}
            </div>
            
        );
    }
}
 
export default Counters;
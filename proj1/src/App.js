import React, { Component } from 'react';


import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {

    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0},
        ],
        nrOfElements: 0
    }

    constructor()
    {
        super();
        this.state.nrOfElements = this.state.counters.length;
    }

    handleIncrement = counter =>
    {
        const counters = this.state.counters;
        const index = counters.indexOf(counter);

        counters[index] = counter;
        counters[index].value++;

        this.setState({counters});
    }

    handleDecrement = counter =>
    {
        const counters = this.state.counters.map(c =>
            {
                if (c.id == counter.id) c.value--;
                if (c.value < 0) c.value = 0;
                    
                return c;
            });

        this.setState({counters});
    }



    handleDelete = counterId =>
    {
        let state = this.state;
        state.counters = state.counters.filter(c => c.id !== counterId);
        state.nrOfElements = state.counters.length;

        this.setState({state});
    }

    handleAdd = () =>
    {
        let state = this.state;

        for(let i = 1; i < state.counters.length+2; i++)
        {
            if (!state.counters.filter(c => c.id === i).length)
            {
                state.counters.push({id: i, value: 0});
                break; 
            }

        }
        state.nrOfElements = state.counters.length;

        this.setState({state});
    }

    render() { 
        return (
            <React.Fragment>
                <NavBar
                    state={this.state}
                />
                <Counters 
                    state={this.state}
                    counters={this.state.counters}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onAdd={this.handleAdd}
                    selected={true}
                />
            </React.Fragment>
        );
    }
}
 
export default App;
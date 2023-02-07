import React, { Component } from 'react';
import "./counter.css"

class Counter extends Component {

    valContainerGetStyle() {
        let style;
        let warn_rgb = [240,170,50];
        let info_rgb = [0,130,0];

        if (this.props.counter.value === 0)
            style = { backgroundColor: "rgb("+warn_rgb.join()+")", outline: "5px solid black" }
        else
        {
            info_rgb[1] += Math.floor(this.props.counter.value/10)*10;

            if(info_rgb[1] > 180) info_rgb[1] = 180;

            style = { backgroundColor: "rgb("+info_rgb.join()+")", outline: "5px solid yellowgreen" };
        }

        return style;
    }

    valContainerGetVal() {
        return this.props.counter.value === 0 ? "ZERO" : this.props.counter.value;
    }

    renderTags(){
        return (
            <div className="counterContainer">
                {this.props.children}
                <div className="btnsContainer">
                    <div className="valContainer" style={this.valContainerGetStyle()}>
                        {this.valContainerGetVal()}
                    </div>
                    <div className='btnContainer'>
                        <div className='btnBoarder'>
                            <button className="btnCounter" onClick={ () => this.props.onDecrement(this.props.counter)}>DEC</button>
                        </div>
                    </div>
                    <div className='btnContainer'>
                        <div className='btnBoarder'>
                            <button className="btnCounter" onClick={ () => this.props.onIncrement(this.props.counter)}>INC</button>
                        </div>
                    </div>
                    <div className='btnContainer'>
                        <div className='btnBoarder'>
                            <button className="btnCounter" onClick={ () => this.props.onDelete(this.props.counter.id)}>DEL</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    render() { 
        return (
            <div>{this.renderTags()}</div>
        );
    }
}
 
export default Counter;
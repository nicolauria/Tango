import {initWeb, CanvasState} from './circles';
import React from 'react';
import Modal from '../modals/modal';
import './web_chart.css'

class WebChart extends React.Component{

    componentDidMount(){
        let a = this.myCanvas
        // initWeb(this.props.project)
        initWeb();
    }



    render(){
        return(
            <div className="project-show-page">
                <Modal />
                <div className="left-side-bar">
                    <h1>Left Component Here</h1>
                </div>
                <canvas className="web-chart" id="canvas_field" ref={el => this.myCanvas = el} width="632" height="1000"></canvas>
                

            </div>
        )
    }
}

export default WebChart;
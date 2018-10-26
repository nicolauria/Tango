import {initWeb, CanvasState} from './circles';
import React from 'react';
import Modal from '../modals/modal';

class WebChart extends React.Component{

    componentDidMount(){
        // initWeb(this.props.project)
        
    }

    render(){
        return(
            <div className="top-web-page">
                <Modal />
                <div className="left-side-bar">
                    <h1>Left Component Here</h1>
                </div>
                <div className="canvas_field">

                </div>
            </div>
        )
    }
}
import React from 'react';
import './web_canvas.scss'


import circles from './circles';


class WebCanvas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            valid: false,
            shapes: [],
            dragging: false,
            selection: null,
            dragxaxis: 0,
            dragyaxis: 0,
            ctx: ''
        }

        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
        this.handleClick = this.handleClick.bind(this)
        //     width: 
        //     height: 

        // }
        // might need state to keep track of position of tasks 
    }

    componentDidMount(){
        let canvas = document.getElementById('thechosenone');
        let theCtx = canvas.getContext('2d')
        return this.setState({ctx: theCtx, shapes: this.props.project.tasks}, this.drawCircle(theCtx));
        // this.setState({proj})
    }

    handleMouseUp(e){
        console.log('up')

        return this.setState({dragging: false})
    }

    handleMouseMove(e){
        console.log('move')
        if (this.state.dragging) {
            let myMouse = this.getMouse(e)
            let mx = myMouse.x;
            let my = myMouse.y;
            this.state.state.selection.x = mx - this.dragxaxis; 
            this.state.selection.y = my - this.dragyaxis; 
            this.state.valid = false;
        }
    }

    // let mouse = this.getMouse();
    // add open modal to look at infor about current shape in the iterative loop
    handleClick(e) {
        // debugger;
        console.log('clickedbicth')
        let myMouse = this.getMouse(e)
        let mx = myMouse.x;
        let my= myMouse.y;
        let shapes = this.state.shapes
        let l = shapes.length 
        for (let i = l-1; i >= 0; i--){
            if (shapes[i].contains(mx, my)){
                let mySel = shapes[i]
                this.state.dragxaxis = mx - mySel.x; 
                this.state.dragyaxis = my - mySel.y;
                this.state.dragging = true;
                this.state.selection = mySel; 
                this.state.valid = false;
                return;
            };
        }
            if (this.state.selection){
                this.state.selection = null;
                this.state.valid = false;
            };
    };

    getMouse(e){
        let mx;
        let my;
        let offSetX = 0;
        let offSetY = 0;

        offSetX = this.offsetTop
        offSetY = this.offsetLeft
        mx = e.pageX - offSetX
        my = e.pageY - offSetY
        return {x: mx, y: my}
    }

    addShapeToArr(obj) {
        let shapeArr = this.state.shapes
        shapeArr.push(obj)
        this.state.valid = false;
        return this.setState({shapes: shapeArr});
    };

    clear() {
        this.state.ctx.clearRect(0,0, this.width, this.height)
    }

    draw(){
        if (!this.state.valid){
            let ctx = this.state.ctx
            this.clear();
            let l = this.state.shapes.length
            for(let i = 0; i < l; i++){
                let shape = this.state.shapes[i];
                if ((shape.r + shape.x) > this.width || (shape.y + shape.r) > this.height || shape.y - shape.r < 0 || shape.x - shape.r < 0) continue;
                this.state.shapes[i].drawCircle(ctx)
            }
            if (this.state.selection != null) {
                ctx.strokeStyle = this.state.selectionColor
                ctx.lineWidth = this.state.selectionWidth
                let mySel = this.state.selection
                ctx.arc(mySel.x, mySel.y, mySel.r, mySel.sAngle, mySel.eAngle)
            }
            return this.setState(({valid: true}))
        }
    }

    // needs to be in a different function maybe circles
    // drawCircle(ctx){
    //     let x = 100, y = 100, r = 25, sAngle = 0, eAngle = 2 * Math.PI, fill = 'red'
    //     ctx.beginPath()
    //     ctx.fillStyle = fill;
    //     ctx.arc(x, y, r, sAngle, eAngle, false)
    //     ctx.closePath()
    //     ctx.fill();
    // }

    // needs to be in a different function
    contains(mx, my) {
        return (Math.sqrt((mx - this.x)*(mx - this.x) + (my - this.y)*(my - this.y)) < this.r);
    }


    // right click would be onMouseDown then assign an argument to handle it
    render(){ 
        debugger;
        return(
            <canvas id="thechosenone" 
            ref={el => this.myCanvas = el} 
            width="771" height="1000"
            onMouseDown={this.handleClick}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
            >
            </canvas>
        )
    }

}

export default WebCanvas;
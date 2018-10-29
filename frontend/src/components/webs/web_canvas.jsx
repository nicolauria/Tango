import React from 'react';
import './web_canvas.scss'
import {merge} from 'lodash';

import {Circle, drawCirle} from './circles';


class WebCanvas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            valid: false,
            shapes: [],
            position: {},
            dragging: false,
            selection: null,
            dragxaxis: 0,
            dragyaxis: 0,
            ctx: '',
        }

        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.position = {};
        this.interval();

        // this.handleDoubleClick = this.handleDoubleClick.bind(this)
        //     width: 
        //     height: 

        // }
        // might need state to keep track of position of tasks 
    }

    componentWillMount(){
        this.props.fetchProject(this.props.projectId);
    }

    interval(){
        setInterval(() => this.draw(), 30)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    // handleDoubleClick(){

    // }

    initShapes(){
        // debugger
        let taskArr = this.props.project.tasks
        taskArr.map ( (task,idx) => {
            if (idx === 0) {
                this.addShapeToArr(new Circle(
                    300,
                    300,
                    25,
                    'green',
                    task._id,
                    task.preReqs
                    ));
            } else if (idx === taskArr.length - 1){
                this.addShapeToArr(new Circle(
                    300,
                    700,
                    25,
                    'orange',
                    task._id,
                    task.preReqs
                    ))
            } else {
                this.addShapeToArr(new Circle(
                    Math.floor(Math.random() * 700),
                    Math.floor(Math.random() * 1000),
                    25,
                    'red',
                    task._id,
                    task.preReqs
                    ))
            }
        })
    }

    handleMouseUp(e){
        console.log('up')
        this.setState({dragging: false})
    }

    handleMouseMove(e){
        console.log('move')
        if (this.state.dragging) {
            let myMouse = this.getMouse(e)
            let mx = myMouse.x;
            let my = myMouse.y;
            let newSelCord = this.state.selection
            newSelCord.x = mx - this.state.dragxaxis; 
            newSelCord.y = my - this.state.dragyaxis; 

            this.setState({valid: false, selection: newSelCord})
        }
    }

    // let mouse = this.getMouse();
    // add open modal to look at infor about current shape in the iterative loop
    handleClick(e) {
        let myMouse = this.getMouse(e)
        let mx = myMouse.x;
        let my= myMouse.y;
        console.log(`down x: ${mx} y: ${my} `)
        let shapes = this.state.shapes
        let l = shapes.length 
        for (let i = l-1; i >= 0; i--){
            if (shapes[i].contains(mx, my)){
                let mySel = shapes[i]
                this.setState({
                    dragxaxis: mx - mySel.x,
                    dragyaxis: my - mySel.y,
                    dragging: true,
                    selection: mySel,
                    valid: false
                })
                // this.state.dragxaxis = mx - mySel.x; 
                // this.state.dragyaxis = my - mySel.y;
                // this.state.dragging = true;
                // this.state.selection = mySel; 
                // this.state.valid = false;
                return;
            };
        }
        if (this.state.selection){
            this.setState({selection: null, valid: false})
            // this.state.selection = null;
            // this.state.valid = false;
        };
    };

    getMouse(e){
        let mx;
        let my;
        let offSetX = 0;
        let offSetY = 0;
        let canvas = document.getElementById('thechosenone')
        offSetY = canvas.offsetTop
        offSetX = canvas.offsetLeft
        mx = e.pageX - offSetX
        my = e.pageY - offSetY
        return {x: mx, y: my}
    }

    componentDidMount() {
        let canvas = document.getElementById('thechosenone');
        this.ctx = canvas.getContext('2d');
        this.initShapes();
        console.log(this.position);
    }

    addShapeToArr(obj) {
        console.log('added shape');
        let shapeArr = this.state.shapes
        shapeArr.push(obj)
        this.position[obj.taskId] = [obj.x, obj.y];
        let posArr = merge({}, this.position, {[obj.taskId]: [obj.x, obj.y]})
        // this.setState({valid: false})
        // debugger
        this.setState({
            valid: false,
            shapes: shapeArr
        });
        console.log(`${this.state.valid}`)
    };

    clear() {
        // debugger
        this.ctx.clearRect(0,0, 771, 1000)
    }
    
    drawLines(currentTaskId, dependencyTaskId){
        let position = this.position
        debugger 
        if (position.hasOwnProperty(`${dependencyTaskId}`) && position.hasOwnProperty(`${currentTaskId}`)) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.position[currentTaskId[0]], this.position[currentTaskId[1]]);
            this.ctx.lineTo(this.position[dependencyTaskId[0]], this.position[dependencyTaskId[1]]);
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle = 'red'
            this.ctx.stroke();
        }
    }

    // drawLinks(){

    // }

    draw(){
        // debugger
        let lines = false;
        if (!this.state.valid){
            // debugger
            let ctx = this.ctx
            this.clear();
            let l = this.state.shapes.length
            for(let i = 0; i < l; i++){
                let shape = this.state.shapes[i];
                if ((shape.r + shape.x) > this.width || (shape.y + shape.r) > this.height || shape.y - shape.r < 0 || shape.x - shape.r < 0) continue;
                this.state.shapes[i].drawCircle(ctx);
                for (let j = 0; j < shape.preReqs.length; j++){
                    this.drawLines(shape.taskId, shape.preReqs[j])
                    if (j === shape.preReqs.length -1){
                        lines = false
                    }
                }
            }
            
            if (this.state.selection != null) {
                // debugger
                ctx.strokeStyle = this.state.selectionColor
                ctx.lineWidth = this.state.selectionWidth
                let mySel = this.state.selection
                ctx.arc(mySel.x, mySel.y, mySel.r, mySel.sAngle, mySel.eAngle)
            }

            if (!this.state.valid && lines){
                let ctx = this.ctx
                let l = this.state.shapes.length
                for(let i = 0; i < l; i++){
                    let shape = this.state.shapes[i];
                    if ((shape.r + shape.x) > this.width || (shape.y + shape.r) > this.height || shape.y - shape.r < 0 || shape.x - shape.r < 0) continue;
                    for (let j = 0; j < shape.preReqs.length; j++){
                        this.drawLines(shape.taskId, shape.preReqs[j])
                        if (j === shape.preReqs.length -1){
                            lines = false
                        }
                    }
                }
            }

            this.setState(({valid: true}))
        }
    }



    // right click would be onMouseDown then assign an argument to handle it
    render(){ 
        // debugger;
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
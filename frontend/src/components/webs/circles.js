



//the circles default size radius center and sAngle is start always 0 the 2*math.PI is 
// end angle which is 360 degrees but in radius
export function Circle(x, y, r, fill, taskId, preReqs) {
    this.preReqs = preReqs
    this.taskId = taskId;
    this.x = x || 0;
    this.y = y || 0;
    this.r = r || 15;
    this.sAngle = 0;
    this.eAngle = 2 * Math.PI;
    this.fill = fill || '#AAAAAA';
}

// draws the circle
Circle.prototype.drawCircle = function(ctx) {
    
    ctx.beginPath()
    ctx.fillStyle = this.fill;
    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle, false)
    ctx.closePath()
    ctx.fill();
    // ctx.fillText(this.title, this.x, this.y + 3)
}

// is the mouse inside the circle gonna use this to drag the circle around
Circle.prototype.contains = function(mx, my) {
    console.log(`t/f: ${Math.sqrt((mx - this.x)*(mx - this.x) + (my - this.y)*(my - this.y)) < this.r}`)
    console.log(` thisx: ${this.x}`)
    console.log(`thisy: ${this.y}`)
    console.log(`mouse x,y ${mx, my}`)
    return (Math.sqrt((mx - this.x)*(mx - this.x) + (my - this.y)*(my - this.y)) < this.r);
}


function CanvasState(canvas) {

    // setting the web area that can be moved around // drawn upon
    this.canvas = canvas 
    this.width = canvas.width 
    this.height = canvas.height
    this.ctx = canvas.getContext('2d')


    let stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
    this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
    this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
    this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
    this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
  }
    // this is to offset the box/mouse position to the correct size of the component
    // we have a nav bar and left side bar
    
    // let html = document.body.parentNode;
    this.htmlTop = canvas.offsetTop;
    this.htmlLeft = canvas.offsetLeft;

    this.valid = false;
    this.shapes = [];
    this.dragging = false;
    this.selection = null;
    this.dragxaxis = 0;
    this.dragyaxis = 0;

    let myState = this; 


    // i believe this is for selecting a new shape when you click on it 
    // instead of specifying a new thing might not need this
    canvas.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    },
    false
    )

    canvas.addEventListener('mousedown', function(e) {
        // ;
        let mouse = myState.getMouse(e);
        let mx = mouse.x;
        let my = mouse.y;
        let shapes = myState.shapes
        let l = shapes.length;
        for (let i = l-1; i >= 0; i--){
            if (shapes[i].contains(mx, my)){
                let mySel = shapes[i]
                
                // this selects the shape using the fuction we made
                myState.dragxaxis = mx - mySel.x; 
                myState.dragyaxis = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel; 
                myState.valid = false;
                return;
            }
        }

        // this is to deslect old items of code
        if (myState.selection) {
            myState.selection = null;
            myState.valid = false; 
        }
    }, true);
    canvas.addEventListener('mousemove', function(e){
        
        if (myState.dragging){
            let mouse = myState.getMouse(e);
            
            myState.selection.x = mouse.x - myState.dragxaxis;
            myState.selection.y = mouse.y - myState.dragyaxis;
            myState.valid = false;
        }
    }, true);
    canvas.addEventListener('mouseup', function(e) {
        myState.dragging = false;
    }, true);

    canvas.addEventListener('dblclick', function(e){
        let mouse = myState.getMouse(e);
        myState.addShape(new Circle(mouse.x, mouse.y, 25, 0, 2 * Math.PI, 'rgba(151, 216, 107, 0.3)'))
    })

    this.selectionColor = '#CC0000';
    this.selectionWidth = 2;
    this.interval = 30;
    // maybe mistake here
    setInterval(() => myState.draw(), myState.interval)
}


CanvasState.prototype.addShape = function(circle) {
    this.shapes.push(circle);
    this.valid = false;
}

CanvasState.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
}

CanvasState.prototype.draw = function() {
    if (!this.valid) {
        let ctx = this.ctx ;
        let shapes = this.shapes;
        this.clear();

        let l = shapes.length;
        for(let i = 0; i < l; i++){
            let shape = shapes[i];
            if ((shape.r + shape.x) > this.width || (shape.y + shape.r) > this.height || shape.y - shape.r < 0 || shape.x - shape.r < 0) continue;
            shapes[i].drawCircle(ctx)
        }
        
        if (this.selection !=null) {
            ctx.strokeStyle = this.selectionColor;
            ctx.lineWidth = this.selectionWidth;
            let mySel = this.selection;
            ctx.arc(mySel.x, mySel.y, mySel.r, mySel.sAngle, mySel.eAngle)
        }
        
        this.valid = true
    }
}

CanvasState.prototype.getMouse = function(e) {
    
    let element = this.canvas 
    let offSetX = 0;
    let offSetY = 0;
    let mx;
    let my;

    // if (element.offsetParent !== undefined) {
    //     do {
    //         this.offSetX += element.offsetLeft;
    //         this.offSetY += element.offsetTop;
    //     } while ((element = element.offsetParent));
    // }
    
    this.offSetX = this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    this.offSetY = this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

    mx = e.pageX - this.offSetX;
    my = e.pageY - this.offSetY;
    // mx = e.pageX;
    // my = e.pageY;
    return {x: mx, y: my};
}


// figure out how to use projects to get to make circles for each task then place them
 // evenly distributed throughout the page
export function initWeb(project) {
    let s = new CanvasState(document.getElementById('canvas_field'));
    
    s.addShape(new Circle(
        300,
        100,
        25,
        'blue',
        // this.title
    ));

    // project.tasks.map( task => {
    //     s.addShape(new Circle(
    //         Math.floor(Math.random() * 700),
    //         Math.floor(Math.random() * 1000),
    //         25,
    //         null,
    //         task.title
    //     )
    // )})
}






//the circles default size radius center and sAngle is start always 0 the 2*math.PI is 
// end angle which is 360 degrees but in radius
function Circle(x, y, r, fill, title) {
    
    this.title = 'WOW';
    this.x = x || 0;
    this.y = y || 0;
    this.r = r || 15;
    this.sAngle = 0;
    this.eAngle = 2 * Math.PI;
    this.fill = fill || '#AAAAAA';
}

// draws the circle
Circle.prototype.drawCircle = function(ctx) {
    debugger
    ctx.beginPath()
    ctx.fillStyle = this.fill;
    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle, false)
    ctx.closePath()
    ctx.fill();
    // ctx.fillText(this.title, this.x, this.y + 3)
}

// is the mouse inside the circle gonna use this to drag the circle around
Circle.prototype.contains = function(mx, my) {
    debugger
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
    let html = document.body.parentNode;
    this.htmlTop = html.offsetTop;
    this.htmlLeft = html.offsetLeft;

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
        // debugger;
        let mouse = myState.getMouse(e);
        let mx = mouse.x;
        let my = mouse.y;
        let shapes = myState.shapes
        let l = shapes.length;
        for (let i = l-1; i >= 0; i--){
            if (shapes[i].contains(mx, my)){
                let mySel = shapes[i]
                debugger
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
            debugger
            myState.selection.x = mouse.x - myState.dragxaxis;
            myState.selection.y = mouse.y - myState.dragyaxis;
            myState.valid = false;
        }
    }, true);
    canvas.addEventListener('mouseup', function(e) {
        myState.dragging = false;
    }, true);
    canvas.addEventListener('dbclick', function(e){
        debugger
        let mouse = myState.getMouse(e);
        myState.addCircle(new Circle(mouse.x - 10, mouse.y - 10, 20, 20, 'rgba(151, 216, 107, 0.3)'))
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
    let element = this.canvas, offsetX = 0, offSetY = 0, mx, my;

    if (element.offsetParent !== undefined) {
        do {
            this.offsetX += element.offsetLeft;
            this.offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }
    debugger
    // this.offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    // this.offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

    // mx = e.pageX - this.offsetX;
    // my = e.pageY - this.offsetY;
    mx = e.pageX;
    my = e.pageY;
    return {x: mx, y: my};
}


// figure out how to use projects to get to make circles for each task then place them
 // evenly distributed throughout the page
export function initWeb(project) {
    let s = new CanvasState(document.getElementById('canvas_field'));
    
    s.addShape(new Circle(
        Math.floor((Math.random() * 100) + 1),
        Math.floor((Math.random() * 100) + 1),
        25,
        'blue',
        // this.title
    ));

    // project.tasks.map( task => {
    //     s.addShape(new Circle(
    //         Math.floor(Math.random() * 100),
    //         Math.floor(Math.random() * 100),
    //         25,
    //         null,
    //         task.title
    //     )
    // )})
}


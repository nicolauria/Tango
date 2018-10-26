



//the circles default size radius center and sAngle is start always 0 the 2*math.PI is 
// end angle which is 360 degrees but in radius
function Circle(x, y, w, h, fill) {
    this.x = x || 0;
    this.y = y || 0;
    this.r = r || 15;
    this.sAngle = 0;
    this.eAngle = 2*math.PI;
    this.fill = fill || '#AAAAAA';
}

// draws the circle
Shape.prototype.drawCircle = function(ctx) {
    ctx.fillStyle = this.fill 
    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle)
}

// is the mouse inside the circle gonna use this to drag the circle around
Shape.prototype.contains = function(mx, my) {
    return (Math.sqrt((mx - this.x)*(mx - this.x) + (my - this.y)*(my - this.y)) < r);
}

function CanvasState(canvas) {

    // setting the web area that can be moved around // drawn upon
    this.canvas = canvas 
    this.width = canvas.width 
    this.height = canvas.height
    this.ctx = canvas.getContext('2d')


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
    // canvas.addEventListener('selectstart', function(e) {
    //     e.preventDefault();
    //     return false;
    // },
    // false
    // )

    canvas.addEventListener('mousedown', function(e) {
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
    canvas.addEventListener('dbclick', function(e){
        let mouse = myState.getMouse(e);
        myState.addCircle(newShape(mouse.x - 10, mouse.y - 10, 20, 20, 'rgba(151, 216, 107, 0.3)'))
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
    if (!this.valid) {
        let ctx = this.ctx ;
        let shapes = this.shapes;
        this.clear();

        let l = shapes.length;
        for(let i = 0; i < l; i++){
            let shape = shapes[i];
            if ((shape.r + shape.x) > this.width || (shape.y + shape.r) > this.height || shape.y - shape.r < 0 || shape.x - shape.r < 0) continue;
            shapes[i].draw(ctx)
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
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;
    return {x: mx, y: my};
}

function initWeb(project) {
    let s = new CanvasState(document.getElementById('canvas_field'));
    project.tasks
}
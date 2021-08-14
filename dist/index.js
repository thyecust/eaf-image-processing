// author: thyecust [thy@mail.ecust.edu.cn]
// modified: 2021/8/13

const width = 1200
const height = 500

const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: width,
        height: height,
        selection: false
    })
}
const setBackgroundImage= (imageURL, canvas) => {
    fabric.Image.fromURL(imageURL, (img) => {
        canvas.backgroundImage = img
        canvas.renderAll()
    })
}
const setEvents = (canvas) => {
    canvas.on('mouse:move', (event) => {
        if(mousePressed 
            && currentMode === modes.pan){
            canvas.setCursor('grab')
            canvas.renderAll()
            const moveEvent = event.e
            const delta = new fabric.Point(
                moveEvent.movementX, 
                moveEvent.movementY)
            canvas.relativePan(delta)
        } else if (mousePressed 
            && currentMode === modes.drawing){
            
        }
    })
    
    canvas.on('mouse:down', (event) => {
        mousePressed = true
        if(currentMode == modes.pan){
            canvas.setCursor('grab')
            canvas.renderAll()
        }
    })
    
    canvas.on('mouse:up', (event) => {
        mousePressed = false
        if(currentMode ==- modes.pan){
            canvas.setCursor('default')
            canvas.renderAll()
        }
    })
}
const toggleMode = (mode) => {
    if(mode === modes.pan){
        if(currentMode != mode){
            currentMode = mode
            canvas.isDrawingMode = false
            canvas.renderAll()
        }else{
            currentMode = ''
        }
    }else if(mode === modes.drawing){
        if(currentMode != mode){
            currentMode = mode
            canvas.isDrawingMode = true
            canvas.freeDrawingBrush.color = color
            canvas.renderAll()
        }else{
            currentMode = ''
            canvas.isDrawingMode = false
            canvas.renderAll()
        }
    }
    console.log(currentMode)
}
const modes = {
    pan: 'pan',
    drawing: 'drawing'
}
const setColorListener = () => {
    const picker = document.getElementById('color')
    picker.addEventListener('change', (event) => {
        console.log(event.target.value)
        color = event.target.value
        console.log(color)
        canvas.freeDrawingBrush.color = color
        canvas.renderAll()
    })
}
const clearCanvas = (canvas) => {
    canvas.getObjects().forEach((object) => {
        canvas.remove(object)
    })
}
const createRect = (canvas) => {
    const center = canvas.getCenter()
    const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: 'green',
        originX: 'center',
        originY: 'center',
        top: -50,
        left: center.left
    })
    canvas.add(rect)
    canvas.renderAll()
    rect.animate('top', center.top, {
        onChange: canvas.renderAll.bind(canvas)
    })
}
const createCircle = (canvas) => {
    const circle = new fabric.Circle({
        radius: 50,
        fill: 'purple',
        originX: 'center',
        originY: 'center',
        top: height / 2,
        left: width / 2
    })
    canvas.add(circle)
    canvas.renderAll()
}
const saveCanvas = (canvas) => {
    const lowerCanvas = document.getElementsByTagName('canvas')[0]
    let a = document.createElement('a')
    let canvasURL
    lowerCanvas.toBlob((blob) => {
        canvasURL = URL.createObjectURL(blob)
        a.href = canvasURL
        a.download = ''
        a.click()
        console.log(canvasURL)
    })
    
}

const canvas = initCanvas('canvas')
let mousePressed = false
let currentMode = ''
let color = '#000000'

setBackgroundImage('image/valley.jpg', canvas)
setEvents(canvas)
setColorListener()

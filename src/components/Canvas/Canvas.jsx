import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import CanvasDraw from "react-canvas-draw";
import './Canvas.css'


function Canvas({ setCanvas }) {

    const firstCanvas = useRef(null)
    const [color, setColor] = useState('red')


    const saveCanvas = () => {
        const data = firstCanvas.current.getDataURL('jpeg', null, 'white')
        setCanvas({ target: { value: data, name: 'picture' } })
    }

    const clearCanvas = () => {
        firstCanvas.current.clear()
    }

    const changeColor = (e) => {
        console.log(e)
        setColor(e.target.id)
    }



    return (
        <div>
            <div className="canvasDraw">
                <CanvasDraw
                    style={{ border: '1px solid', borderRadius: '20px' }}
                    hideGrid={false}
                    canvasWidth={300}
                    canvasHeight={300}
                    ref={firstCanvas}
                    lazyRadius={0}
                    brushColor={color}

                />
            </div>
            <div className="paintButtons">
                <div>
                    <Button id='green' onClick={changeColor}>&#128154;</Button>
                    <Button id='lightskyblue' onClick={changeColor}>&#128153;</Button>
                    <Button id='purple' onClick={changeColor}>&#128156;</Button>
                    <Button id='yellow' onClick={changeColor}>&#128155;</Button>
                </div>
                <div>
                    <Button id='black' onClick={changeColor}>&#x1F5A4;</Button>
                    <Button id='red' onClick={changeColor}>&#128147;</Button>
                    <Button id='orange' onClick={changeColor}>&#129505;</Button>
                    <Button id='pink' onClick={changeColor}>&#128151;</Button>
                </div>
            </div>
            <div>
            </div>
            <div className="paintButtons">
                <Button onClick={saveCanvas} >Save</Button>
                <Button onClick={clearCanvas} >Clear</Button>
            </div>


        </div >
    )

}

export default Canvas



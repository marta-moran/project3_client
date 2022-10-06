import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import CanvasDraw from "react-canvas-draw";
import './Canvas.css'


function Canvas({ setCanvas }) {

    const firstCanvas = useRef(null)

    const saveCanvas = () => {
        const data = firstCanvas.current.getDataURL('jpeg', null, 'white')
        setCanvas({ target: { value: data, name: 'picture' } })
        console.log(typeof data)
    }

    const clearCanvas = () => {
        firstCanvas.current.clear()
    }



    return (
        <div>
            <CanvasDraw
                style={{ border: '1px solid', borderRadius: '20px' }}
                brushRadius={3}
                hideGrid={false}
                canvasWidth={300}
                canvasHeight={300}
                ref={firstCanvas}
                lazyRadius={0}

            />

            <Button onClick={saveCanvas} >Save</Button>
            <Button onClick={clearCanvas} >Clear</Button>


        </div >
    )

}

export default Canvas



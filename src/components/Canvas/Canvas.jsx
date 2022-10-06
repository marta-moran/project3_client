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

    return (
        <div>
            <CanvasDraw
                style={{ border: '1px solid', borderRadius: '20px' }}
                brushRadius={1}
                hideGrid={false}
                canvasWidth={300}
                canvasHeight={300}
                ref={firstCanvas}
            />

            <Button onClick={saveCanvas} >Save</Button>
        </div>
    )

}

export default Canvas



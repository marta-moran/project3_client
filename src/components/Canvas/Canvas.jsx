import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import CanvasDraw from "react-canvas-draw";
import './Canvas.css'
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';


function Canvas({ setCanvas }) {
    const firstCanvas = useRef(null)
    const [color, setColor] = useState('red')
    const [Radius, setRadius] = useState(1)

    console.log(Radius)


    const saveCanvas = () => {
        const data = firstCanvas.current.getDataURL('jpeg', null, 'white')
        setCanvas({ target: { value: data, name: 'picture' } })
    }

    const clearCanvas = () => {
        firstCanvas.current.clear()
    }

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    const changeBrushSum = (e) => {
        if (Radius <= 30) {
            setRadius(parseInt(e.target.id) + (4))
        }

    }
    const changeBrushRes = (e) => {
        if (Radius !== 1) {
            setRadius(parseInt(e.target.id) - (4))
        }
    }

    const undoCanvas = () => {
        firstCanvas.current.undo()
    }


    return (
        <div>
            <div className="canvasDraw">
                <CanvasDraw
                    style={{ border: '1px solid', borderRadius: '20px' }}
                    hideGrid={true}
                    canvasWidth={300}
                    canvasHeight={300}
                    ref={firstCanvas}
                    lazyRadius={0}
                    brushColor={color}
                    brushRadius={Radius}
                />
            </div>
            <div className="btn-container">
                <div className="paintButtons">
                    <div>
                        <Button id={Radius} onClick={changeBrushSum} style={{ fontSize: '25px', fontWeight: 700 }}>+</Button>
                        <input id="color-input" onChange={changeColor} type='color'></input>
                        <Button id={Radius} onClick={changeBrushRes} style={{ fontSize: '25px', fontWeight: 700 }}>-</Button>
                    </div>
                </div>
                <div className="buttons-div">

                    <Button onClick={clearCanvas}><DeleteIcon></DeleteIcon></Button>
                    <Button onClick={undoCanvas}><CleaningServicesIcon></CleaningServicesIcon></Button>
                    <Button onClick={saveCanvas}><SaveIcon></SaveIcon></Button>
                </div>
            </div>
        </div >
    )
}

export default Canvas


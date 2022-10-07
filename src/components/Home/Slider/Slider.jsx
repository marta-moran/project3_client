import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from "react-router-dom";
function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const navigate = useNavigate()

    return (
        <div className='AppBackground'>
            <div className='slider-align'>
                <Carousel className='slider' controls={false} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item >
                        <div>

                        </div>
                        {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt=""
                    /> */}
                        <Carousel.Caption>
                            <div className='sliderLetters'>
                                <h3><strong>PINTER</strong></h3>
                                <p>La app de citas para gente no superficial</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    /> */}
                        <div>

                        </div>

                        <Carousel.Caption>
                            <div className='sliderLetters'>
                                <h3><strong>¡Pinta tu perfil!</strong></h3>
                                <p>Comparte tus aficiones, muestra tu arte y... ¡empieza a Matchear!</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>



                        <Carousel.Caption>
                            <div className='registerButton' >
                                <p onClick={() => navigate('/signup')} >¡Regístrate ya!</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div >
        </div>
    );
}

export default Slider;
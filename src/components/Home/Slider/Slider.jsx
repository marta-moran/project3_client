import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
import NavBar from '../../NavBar/NavBar';
import { useNavigate } from "react-router-dom";

function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const navigate = useNavigate()

    return (
        <>
            <NavBar />
            <div className='AppBackground'>
                <div className='slider-align'>
                    <Carousel className='slider' controls={false} activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item >
                            <div>
                            </div>
                            <Carousel.Caption>
                                <div className='sliderLetters'>
                                    <h3><strong>Pinter</strong></h3>
                                    <p>La app de citas para gente que mira más allá del <span className='singleword'>aspecto físico</span></p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                            </div>
                            <Carousel.Caption>
                                <div className='sliderLetters'>
                                    <h3><strong>Píntate</strong></h3>
                                    <p>Comparte tus aficiones, muestra tu arte, haz match y... ¡empieza a <span className='singleword'>chatear</span>!</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='sliderLetters button-slideLetters'>
                                    <p><span className='singleword'>Regístrate</span> gratis y encuentra a alguien especial</p>
                                </div>
                                <div className='registerButton' >
                                    <p onClick={() => navigate('/signup')} >Regístrate</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>

    );
}

export default Slider;
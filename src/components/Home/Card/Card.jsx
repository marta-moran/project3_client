// import TinderCard from 'react-tinder-card'

function Card({ user }) {

    // const [index, setIndex] = useState(0)
    // const [lastDirection, setLastDirection] = useState()

    // const swiped = (direction) => {
    //     setLastDirection(direction)
    //     setIndex((currentState) => currentState + 1)
    //     console.log(direction)
    //     if (direction === 'right') {
    //         console.log('like')
    //         console.log(characters)
    //     } if (direction === 'left') {
    //         console.log('dislike')
    //     }
    // }

    // const outOfFrame = (name) => {
    //     console.log(name + ' left the screen!')
    // }

    // return (
    //     <div>
    //         <h1>React Tinder Card</h1>
    //         <div className='cardContainer'>
    //             <TinderCard className='swipe' key={characters[index].name} onSwipe={(dir) => swiped(dir, characters[index].name)} onCardLeftScreen={() => outOfFrame(characters[index].name)}>
    //                 <div className='card'>
    //                     <h3>{characters[index].name}</h3>
    //                 </div>
    //             </TinderCard>
    //         </div>
    //         {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    //     </div>
    // )
}


export default Card
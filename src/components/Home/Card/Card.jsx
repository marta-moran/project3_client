import TinderCard from 'react-tinder-card'

import { useEffect } from "react"

function TinderCards() {

    const [people, setPeople] = useEffect([])

    return (
        <div>
            {people.map(person => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                >
                    <div className='card'>
                        <h3> {person.name} </h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
















    // const outOfFrame = (name) => {
    //     console.log(name + ' left the screen!')
    // }

    // const [index, setIndex] = useState(0)
    // const [lastDirection, setLastDirection] = useState()

    // const { user, storeToken, authentication } = useContext(AuthContext)

    // const [newUsers, setNewUsers] = useState({})

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
    // useEffect(() => {
    //     authentication()
    //     userAxios.getAllPeople()
    //         .then((users) => {
    //             setNewUsers(users)
    //         })
    //         .catch(error => console.log(error))
    // }, [])

    // return (
    //     <div>

    //         <h1>hola</h1>
    {/* <h1>React Tinder Card</h1>
            <div className='cardContainer'>
                <TinderCard className='swipe' key={users[index].username} onSwipe={(dir) => swiped(dir, users[index].username)} onCardLeftScreen={() => outOfFrame(users[index].username)}>
                    <div className='card'>
                        <h3>{users[index].username}</h3>
                    </div>
                </TinderCard>
            </div>
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
    {/* </div>
    ) */}
}


export default TinderCards
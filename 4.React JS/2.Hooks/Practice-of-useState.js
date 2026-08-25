import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMystyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    })
    
    const [btnText, setBtnText] = useState('Enable Dark Mode')

    
    const toggleStyle = () => {
        if(myStyle.color === 'black') {
            setMystyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setBtnText("Enable Light Mode")
        } else {
            setMystyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

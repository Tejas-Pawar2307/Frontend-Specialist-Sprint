import React, {useState} from 'react'

export default function Textform(props) {

    const [text , setText] = useState("Text here plz");

    const handleUpClick = () => {
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert("Converted to uppercase" , "success");
    }

    const handleLowClick = () => {
        let lowText  = text.toLocaleLowerCase();
        setText(lowText);
        props.showAlert("Converted to lowercase" , "success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text has been Cleared" , "danger");
    }
    

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

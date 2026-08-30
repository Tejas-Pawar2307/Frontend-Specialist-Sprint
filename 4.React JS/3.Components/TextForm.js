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





  return (
    <>
        <div>
            <form class="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        
        <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Enter Your Text Here</label>

            <textarea id="message" value={text}  onChange={handleOnChange}   rows="4" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter The Text"></textarea>
        </div>
        
        <button type="button" onClick={handleUpClick} class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer">
            Upper Case
        </button>

        <button type="button" onClick={handleLowClick} class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer">
            Lower Case
        </button>

        <button type="button" onClick={handleClearClick} class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer">
            Clear Text
        </button>
        
    </form>
        </div>
    </>
  )
}

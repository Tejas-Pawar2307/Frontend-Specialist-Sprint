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


  return (
    <>
        <div className="container" style={myStyle}>

            <div>
                <input type="radio" name="accordion" id="acc1" className="hidden peer/acc1" checked />
                <label for="acc1" className="w-full flex justify-between items-center text-left px-4 py-3 font-medium bg-white text-gray-800 hover:bg-gray-50 cursor-pointer peer-checked/acc1:bg-blue-50 peer-checked/acc1:text-blue-600">
                <span>Accordion Item #1</span>
                <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                </label>
                <div className="hidden peer-checked/acc1:block px-4 py-3 text-gray-600 text-sm leading-relaxed">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                </div>
            </div>

            <div>
                <input type="radio" name="accordion" id="acc2" className="hidden peer/acc2" />
                <label for="acc2" className="w-full flex justify-between items-center text-left px-4 py-3 font-medium bg-white text-gray-800 hover:bg-gray-50 cursor-pointer peer-checked/acc2:bg-blue-50 peer-checked/acc2:text-blue-600">
                <span>Accordion Item #2</span>
                <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                </label>
                <div className="hidden peer-checked/acc2:block px-4 py-3 text-gray-600 text-sm leading-relaxed">
                This is the second item's accordion body. You can put any content here.
                </div>
            </div>

            <div>
                <input type="radio" name="accordion" id="acc3" className="hidden peer/acc3" />
                <label for="acc3" className="w-full flex justify-between items-center text-left px-4 py-3 font-medium bg-white text-gray-800 hover:bg-gray-50 cursor-pointer peer-checked/acc3:bg-blue-50 peer-checked/acc3:text-blue-600">
                <span>Accordion Item #3</span>
                <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                </label>
                <div className="hidden peer-checked/acc3:block px-4 py-3 text-gray-600 text-sm leading-relaxed">
                This is the third item's accordion body. You can put any content here.
                </div>
            </div>
            <button onClick={toggleStyle}  className='btn btn-primary'>{btnText}</button>

</div>
    </>
  )
}

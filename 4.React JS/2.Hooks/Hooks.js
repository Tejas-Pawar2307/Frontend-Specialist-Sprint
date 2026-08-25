function App() {

    const [mode, setMode] = useState('light');
     


    const toggleMode = () => {
        if(mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark mode has been enabled" , "success")
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled" , "success")
        }
    }

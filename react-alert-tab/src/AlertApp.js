import './AlertApp.css';
import Alert from './Alert.js';
import {useState} from 'react'

function AlertApp() {
    const [showAlert, setShowAlert] = useState(false);
    // const [showModal, setShowModal] = useState("");

    function handleAlertOK() {
        console.log('the frob should be blitzened here');
    }

    function toggleModal(item){
        setShowAlert(!showAlert)
    }
    // if (showAlert){
    //     return
    // }
    return (
        <div className={"app-container"}>
            <div className="alertapp">
                This is my app
                <br/>
                <button type={"button"} onClick={() => console.log('clicked')}>
                    Log to Console
                </button>
                <button type={"button"} onClick={()=>setShowAlert(true)}>
                    Frob
                </button>
            </div>
            {showAlert && <Alert onClose={toggleModal} onOK={handleAlertOK}>
                <div>
                    Are you sure you want to Frob the blitzen?
                    </div>
                </Alert>}
        </div>
    );
}

export default AlertApp;

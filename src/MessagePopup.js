import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MessagePopup() {
    const [showDangerAlert, setshowDangerAlert] = useState(false);
    const [showSuccessAlert, setshowSuccessAlert] = useState(false);

    return (
        <div className="App">
            <Button>fetch todo status</Button>
            <Alert
                show={showDangerAlert}
                variant="danger"
                className="w-25 mt-3 ml-3 "
            >
                This is a error Message
            </Alert>
            <Alert
                show={showSuccessAlert}
                variant="success"
                className="w-25 mt-3 ml-3 "
            >
                This is a success Message
            </Alert>
        </div>
    );


}
export default MessagePopup;

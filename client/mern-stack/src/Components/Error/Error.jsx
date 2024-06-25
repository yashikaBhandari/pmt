import { useEffect, useState } from 'react'


    const [errorMessage, setErrorMessage] = useState('')
    const [showError, setShowMessage] = useState(false)

    useEffect(()=> {
        if(showError){
            setTimeout(() => {
                setShowError(false);
            }, 5000);
        }
    }, [showError]);    


const errorHandler = () =>{
    setErrorMessage(errorMessage);
    setShowError(true);


return(
    <div>
        {showError &&
        <div className="error-message">
            {errorMessage}
        </div>
        }

    </div>
)
};


export default errorHandler
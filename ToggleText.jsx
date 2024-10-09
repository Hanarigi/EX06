import React, { usestate } from 'react';
function ToggleText(){
    const [show,set] = usestate(false);
    return(
        <div>
            <button onClick={()=>set(!show)}> 
                {show ? 'Hide' : 'Show'} Text
            </button>
            {show && <p> Hello world </p>}
        </div>
    );
}

export default ToggleText;

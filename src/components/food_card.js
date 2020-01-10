import React from 'react';



const Foods = props => {
    const {data} = props;
    
    return(
       <div>
             <img src={data.image_front_url} alt ="oui"/>
        </div>
        
    
    );
};

export default Foods;


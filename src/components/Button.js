

/* Write a button component */ 

import React from 'react'; 

const Button = (props) => { 
  
  return ( 
    
    <button onClick={props.onClick} className='btn btn-dark fw-bold'>{props.text}</button> 
    
  ); 
  
} 

export {Button};

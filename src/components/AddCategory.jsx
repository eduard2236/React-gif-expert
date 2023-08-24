import { useState } from "react";


export const AddCategory = ({onNewCategories}) => {
const [inputValue, setinputValue] =  useState('');
const onInputChange = ({target})=>{
    setinputValue(target.value);
}

const onSubmit = ()=>{
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onNewCategories(inputValue.trim());
    //setCategories(categories => [inputValue, ...categories]);
    setinputValue('');
}

  return (
    <form onSubmit={ onSubmit }>
        <input type="text" placeholder="Buscar Gif" value={inputValue} onChange={onInputChange}/>
    </form>
    
  )
}





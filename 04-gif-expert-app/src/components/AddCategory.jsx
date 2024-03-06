import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({target}) => {
        // console.log(target.value);
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]); // Actualiza el useState del componente padre
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

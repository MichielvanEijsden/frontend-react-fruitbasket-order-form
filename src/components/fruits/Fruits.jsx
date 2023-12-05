import './Fruits.css'
import {useForm} from "react-hook-form";


function Fruits(prop) {
    function handleFormSubmit(data) {
        console.log(data)
    }
    const {register, handleSubmit} = useForm()
    return (
        <label className='schoppingCard' onSubmit={handleSubmit(handleFormSubmit)} id="shoppinglist">
            <h2>{prop.fruitType}</h2>
            <button type='button' disabled={prop.count === 0} onClick={() => prop.setCount(prop.count - 1)}>-</button>
            <p{...register(prop.fruitType)}>{prop.count}</p>
            <button type='button' onClick={() => prop.setCount(prop.count + 1)}>+</button>
            </label>

    )

}

export default Fruits
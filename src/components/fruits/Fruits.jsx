import './Fruits.css'

function Fruits(prop){

    return(
        <section className='schoppingCard'>
        <h2>{prop.fruitType}</h2>
            <button type='button' disabled={prop.count === 0} onClick={() => prop.setCount(prop.count -1)}>-</button>
        <p>{prop.count}</p>
            <button type='button' onClick={() => prop.setCount(prop.count +1)}>+</button>
        </section>

    )
}

export default Fruits
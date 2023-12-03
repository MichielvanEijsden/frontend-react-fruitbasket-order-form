import './App.css'

import Fruits from "./components/fruits/Fruits.jsx";
import {useState} from "react";
import {useForm} from "react-hook-form";

function App() {

    const [aardbeiCount, setAardbeiCount] = useState(0)
    const [mangoCount, setMangoCount] = useState(0)
    const [kiwiCount, setKiwiCount] = useState(0)
    const [peerCount, setPeerCount] = useState(0)
    const {register, handleSubmit} = useForm()
    function handleFormSubmit(data) {
       const aardbei = `Aardbeien: ${aardbeiCount}`
        const mango = `Mangoes: ${mangoCount}`
        const kiwi = `Kiwis: ${kiwiCount}`
        const peer = `Peren: ${peerCount}`
        console.log(aardbei,mango,kiwi,peer,data)
    }
    return (
        <>
            <div className='outerContainer'>
            <div className='container'>
            <h1>Fruitmand bezorgservice</h1>
                <Fruits
                    fruitType="🍓 Aardbei"
                    count={aardbeiCount}
                    setCount={setAardbeiCount}
               />
                <Fruits
                    fruitType="🥭 Mango"
                    count={mangoCount}
                    setCount={setMangoCount}
                />
                <Fruits
                    fruitType="🥝 Kiwi"
                    count={kiwiCount}
                    setCount={setKiwiCount}
                />
                <Fruits
                    fruitType="🍐 Peer"
                    count={peerCount}
                    setCount={setPeerCount}
                />
                <section className='resetButton'>
                    <button type="button" onClick={() => setAardbeiCount(0) || setMangoCount(0) || setPeerCount(0) || setKiwiCount(0)}>Reset</button>
                </section>
            <form  onSubmit={handleSubmit(handleFormSubmit)} className="contactForm">
                <label>
                    Voornaam:
                    <input type="text" {...register("firstName",{required:{value: true,message:'vul je voornaam in'}})}/>
                </label>
                <label>
                    Achternaam:
                    <input type="text"{...register("lastName",{required:{value: true,message:'vul je achternaam in'}})}/>
                </label>
                <label>
                    Leeftijd:
                    <input type="number"{...register("age",{required:{value: true,message:'vul je leeftijd in'}})}/>
                </label>
                <label>
                    Postcode:
                    <input type="text" {...register("zipCode",{required:{value: true,message:'vul je postcode in'}})}/>
                </label>
                <label>
                    Bezorgfrequentie:
                    <select {...register("delivery")}>
                        <option value="iedere_week">iedere week</option>
                        <option value="om_de_week">om de week</option>
                        <option value="iedere_maand">iedere maand</option>
                    </select>
                </label>
                <label className='list'>
                    <input type="radio" name="day" {...register("delivery-time")} placeholder="day"/>Overdag
                    <input type="radio" name="evening" {...register("delivery-time")} placeholder="evening"/>s Avonds
                </label>
                <label className='list'>
                    Opmerkingen:
                    <textarea rows="4" cols="40" {...register("comments",{maxLength:{value: 100,message:'het bericht is te lang'}})}/>
                </label>
                <label>
                    <input type="checkbox" {...register("terms_of_agreement",{required:{value: true,message:'je moet deze nog aan vinken'}})} placeholder="terms_of_agreement"/>Ik ga akkoord met de voorwaarden
                </label>

                <button type="submit" >
                    Verzend
                </button>
            </form>
            </div>
            </div>
        </>
    )
}


export default App

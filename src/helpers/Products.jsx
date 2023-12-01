import {useState} from "react";
import Fruits from "../components/fruits/Fruits.jsx";

function Products() {

    const [aardbeiCount, setAardbeiCount] = useState(0)
    const [mangoCount, setMangoCount] = useState(0)
    const [kiwiCount, setKiwiCount] = useState(0)
    const [peerCount, setPeerCount] = useState(0)

    return (
        <>
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

            <button type="button"
                    onClick={() => setAardbeiCount(0) || setMangoCount(0) || setPeerCount(0) || setKiwiCount(0)}>Reset
            </button>

        </>
    )
}
export default Products
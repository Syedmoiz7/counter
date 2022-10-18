import { useState } from "react";
import './index.css'

const Counter = () => {
    const [counting, setCounting] = useState(0);
    const [isLit, setLit] = useState([true]);

    const clickHandler = () => {
        setLit(!isLit)
    }
    return (
        <div className={`mainContainer ${(isLit) ? "Lit" : "Dark"}`}>
            <div className="heading">
                <h1>Counter App</h1>
            </div>
            <div className="counter">
                {counting}
            </div>
            <button onClick={() => { setCounting(counting + 1) }} className="bt">Addition</button>
            <button onClick={() => { setCounting(counting + -1) }} className="bt">Subtraction</button> <br />
            <button onClick={() => { setCounting(0) }} className="bt">Reset</button>
            <div className="mode">
                <button onClick={clickHandler}></button>
            </div>
        </div>
    )
}

export default Counter;
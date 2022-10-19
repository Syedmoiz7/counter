import { useState } from "react";
import './index.css'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

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
            <div className="btns">
            <button onClick={() => { setCounting(counting + 1) }} className="bt">Increment</button>
            <button onClick={() => { setCounting(counting + -1) }} className="bt">Decrement</button> <br />
            <button onClick={() => { setCounting(0) }} className="bt">Reset</button>
            </div>
            <div className="mode">
                <button className="icon" onClick={clickHandler}>{(isLit) ? <BsSunFill/> : <BsFillMoonFill/>}</button>
            </div>
        </div>
    )
}

export default Counter;
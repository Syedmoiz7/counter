import { useState } from "react";
import './index.css'

const Counter = () => {
    const [counting, setCounting] = useState(1)


    return (
        <div className="mainContainer">
            <div className="heading">
                <h1>Counter App</h1>
            </div>
            <div className="counter">
                {counting}
                </div>
                <button onClick={() => {setCounting(counting + 1 )}}>Addition</button>
                <button onClick={() => {setCounting(counting + -1 )}}>Subtraction</button>

        </div>
    )
}

export default Counter;
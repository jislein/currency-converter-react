import { useState } from 'react';
import './CurrencyInput.css';

interface CurrencyInputProps {
    label: string;
    
}

function CurrencyInput({label}: CurrencyInputProps) {
    const [amount, setAmount] = useState<string>(checkWhichInput());

    // This checks which input is the 'Amount' imput or the 'Converted to' input
    // and assigns the default values where corresponds. 
    function checkWhichInput() {
        if (label === "Amount") {
            return "100"
        }
        else {
            return "6000"
        }
    }

    return (
        <div className="currency-input">
            <div className='amount-input'>
                <label>{label}</label>
                <input type="text" value={amount} onChange={(element) => setAmount(element.target.value)}/>
            </div>
            <div className='divider'></div>
            <div className="currency-selector">
                <select name="" id="">
                    <option value="">USD</option>
                    <option value="">DOP</option>
                    <option value="">EUR</option>
                </select>
            </div>
        </div>
    )
}

export default CurrencyInput;
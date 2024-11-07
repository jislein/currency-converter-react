import CurrencyInput from "./CurrencyInput/CurrencyInput";
import SwapIconButton from "./SwapIconButton";

function CurrencyConverter() {
    return (
        <div className="currency-converter">
            <CurrencyInput label="Amount"/>
            <SwapIconButton/>
            <CurrencyInput label="Converted to"/>
        </div>
    )
}

export default CurrencyConverter;
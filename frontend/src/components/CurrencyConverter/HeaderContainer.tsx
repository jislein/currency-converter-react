import ConvertButton from "./ConvertButton";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyConverterHeader from "./CurrencyConverterHeader";
import CurrencyConverterHeaderLine from "./CurrencyConverterHeadLine";

function HeaderContainer() {
    return (
        <div className="header">
            <CurrencyConverterHeader/>
            <CurrencyConverterHeaderLine totalCurrencies="2"/>
            <CurrencyConverter/>
            <ConvertButton/>
        </div>
    )
}

export default HeaderContainer;
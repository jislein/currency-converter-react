interface HeaderLineProps {
    totalCurrencies: string;
}

function CurrencyConverterHeaderLine({totalCurrencies}: HeaderLineProps) {
    return (
        <p>Send secure international business payments in <span>{totalCurrencies}</span> currencies, all at competitive rates with no hidden fees.</p>
    )
}

export default CurrencyConverterHeaderLine;
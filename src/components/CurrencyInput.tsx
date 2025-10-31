import React from "react";
import currency from "currency.js";

const CurrencyInput = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value) || 0; 
    const randomValue = Math.random();
    const result = currency(inputValue).add(randomValue); 
    console.log("Сумма:", result.value); 
  };

  return (
    <div>
      <input type="number" onChange={onChange} placeholder="Введите число" />
    </div>
  );
};

export default CurrencyInput;

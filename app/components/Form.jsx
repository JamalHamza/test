'use client';

import {useAppContext} from "../../context";

const PhoneNumberInput = () => {
  const { phoneNumber, updatePhoneNumber } = useAppContext();

  const handleInput = (e) => {
    let inputValue = e.target.value;

    // Format the phone number
    const formattedPhoneNumber = formatPhoneNumber(inputValue);
    updatePhoneNumber(formattedPhoneNumber);
  };

  return (
    <input
      className='tel-input'
      type='text'
      value={phoneNumber}
      placeholder='+7 (___) ___ __-__'
      onChange={(e) => handleInput(e)}
    />
  );
};

export default PhoneNumberInput;

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  let res = '';

  if (digits.length > 0) {
    res += `${digits.slice(0, 3)}`;
  }
  if (digits.length >= 4) {
    res = `(${res}) ${digits.slice(3, 6)}`;
  }

  if (digits.length >= 7) {
    res += ` ${digits.slice(6, 8)}`;
    if (digits.length > 8) {
      res = `${res}-${digits.slice(8, 10)}`;
    }
  }

  return res;
}

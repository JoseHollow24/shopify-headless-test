import {useState} from 'react';

export function TextInput({ defaultValue, onInputChangeValue }) {
  const [inputValues, setInputValues] = useState(defaultValue);

  const handleInputChange = (e) => {
    const newValue  = e.target.value;
    setInputValues(newValue );
    onInputChangeValue(newValue )
  }

  return (
    <> 
      <input className="border border-gray-800 rounded-md py-2 px-3 leading-4 bg-white w-full mb-2"
        type="text"
        value={inputValues} 
        onChange={(handleInputChange)}
      />
    </>
  )
}
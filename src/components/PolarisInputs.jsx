import {Text, Checkbox} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function TextInput({ defaultValue, inputType, textarea }) {
  const [inputValues, setInputValues] = useState(defaultValue);
  const handleInputChange = (e) => {
    setInputValues(e.target.value);
  }

  return (
    <> 
      <input className="border border-gray-800 rounded-md py-2 px-3 leading-4 bg-white w-full mb-2"
        type={inputType}
        value={inputValues} 
        onChange={handleInputChange}
      />
    </>
  )
}

function CheckboxInput(defaultValue) {
  const [checked, setChecked] = useState(defaultValue);
  const handleChange = useCallback(
    (newChecked) => setChecked(newChecked),
    [],
  );

  return (
    <Checkbox
      label="Basic checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
}


export function PolarisInputs({ label, type, value }) {
  
  const renderInput = (type) => {
    if (type === 'textEditor') return (
      <>
        <TextInput defaultValue={value} inputType={type}/>
      </>
      );
    if (type === 'textMultiline') return (
      <>
        <TextInput defaultValue={value} inputType={type} textarea={true}/>
      </>
      );
    if (type === 'checkbox') return (
        <CheckboxInput defaultValue={value} />
      );
  };

  return (
    <>
      <Text as="p" variant="headingSm">
        {label}
      </Text>
      {renderInput(type, label, value)}
    </>
  )
}
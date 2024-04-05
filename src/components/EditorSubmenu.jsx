import { Icon, Text, Divider, } from '@shopify/polaris';
import { ArrowLeftIcon } from '@shopify/polaris-icons';
import { TextInput } from './PolarisInputs';

export function EditorSubmenu({ info, options, onClose, onOptionChange }) {
  const handleInputChange = (index, newValue) => {
    const newOptions = [...options];
    newOptions[index].defaultValue = newValue;
    onOptionChange(newOptions);
  };

  return (
    <>
      <div className="absolute right-0 top-0 bg-white md:h-screen md:w-60 w-full h-screen p-4">
            <button className='xl:hidden flex items-center mb-4 cursor-pointer' label="Cerrar" onClick={onClose} >
              <Icon source={ArrowLeftIcon} />
            </button>
            <span className='inline'>
              <Text as="p" variant="headingSm">
                {info}
              </Text>
            </span>
            <Divider />
           {options.map((option, index) => (
              <div key={index} >
                <Text as="p" variant="headingSm">
                  {option.optionLabel}
                </Text>
                <TextInput 
                  defaultValue={option.defaultValue} 
                  inputType={option.optionType} 
                  onInputChangeValue={(newValue) => handleInputChange(index, newValue)} 
                />
              </div>
            ))}
      </div>
    </>
  )
}

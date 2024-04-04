import {Icon, Text, Divider} from '@shopify/polaris';
import {ArrowLeftIcon} from '@shopify/polaris-icons';
import { PolarisInputs } from './PolarisInputs';

export function EditorSubmenu ({info, options, onClose}) {
  // Función para cerrar el submenú

  return (
    <> 
      <div className="absolute right-0 top-0 bg-white md:h-screen md:w-60 w-full h-screen p-4">
          <span className='xl:hidden flex items-center mb-4 cursor-pointer' label="Cerrar" onClick={onClose} >
            <Icon source={ArrowLeftIcon} />
            <Text as="p" variant="headingSm">
              {info}
            </Text>
            <Divider />
          </span>
           {options.map((option, optionIndex) => (
              <PolarisInputs 
                key={optionIndex} 
                label={option.optionLabel} 
                type={option.optionType} 
                value={option.defaultValue}
              />
            ))}
      </div>
    </>
  )
}

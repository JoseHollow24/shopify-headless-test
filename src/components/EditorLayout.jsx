import { useState } from 'react';
import { Icon, Page, Divider, Text, BlockStack } from '@shopify/polaris';
import { MinusIcon } from '@shopify/polaris-icons';
import { EditorSubmenu } from "./EditorSubmenu";
import { PagePreview } from './PagePreview';

export function EditorLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [schemaElements, setSchemaElements] = useState([
    {
      label: 'Heading',
      info: 'Heading',
      options: [
        { optionLabel: 'Texto del Titular', optionType: 'textEditor', defaultValue: 'Hola Mundo' },
        { optionLabel: 'Texto del subtitulo', optionType: 'textEditor', defaultValue: 'Bienvenido a mi prueba de shopify Headless' },
        { optionLabel: 'Css Personalizado', optionType: 'textMultiline', defaultValue: '' }
      ]
    },
    {
      label: 'Botones',
      info: 'Botones',
      options: [
        { optionLabel: 'Texto del botón', optionType: 'textEditor', defaultValue: 'Texto por defecto' },
        { optionLabel: 'Enlace del botón', optionType: 'textEditor', defaultValue: 'https://www.google.com/' },
        { optionLabel: 'Css personalizado', optionType: 'textMultiline', defaultValue: '' }
      ]
    },
  ]);

  const handleButtonClick = (buttonIndex) => {
    setActiveSubMenu(buttonIndex);
  };

  const closeMenu = () => {
    setActiveSubMenu(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionsChange = (newOptions, index) => {
    const newSchemaElements = [...schemaElements];
    newSchemaElements[index] = { ...newSchemaElements[index], options: newOptions };
    console.log(newSchemaElements)
    setSchemaElements(newSchemaElements);
  };

  return (
    <>
      <div className="relative md:flex md:h-screen">
        <div className={`
          xl:static md:relative fixed md:w-60 w-full bg-white mobile-panel  bottom-0 left-0 p-4 
          transition-transform duration-300 ease-in-out msm:overflow-scroll
          ${isOpen ? 'msm:translate-y-0' : 'msm:translate-y-28'}
        `}>
          <span className="md:hidden" onClick={toggleMenu}>
            <Icon source={MinusIcon} />
          </span>
          <BlockStack gap="500">
            <Text as="h1" variant="headingSm">
              Editor
            </Text>
            <Divider borderColor="border-inverse" />
            {schemaElements.map((schemaElement, index) => (
              <div key={index}>
                <span className="cursor-pointer text-right" onClick={() => handleButtonClick(index)} >
                  <Text as="h3" variant="headingSm" >
                    {schemaElement.label}
                  </Text>
                </span>
                {activeSubMenu === index && (
                  <EditorSubmenu
                    info={schemaElement.info}
                    options={schemaElement.options}
                    onClose={closeMenu}
                    onOptionChange={(newOptions) => handleOptionsChange(newOptions, index)}
                  />
                )}
                </div>
              ))}
            </BlockStack>
        </div>
        <div className="xl:mr-60">
          <Page>
              <PagePreview schema={schemaElements}/>
          </Page>
        </div>
      </div>
    </>
  );
}
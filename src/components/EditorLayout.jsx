import { useState } from 'react';
import {Page, Divider, Text, BlockStack} from '@shopify/polaris';

import { EditorSubmenu } from "./EditorSubmenu";

export function EditorLayout  ({ children })  {
  // estado para controlar el menú en mobile
  const [isOpen, setIsOpen] = useState(false);
  // Estado para controlar qué submenú está abierto
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Función para manejar el clic en un botón del sub menu
  const handleButtonClick = (buttonIndex) => {
    setActiveSubMenu(buttonIndex);
  };
  // Función para cerrar el submenú
  const closeMenu = () => {
    setActiveSubMenu(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const schemaElements = [
    { 
      label: 'Heading', 
      info: 'Heading', 
      options: [
        { optionLabel: 'Texto del Titular',optionType: 'textEditor', defaultValue: 'Hola Mundo' },
        { optionLabel: 'Texto del subtitulo',optionType: 'textEditor', defaultValue: 'Bienvenido a mi prueba de shopify Headless' },
        { optionLabel: 'Css Personalizado',optionType: 'textMultiline', defaultValue: '' }
      ] 
    },
    { 
      label: 'Botones', 
      info: 'Botones', 
      options: [
        { optionLabel: 'Texto del botón',optionType: 'textEditor', defaultValue: 'Texto por defecto' },
        { optionLabel: 'Enlace del botón',optionType: 'textEditor', defaultValue: 'https://www.google.com/' },
        { optionLabel: 'Usar estilo outline en el botón',optionType: 'checkbox', defaultValue: false },
        { optionLabel: 'Css personalizado',optionType: 'textMultiline', defaultValue: '' }
      ]
    },
  ];

  return (
    <>
      <div className="relative md:flex md:h-screen">
        {/* Botón de toggle */}
        <div className={`
          xl:static md:relative fixed md:w-60 w-full bg-white mobile-panel  bottom-0 left-0 p-4 
          transition-transform duration-300 ease-in-out 
          ${isOpen ? 'msm:translate-y-0' : 'msm:translate-y-28'}
        `}>
            {/* transform${isOpen ? 'translate-y-0' : 'translate-y-full'} */}
            <span className="md:hidden px-4 py-2 rounded" onClick={toggleMenu}>
              {isOpen ? 'Cerrar' : 'Abrir'}
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
                  {/* Mostrar el submenú si el botón está activo */}
                  {activeSubMenu === index && (
                    <EditorSubmenu info={schemaElement.info} options={schemaElement.options} onClose={closeMenu} />
                  )}
                </div>
              ))}
              

            </BlockStack>
        </div>
        <div className="lg:mr-80">
          <Page>
            {children}
          </Page>
        </div>
      </div>
    </>
  );
}
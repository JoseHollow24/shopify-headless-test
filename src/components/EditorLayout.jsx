import { useState } from 'react';
import {Box, Page,Layout, LegacyCard} from '@shopify/polaris';


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

  // Lista de botones
  const buttons = [
    { label: 'Botón 1', info: 'Información del botón 1' },
    { label: 'Botón 2', info: 'Información del botón 2' },
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
            {/* Renderizar los botones */}
            {buttons.map((button, index) => (
              <div key={index}>
                <button
                  onClick={() => handleButtonClick(index)}
                >{button.label}</button>
                {/* Mostrar el submenú si el botón está activo */}
                {activeSubMenu === index && (
                  <EditorSubmenu info={button.info} onClose={closeMenu} />
                )}
              </div>
            ))}
        </div>
        <div className=" lg:mr-80">
          <Page>
            {children}
          </Page>
        </div>
      </div>
    </>
  );
}
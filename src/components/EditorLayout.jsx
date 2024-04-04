import { useState } from 'react';
import {Box, Page,Layout, LegacyCard} from '@shopify/polaris';


import { EditorSubmenu } from "./EditorSubmenu";



export function EditorLayout  ({ children })  {
  // Estado para controlar qué submenú está abierto
  const [activeMenu, setActiveMenu] = useState(null);

  // Función para manejar el clic en un botón
  const handleButtonClick = (buttonIndex) => {
    setActiveMenu(buttonIndex);
  };

  // Función para cerrar el submenú
  const closeMenu = () => {
    setActiveMenu(null);
  };

  // Lista de botones
  const buttons = [
    { label: 'Botón 1', info: 'Información del botón 1' },
    { label: 'Botón 2', info: 'Información del botón 2' },
  ];

  return (
    <>
      <div className="relative flex md:h-screen">
        <div className="w-60 xl:static relative bg-white">
          <h2>Listado de Botones</h2>
            {/* Renderizar los botones */}
            {buttons.map((button, index) => (
              <div key={index}>
                <button
                  onClick={() => handleButtonClick(index)}
                >{button.label}</button>
                {/* Mostrar el submenú si el botón está activo */}
                {activeMenu === index && (
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
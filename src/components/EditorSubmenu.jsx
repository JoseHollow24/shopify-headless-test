import {Card} from '@shopify/polaris';
export function EditorSubmenu ({info, onClose}) {
  // Función para cerrar el submenú

  return (
    <> 
      <div className="absolute right-0 top-0 bg-white md:h-screen md:w-60 w-full h-screen">
          {/* Botón para cerrar el submenú */}
          <button className='xl:hidden' label="Cerrar" onClick={onClose} >cerrar</button>
          {/* Mostrar la información del botón */}
          <p>{info}</p>
      </div>
    </>
  )
}


export function PagePreview(schemaInfo) {
  return (
    <>
      {schemaInfo.schema.map((schemaElement, index) => (
        <div key={index}>
          {schemaElement.label === 'Heading' ? (
            <>
            <div style={{ cssText: schemaElement.options[2].defaultValue }}>
                <h1>{schemaElement.options[0].defaultValue}</h1>
                <h3>{schemaElement.options[1].defaultValue}</h3>
            </div>
            </>
          ) : '' }
          {schemaElement.label === 'Botones' ? (
            <div> 
              <button
                href={schemaElement.options[1].defaultValue}
                style={{ cssText: schemaElement.options[2].defaultValue }}
              >
                {schemaElement.options[0].defaultValue}
                </button>
            </div>
          ) : '' }
        </div>
      ))}
    </>
  )
}

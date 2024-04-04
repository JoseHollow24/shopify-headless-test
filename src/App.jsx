
//Compoenntes propios
import { PagePreview } from "./components/PagePreview"

// import './styles/App.css'
import './styles/output.css'
import '@shopify/polaris/build/esm/styles.css';
import { EditorLayout } from "./components/EditorLayout"

function App() {
 

  return (
    <>
      <EditorLayout>
        <PagePreview/>
      </EditorLayout>
    </>
  )
}

export default App

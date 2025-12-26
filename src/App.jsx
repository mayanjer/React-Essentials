import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data";

function App() {
  let tabContent = "Please click a button"
  function handleSelect(selectedButton) {
    tabContent=selectedButton
  }
    
   
    return (
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <ul>
              <CoreConcepts {...CORE_CONCEPTS[0]} />
              <CoreConcepts {...CORE_CONCEPTS[1]} />
              <CoreConcepts {...CORE_CONCEPTS[2]} />
              <CoreConcepts {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect("components")}>
                Components
              </TabButton>
              <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
              <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
            {tabContent}
          </section>
        </main>
      </div>
    );
  }


export default App;

// element.addEventListener(()=>{
//   console.log("Hello world")})

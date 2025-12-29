import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(EXAMPLES[selectedButton]);
  }

  let topicContent = (
    <div id="tab-content">
      <h3>{selectedTopic.title}</h3>
      <p>{selectedTopic.description}</p>
      <pre>
        <code>{selectedTopic.code}</code>
      </pre>
    </div>
  );

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((data) => <CoreConcepts {...data} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic.title === "Components"}
              onSelect={(e) => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic.title === "JSX"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic.title === "Props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic.title === "State"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {selectedTopic ? topicContent : <p>Please Select a topic</p>}
        </section>
      </main>
    </div>
  );
}

export default App;

import { useState } from 'react'
import { EXAMPLES } from '../data';
import TabButton from '../components/TabButton'


export default function Examples() {
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
    );
}
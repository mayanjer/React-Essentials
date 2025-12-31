import { useState } from 'react'
import { EXAMPLES } from '../data';
import TabButton from '../components/TabButton'
import Section from './Section';


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
      <Section title="" id="examples">
        <menu>
          <TabButton
            isSelected={selectedTopic.title === "Components"}
            onClick={(e) => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic.title === "JSX"}
            onClick={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic.title === "Props"}
            onClick={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic.title === "State"}
            onClick={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {selectedTopic ? topicContent : <p>Please Select a topic</p>}
      </Section>
    );
}

import descriptionImage from "./assets/components.png"
import { CORE_CONCEPTS } from "./data";


function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts({image, title, description}) {
  return <li>
    <p><img src={ image} alt={title} /></p>
    <h4>{title }</h4>
    <p>{description}</p>


  </li>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title="Components"
              description="Used in scenarios of reusabilty"
              image={descriptionImage}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

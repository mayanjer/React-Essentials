export default function CoreConcepts({image, title, description}) {
  return <li>
    <p><img src={ image} alt={title} /></p>
    <h4>{title }</h4>
    <p>{description}</p>


  </li>
}
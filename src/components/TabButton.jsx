export default function TabButton({ children, onSelect}) {
    
    return <li>
        <p><button onClick={onSelect}>{ children}</button></p>
    </li>
}
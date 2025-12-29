export default function TabButton({ children, onSelect, isSelected}) {
    
    return <li>
        <p><button className= {isSelected ? "active":undefined } onClick={onSelect}>{ children}</button></p>
    </li>
}
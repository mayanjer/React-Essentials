export default function TabButton({ children, isSelected, ...props}) {
    
    return <li>
        <p><button className= {isSelected ? "active":undefined } {...props}>{ children}</button></p>
    </li>
}
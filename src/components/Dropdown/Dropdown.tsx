import { useState } from "react";
import './Dropdown.style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownItem {
    title: string;
    Id : number;
}

interface Props{
    onSelected: (id: number) => void;
    onBlur?: () => void;
    items: DropdownItem[];
}

const Dropdown = ({onSelected, items, onBlur} : Props) => {
    const [current, setCurrent] = useState(items[0].title);

  return (
    <div className="dropdown">
          <button className="dropbtn">{current + " "} <FontAwesomeIcon icon={faArrowTurnDown} /></button>
          <div onBlur={onBlur} className="dropdown-content">
            {items.map((item,idx) => (
                <a key={idx} onClick={() => {
                    onSelected(item.Id);
                    setCurrent(item.title);
                }}>{item.title}</a>
            ))}
          </div>
        </div>
  )
}

export default Dropdown
import { useState } from "react";
import {
    RiArrowDownSLine,
    RiArrowRightSLine,
} from "react-icons/ri";
export function Item({ children }) {
    if (!Array.isArray(children)) {
        return <div>{children}</div>
    }
    return (
        <div className="p-accordion__item">
            {children.map(elem => elem)}
        </div>
    )
}
function List({ items }) {
    return (
        <menu className="p-accordion__body">
            {items.map(i => i)}
        </menu>
    )
}
function Accordion({ prev = false, children }) {
    const [header, ...items] = children;
    const [open, setOpen] = useState(false);
    const openClass = open ? "ac-item_open" : "";
    const container = prev ? "p-accordion__container" : "";
    const title = prev ? "p-accordion__header_title" : "p-accordion__item";
    const arrow = open ?  
    <RiArrowDownSLine className="p-accordion__arrow" /> : 
    <RiArrowRightSLine className="p-accordion__arrow" />
    return (
        <section className={`"p-accordion ${container}`}>
            <header
                className={`${title} ${openClass}`}
                onClick={() => setOpen(!open)}
            >
                {arrow}
                {header}
            </header>
            {
                open ? <List items={items} /> : null
            }
        </section>
    )
}
export default Accordion;
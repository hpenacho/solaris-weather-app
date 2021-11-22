import React from "react";
import CityList from "./CityList"
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import FormControl from "react-bootstrap/FormControl";
import cityService from '../services/CityService'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </div>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = React.useState("");

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="search"
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        child =>
                            !value || child.props.children.toLowerCase().startsWith(value)
                    )}
                </ul>
            </div>
        );
    }
);

export default function App() {
    const cities = cityService.initializeCities()
    return (
        <>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle as={CustomToggle} className="">Dropdown Button</Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                    {cities.map(city => <div key={city.id}><Dropdown.Item as="button" eventKey={city.id}>{city.name}</Dropdown.Item></div>)}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}
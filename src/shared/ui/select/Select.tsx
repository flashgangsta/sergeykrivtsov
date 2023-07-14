import React, {FC} from 'react';

interface IOptionSelect {
    value:string,
    contents:string
}

interface ISelect {
    id:string,
    name?:string,
    label?:string,
    defaultValue?:string,
    options:IOptionSelect[],
    value:string,
    onChange:Function | null
}

const Select: FC<ISelect> = ({id, name, label, defaultValue, options, value, onChange}) => {
    return (
        <>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <select
                id={id}
                name = {name}
                value = {value}
                onChange={event => onChange?.(event.target.value)}
            >
                {defaultValue ? <option selected disabled value="">{defaultValue}</option> : null }
                {options.map(option =>
                    <option value={option.value} key={option.value} >
                        {option.contents}
                    </option>
                )}
            </select>
        </>
    );
};

export default Select;
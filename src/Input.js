import React, { forwardRef, useState } from "react";
import styled from "styled-components";

const Input = forwardRef((props, ref) => {
    const currentValue = props.value;
    const [value, setValue] = useState(currentValue? currentValue:"")
    const inputChange = (e) => setValue(e.target.value);
    console.log(ref)
    return (

        <Text ref={ref} value={value} onChange={inputChange}></Text>
        
    );
});

const Text = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid lightpink;
`
export default Input;
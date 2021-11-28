import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {createDict, createDictFB} from "./redux/modules/dict"

const Add = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const text = React.useRef([]);
    const addDictList = () => {
        
        dispatch(createDictFB({word:text.current[0].value, 
                mean:text.current[1].value, exam:text.current[2].value}));
        history.goBack();
    };

    return (
        <Container>
            <Word>단어 추가하기</Word>
            <Form>
                <Label>단어</Label>
                <Input ref={(i) => text.current.push(i)}></Input>
            </Form>
            <Form>
                <Label>뜻</Label>
                <Input ref={(i) => text.current.push(i)}></Input>

            </Form>
            <Form>
                <Label>예시</Label>
                <Input ref={(i) => text.current.push(i)}></Input>
            </Form>
            <Button onClick={addDictList}>저장하기</Button>
        </Container>
    );
};

const Container = styled.div`
    border: 3px solid lightgrey;
    width: 400px;
    height: 40vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Word = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: white;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
const Label = styled.label`
    width: 100%;
    margin-bottom: 10px;
    color: white;

`
const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid lightpink;
`
const Button = styled.button`
    font-size: 20px;
    height: 40px;
    width: 120px;
    border-radius: 3px;
    /* border: none; */
    color: white;
    background-color: lightpink;
    align-self: center;
`
export default Add;
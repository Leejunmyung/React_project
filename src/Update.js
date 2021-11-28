import React, { useState } from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {updateDict ,updateDictFB} from "./redux/modules/dict"
import { useLocation } from "react-router-dom";
import Input from "./Input";

const Update = (props) => {
    const params = useParams();
    const history = useHistory();
    const dict_index = params.index;
    const dispatch = useDispatch();
    
    const wordRef = React.useRef(null);
    const meanRef = React.useRef(null);
    const examRef = React.useRef(null);

    const dict_list = useSelector((state) => state.dict.list);
    const updateWord = () => {
        dispatch(updateDictFB({word:wordRef.current.value, mean:meanRef.current.value, exam:examRef.current.value },dict_list[dict_index].id));
        history.push("/");
    }
    

    return (
        <Container>
            <Word>단어 수정하기</Word>
            <Form>
                <Label>단어</Label>
                <Input ref={wordRef} value={dict_list[dict_index].word}></Input>
            </Form>
            <Form>
                <Label>뜻</Label>
                <Input ref={meanRef} value={dict_list[dict_index].mean}></Input>

            </Form>
            <Form>
                <Label>예시</Label>
                <Input ref={examRef} value={dict_list[dict_index].exam}></Input>
            </Form>
            <Button onClick={updateWord}>수정하기</Button>
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
    color:white;
`
const Button = styled.button`
    font-size: 20px;
    height: 40px;
    width: 120px;
    border-radius: 3px;
    color: white;
    background-color: lightpink;
    align-self: center;
`
export default Update;
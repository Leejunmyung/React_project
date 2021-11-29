import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteDict, deleteDictFB } from "./redux/modules/dict"
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PublicIcon from '@material-ui/icons/Public';
import StarsIcon from '@material-ui/icons/Stars';
import Brightness4Icon from '@material-ui/icons/Brightness4';



const Home = (props) => {
    const my_lists = useSelector((state) => state.dict.list);
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <>
            {my_lists.map((list, idx) => {
                return (
                    <Box key={idx}>
                        <WordBox>
                            <h1 style={{color:"white"}}><PublicIcon/> {list.word}</h1>
                            <ButtonDiv>
                                <IconButton aria-label="delete" size="small" color ="primary">
                                <BorderColorIcon fontSize="medium" onClick={() => {
                                    history.push({
                                        pathname: "/update/" + idx,
                                    });
                                }}/>
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small" color="secondary">
                                    <DeleteForeverIcon fontSize="medium" onClick={() => {
                                    dispatch(deleteDictFB(list.id));
                                }}/>
                                    </IconButton>
                            </ButtonDiv>
                        </WordBox>
                        <h3 style={{color:"white"}}><StarsIcon fontSize="small"/>  {list.mean}</h3>
                        <p style={{ color: "lightskyblue", fontSize:"17px",verticalAlign:"middle" }}><Brightness4Icon fontSize="small"/>      {list.exam}</p>
                    </Box>
                );
            })}

        </>


    );
};
const Box = styled.div`
    position: relative;
    padding: 20px;
    width: 400px;
    height: 170px;
    border-radius: 10px;
    border: 2px solid white;
`
const WordBox = styled.div`
    display: flex;
    width: 100%;
`
const ButtonDiv = styled.div`
    position: absolute;
    top: 15px;
    right: 10px;
`
export default Home;
import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Add from './Add';
import {useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Update from './Update';
import { loadDictFB } from './redux/modules/dict';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const my_lists = useSelector((state) => state.dict.list);

  React.useEffect(async() => {
    dispatch(loadDictFB());
  }, [my_lists]);

  return (
    <div className='App'>
      <Title>
        <h1 onClick={() => {
          history.push("/")
        }}>
          My Dictionary
        </h1>
      </Title>
      <Container>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/add' exact>
          <Add />
        </Route>
        <Route path='/update/:index' exact>
          <Update />
        </Route>
      </Container>
      <AddWord>
      <IconButton aria-label="delete" size="20px" color="secondary">
      <AddCircleOutlineIcon fontSize="large" onClick={() => {
          history.push("/add")
        }}/>
      </IconButton>
        
      </AddWord>
    </div>

  );
}
const Title = styled.div`
  background-color: #363333;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
`
const Container = styled.div`
  margin: 60px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
`
const AddWord = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 35px;
  border: 1px solid red;
  text-align: center;

`

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'
import styled from 'styled-components'
import TasksList from './pages/TasksList';

const Padding = styled.div`
  padding: 30px 50px;
`
function App() {
  return (
    <Padding>
     {/*  <HomePage>

      </HomePage> */}

    {  <TasksList></TasksList>}
    </Padding>

  );
}

export default App;

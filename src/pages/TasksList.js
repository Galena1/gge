import React from 'react';
import styled from 'styled-components'

// import { Container } from './styles';
const Container = styled.div`
    width: 50%;
    height: 1024px;
    display:flex;
    flex-direction: column;
    /* align-items:center; */
`
const HeaderItem = styled.div`
    display:flex;
    flex:1;
    font-size: 14px;
    width:auto;
    justify-content:flex-end;`
    
const Header = styled.div`
    display:flex;
    width:100%;
    height:auto;
    font-size: 36px;
`
const Vvodfio=styled.div`
    width:200px;
    height:auto;
    padding-top:20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
`
const ButtonsTaskContainer = styled.div`
    display:grid;
    grid-template-rows: repeat(auto,auto);
    grid-template-columns: auto;
    grid-gap: 40px;
    padding-top:20px;
    `
const TextButton=styled.div`
    width: 247px;
    height: 22px;
    left: 142px;
    top: 258px;
`
const TextInput=styled.input`
    width: 100px;
    height: 22px;
    left: 50px;
    top: 10px;
    padding-top:5px;
`

const TestButton= styled.div`
    background: #C4C4C4;
    border-radius: 10px;
    width: 40px;
    height: 20px;
    font-size: 14px;
    justify-content:center;
    display: flex;
    align-items: center;
    text-align: center;
    `
const KlassItem = styled.div`
    display:grid;
    grid-template-columns: repeat(3,auto);
    /* grid-template-rows: auto; */
    grid-gap: 5px;
    padding-top:7px;
    /* padding-top:50px; */

`

export default function TasksList() {
  return (
    <Container>
        <Header>
            7 класс
        </Header>
        <HeaderItem>
            <Vvodfio>
                Введи фамилию <TextInput/>
            </Vvodfio>
            <Vvodfio>
                Введи имя <TextInput/>
            </Vvodfio>
            <Vvodfio>
                Выбери класс 
                <KlassItem>
                    <TestButton>
                        7а
                    </TestButton>
                    <TestButton>
                        7б
                    </TestButton>
                    <TestButton>
                        7в
                    </TestButton>
            
                </KlassItem>
         
            </Vvodfio>  
        </HeaderItem>     
        
                  
        
        <ButtonsTaskContainer>
            Целочисленное деление    
        </ButtonsTaskContainer>  
        <ButtonsTaskContainer>
            Логические выражения    
        </ButtonsTaskContainer>  
        <ButtonsTaskContainer>
            Цикл For    
        </ButtonsTaskContainer>  
        <ButtonsTaskContainer>
            Цикл While    
        </ButtonsTaskContainer>  
        <ButtonsTaskContainer>
            Цикл Repeat   
        </ButtonsTaskContainer>   
        
        <div >
         hello world
        </div>
    </Container>
  );
}


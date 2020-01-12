import React from 'react';
import styled from 'styled-components'
import pic from './../img/pic.png'
// import { Container } from './styles';
const Container = styled.div`
    width: 100%;
    height: 1024px;
    display:flex;
    flex-direction: column;
    align-items:center;
`
const Header = styled.div`
    display:flex;
    width:100%;
    height:auto;
`
const HeaderItem = styled.div`
    display:flex;
    flex:1;
    font-weight: bold;
    font-size: 24px;
    width:auto;
    justify-content:flex-end;
`
const Title = styled.div`
    font-weight: bold;
    font-size: 64px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-top:50px;
    color: #2C3692;

    opacity: 0.4;
`
const TestButton= styled.div`
    background: #C4C4C4;
    border-radius: 10px;
    width: 80px;
    height: 60px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    justify-content:center;
    display: flex;
    align-items: center;
    text-align: center;
`
const ButtonsContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(9,auto);
    grid-template-rows: auto;
    grid-gap: 40px;
    padding-top:50px;
`

const TextTeacher=styled.div`
    width: 536px;
    height: 29px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-top:50px;
    color: #000000;
`
const Picture=styled.img`
    padding-top:50px;
`
export default function HomePages() {
    return (
        <Container>
            <Header>
                <HeaderItem style={{ justifyContent: "flex-start" }} >
                    МАОУ Саха политехнический лицей г.Якутск
                </HeaderItem>
                <HeaderItem >
                    учитель Герасимова Г.Е.
                </HeaderItem>
            </Header>
            <Title>
                Домашки по информатике
            </Title>
            <ButtonsContainer>
                <TestButton>
                5
                </TestButton>
                <TestButton>
                6
                </TestButton>
                <TestButton>
                7
                </TestButton>
                <TestButton>
                8
                </TestButton>
                <TestButton>
                9
                </TestButton>
                <TestButton>
                ОГЭ
                </TestButton>
                <TestButton>
                10
                </TestButton>
                <TestButton>
                11
                </TestButton>
                <TestButton>
                ЕГЭ
                </TestButton>
                
            </ButtonsContainer>
            
            <TextTeacher>
                Выбираем класс и выполняем домашки!
            </TextTeacher>
            <Picture src={pic}/>

        </Container>
    );
}


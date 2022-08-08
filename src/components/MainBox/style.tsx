import styled from 'styled-components';


export const MainBox = styled.div`
{
    display: flex;
    flex-direction: column;
    background-color: white;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 0;
    border-radius: 0 0 10px 10px;
    justify-content: center;
    align-items: center;
}
`

export const Text = styled.p`
    text-align: center;
    font-size: 32px;

`

export const NumberInput = styled.input`
    width: 50%;
    height: 20px;
    margin: 15px 0;
`

export const Button = styled.button`
    background-color: purple;
    color: white;
    font-size: 20px;
    height: 50px;
    width: 20%;
    border-radius: 15px;
`
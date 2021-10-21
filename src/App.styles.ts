import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    align-items: center;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    
    
`

export const Box = styled.div`
    width: 20%;
    padding: 20px;
    box-sizing: border-box;
    display: block;
    border-radius: 2px;
    height: 250px;
    border: 1px solid #DCDCDC;

    h3{
        margin:28px 0 ;
        font-weight: bold;
    }

    span{
        font-weight: lighter;
        display:block;
        font-size: 14px;
        font-style: normal;
        line-height: 20px;
        margin-bottom: 20px;
    }
`
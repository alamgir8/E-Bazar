import styled from 'styled-components';



export const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    width : 100%;
    height : 100%;
    border-radius : 20px;
    border : 1px solid lightblue;

    button{
        border-radius : 0 0 20px 20px;
    }

    img{
        max-height : 250px;
        object-fit : cover;
        border-radius : 0 0 20px 20px;
    }
    div{
        font-family : Arial, Helvetica, sans-serif;
        padding : 1rem;
        height : 100%
    }
`;
import styled from "styled-components";

export const Wrapper = styled.div`
    display : flex;
    justify-content : space-between;
    border-bottom : 1px solid lightblue;
    padding : 20px 0;

    div{
        flex : 1;
    }

    .information, .buttons{
        display : flex;
        justify-content : space-between;
    }
    
    img{
        max-width : 40px;
        object-fit : cover;
        margin-left : 40px
    }
`
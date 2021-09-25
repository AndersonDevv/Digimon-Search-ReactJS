import styled from "styled-components";

const HomeArea = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width:100%;
    position:absolute;
    background-color: #ccc;
    height:calc(100vh - 6vh - 10vh);

    img{
        width: 300px;
        height: 200px;
    }
`;

export default HomeArea;
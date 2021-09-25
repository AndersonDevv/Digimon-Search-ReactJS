import styled from 'styled-components';

const FooterArea = styled.div`
    bottom:0;
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    height: 6vh;
    width:100%;
    background-color:#343A40;
    color: #fff;

    h3{
        font-size: clamp(1.25vw + 0.1rem, 1.27vw + 0.1rem, 1.28vw + 0.1rem);
    }
`;

export default FooterArea;
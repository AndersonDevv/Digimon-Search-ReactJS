import styled from 'styled-components';

const HeaderArea = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #092C62;
    img{
        width: 100px;
        height: 100%;
    }
    .container{
        width:100%;
        height: 100%;
        display:flex;
        justify-content: space-between;
        align-items:center;
        box-sizing:border-box;
        padding: 0 30px 0 30px;
        //top right bottom left;
    }

    ul{
        display:flex;
        list-style:none;
        gap: 2rem;
        a{
            text-decoration:none;
            color: #fff;

            &:hover{
                cursor: pointer;
                color: #f2b604;
            }
            
        }
    }

`;

export default HeaderArea;
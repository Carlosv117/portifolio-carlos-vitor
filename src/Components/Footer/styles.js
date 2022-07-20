import styled from "styled-components";

export const FooteR = styled.footer`
    background-color: rgb(13, 17, 27);
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;

    #icons{
        display: flex;
        align-items: center;
        padding-bottom: 20px;

        figure{
            width: 30px;
            cursor: pointer;

            img{
                width: 100%;
            }
        }

        h2{
            padding: 0 30px;
        }
    }

    div{
        
        p{
            text-align: center;
        }
    }

    @media (min-width: 840px) {

            padding-top: 0;
    }
`
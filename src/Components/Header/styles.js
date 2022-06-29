import styled from "styled-components";

export const HeaderMobile = styled.header`
    display: flex;    align-items: center;
    justify-content: space-between;
    background-color: var(--Black-1);
    padding-right: 20px;

    #logo{
        width: 80px;

        img{
            width: 100%;
        }
    }

    figure{
        width: 40px;

        img{
            width: 100%;
        }
    }

    div{
        position: fixed;
        top: 0;
        left: 35%;
        width: 65%;
        height: 100%;
        overflow: hidden;
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--Black-1);
        border-left: solid 2px var(--White);
        border-top: solid 2px var(--White);
        border-bottom: solid 2px var(--White);
        border-radius: 230px 0px 0px 230px;

        nav{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            color: white;
            a{
                position: relative;
                color: var(--White);
                text-shadow: 4px 10px 13px var(--Color-primary);
                text-decoration: none;
                padding: 0px 5px;
                font-size: 24px;
            }
            a:after{
                content: "";
                position: absolute;
                background-color: var(--Color-primary);
                height: 3px;
                width: 0;
                left: 0;
                bottom: -10px;
                transition: 0.3s;
            }
            a:hover:after{
                 width: 100%;
            }
        }

        figure{
                img{
                width: 30px;
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
            }
        }
    }
`

export const HeaderDesktop = styled.header`

`
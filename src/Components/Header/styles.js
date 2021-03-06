import styled from "styled-components";

export const HeaderMobile = styled.header`
    display: flex;    align-items: center;
    justify-content: space-between;
    background-color: var(--Black-1);
    padding-right: 20px;
    height: 80px;
    position: fixed;
    z-index: 3;
    width: 100%;

    #logo{
        width: 80px;
        cursor: pointer;

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
        border-radius: 100px 0px 0px 100px;

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

    @media (min-width: 425px) {
        div{
            left: 45%;
            width: 55%;
        }
    }

    @media (min-width: 565px) {
        div{
            left: 55%;
            width: 45%;
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
`

export const HeaderDesktop = styled.header`
    display: none;    
    align-items: center;
    justify-content: space-between;
    background-color: var(--Black-1);
    padding-right: 20px;
    position: fixed;
    z-index: 3;
    width: 100%;

    #logo{
        width: 80px;
        cursor: pointer;

        img{
            width: 100%;
        }
    }

    nav{
        a{
                position: relative;
                color: var(--White);
                text-decoration: none;
                margin: 0 10px;
                padding: 0px 15px;
                font-size: 16px;
                cursor: pointer;
        }
            a:after{
                content: "";
                position: absolute;
                background-color: var(--Color-primary);
                height: 3px;
                width: 0;
                left: 0;
                bottom: -10px;
                transition: 0.5s;
            }
            a:hover:after{
                width: 100%;
            }
    }

    @media (min-width: 768px) {
        display: flex;
    }

    @media (min-width: 1024px) {
        
        padding-right: 40px;
        padding-left: 20px;
    }

    @media (min-width: 1440px) {

        #logo{
            width: 100px;

        }

        nav{

            a{
                font-size: 20px;
            }
        }
    }
`
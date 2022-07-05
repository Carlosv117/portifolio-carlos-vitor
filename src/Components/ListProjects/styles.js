import styled from "styled-components";

export const UL = styled.ul`
    display: flex;
    max-width: 100vw;
    overflow: visible;
    overflow-x: scroll;

    a{
        text-decoration: none;

        li{
            
            background-color: var(--Grey-2);
            border: 5px solid var(--Grey-2);
            border-radius: 20px;
            box-sizing: border-box;
            height: 326px;
            margin-left: 12px;
            width: 255px;
        
            figure{
                align-items: center;
                background: black;
                display: flex;
                height: 170px;
                justify-content: center;
                width: 245px;
                border-radius: 20px;

                img{
                    border-radius: 20px;
                    height: 100%;
                    width: 100%;
                    border: solid 3px var(--Color-primary);
                }
            }

            div{
                align-items: flex-start;
                display: flex;
                flex-direction: column;
                padding: 20px;

                h4{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 30px;
                    width: 90px;
                    position: relative;
                    top: -35px;
                    background-color: var(--Grey-2);
                    color: var(--White);
                    border: solid 2px var(--Color-primary);
                    border-radius: 15px;
                }

                p{
                    font-size: 22px;
                    position: relative;
                    top: -15px;
                }

                span{
                    font-size: 12px;
                    position: relative;
                    top: -5px;
                }
            }
        }
        li:hover{
            /* background-color: var(--White-1); */
            border: 5px solid var(--White-1);

            figure{

                img{
                    border: none;
                }
            }

            div{

                h4{
                    border: solid 3px var(--Color-primary);
                }
            }
        }
    }

    @media (min-width: 540px){
        overflow-y: auto;
        overflow-x: auto;
        flex-wrap: wrap;
        height: 640px;
        justify-content: space-evenly;

        a{

            li{
                margin-bottom: 10px;
            }
        }
    }

    @media (min-width: 768px){
        height: 100%;
        justify-content: center;
        max-width: 1020px;

        a{

            li{
                margin: 20px;
                width: 300px;
                height: 370px;

                figure{
                    width: 100%;
                    height: 200px;
                }

                div{

                    p{
                        font-size: 24px;
                        position: relative;
                        top: -15px;
                    }

                    span{
                        font-size: 14px;
                        position: relative;
                        top: -5px;
                    }
                }
            }
        }
    }

    @media (min-width: 1440px){
        max-width: 1100px;

        a{

            li{
                width: 325px;
                height: 390px;

                figure{
                    height: 210px;
                }

                div{

                    span{
                        font-size: 16px;
                    }
                }
            }
        }
    }
`
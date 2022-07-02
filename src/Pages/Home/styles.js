import styled from "styled-components";

export const Main = styled.main`
    background-color: var(--Black-1);
    
    h1{
        color: var(--White);
        border-bottom: 5px solid var(--Color-primary);
        border-radius: 4px 14px;
        font-weight: bold;
        font-size: 26px;
        align-self: flex-start;
        margin-left: 5%;
        margin-bottom: 30px;
        padding: 0 10px;
    }

    .h1{
        width: 100%;
    }

        .home{

            height: 600px;
            
            video, #text{
                position: absolute;
                width: 100%;
            }

            video{
                z-index: 1;
                height: 600px;
                object-fit: cover;
            }

            div{
                z-index: 2;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 30px;

                #text{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    height: 100px;
                    margin-bottom: 50px;
        
                    h2{
                        font-size: 22px;
                        padding-bottom: 12px;
                    }
        
                    span{
                        font-weight: bold;
                        font-size: 14px;
                        color: var(--Color-primary);
                    }
                }
        
                #phone{
                    height: 50%;
                    padding-left: 10px;
        
                    figure{
        
                        img{
                            width: 270px;
                        }
                    }
                    div{
                        padding-left: 0;
                        padding-right: 10px;
                        flex-direction: row;
                        justify-content: space-evenly;
                        width: 100%;
                        figure{

                            img{
                                width: 40px;
                            }
                        }
                    }
                }
            }

        }
        div{
            display: flex;
            flex-direction: column;
            align-items: center;

            section{
                width: 100%;
                /* max-width: 600px; */
                padding: 20px 0;
                margin-bottom: 20px;
            }

            .about{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 40px;

                h1{
                    padding-bottom: 0;
                }

                div{


                    #video{
                        padding: 20px 0;
                        
                        video{
                            width: 100%;
                            max-width: 400px;
                        }
                    }

                    div{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 20px 20px;
                        max-width: 400px;
                        
                        h2{
                            padding: 25px 0;
                            font-weight: 600;
                            font-size: 22px;
                        }

                        p{
                            color: var(--White-1);
                        }

                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 1px solid var(--White);
                            background: var(--Color-primary);
                            width: 150px;
                            height: 40px;
                            font-size: 20px;
                            cursor: pointer;
                            color: var(--White);
                            transition: 0.5s;
                            position: relative;
                            overflow: hidden;
                            border-radius: 7px;
                            margin-top: 25px;
                            text-decoration: none;
                            :hover{
                                background-color: transparent;
                                color: var(--White);
                                border: 1px solid var(--Color-primary);
                            }
                        }
                    }

                }

            }

            .tecnologies{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px 0;

                .h1{
                    justify-content: flex-start;
                    padding: 0;
                }

                h1{
                    margin-left: 5%;
                    margin-bottom: 30px;
                }

                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 20px;
                    width: 100%;

                    div{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                        background-color: var(--Grey-2);
                        border-radius: 20px;
                        margin-bottom: 20px;
                        padding: 10px 0;
                        max-width: 360px;

                        figure{
                            width: 170px;

                            img{
                                width: 100%;
                            }
                        }

                        h3{
                            font-weight: bold;
                            font-size: 24px;
                            padding: 10px 0;
                        }

                        span{
                            font-size: 14px;
                            padding: 3px 0;
                            color: var(--White-1);
                        }
                    }
                }
            }

            .qualifications{
                display: flex;
                flex-direction: column;
                align-items: center;

                .carousel-root{
                    width: 90%;
                }
            }

            .projects{
                display: flex;
                flex-direction: column;
                align-items: center;

                h1{

                }

                .carousel-root{
                    width: 90%;
                }
            }
        }

        .contact{
            display: flex;
            flex-direction: column;
            align-items: center;

            h1{
                z-index: 1;
                padding-top: 40px;
            }

            video{
                width: 100%;
                position: absolute;
                height: 600px;
                object-fit: cover;
            }
        }

    .MuiInputLabel-root{
        color: var(--White);
    }
    .MuiOutlinedInput-notchedOutline{
        border-color: var(--White);
    }
    .css-6m3mwv-MuiButtonBase-root-MuiButton-root-MuiLoadingButton-root.MuiLoadingButton-loading{
        border: 1px solid var(--White);
        width: 150px;
        height: 40px;
        margin: 10px;
        font-size: 20px;
        border-radius: 7px;
        transition: 0.5s;
        position: relative;
    }
    .css-bezhnd{
        border: 1px solid var(--White);
        width: 150px;
        height: 40px;
        margin: 10px;
        font-size: 20px;
        border-radius: 7px;
        transition: 0.5s;
        position: relative;
    }
    .css-bezhnd.MuiLoadingButton-loading{
        border: 1px solid var(--White);
        width: 150px;
        height: 40px;
        margin: 10px;
        font-size: 20px;
        border-radius: 7px;
        transition: 0.5s;
        position: relative;
    }
    .MuiLoadingButton-root{
        border: 1px solid var(--White);
        width: 150px;
        height: 40px;
        margin: 10px;
        font-size: 20px;
        border-radius: 7px;
        transition: 0.5s;
        position: relative;
    }
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
        color: var(--White);
        width: 95%;
    }
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
        -webkit-tap-highlight-color: white
    }
    .css-1x5jdmq{
        color: var(--White);
        -webkit-tap-highlight-color: var(--White);
        width: 95%;
    }
    .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input{
        color: var(--White);
    }
    .MuiBox-root{
        width: 100%;
        max-width: 400px;
    }
    .MuiFormControl-root, .MuiInputLabel-root, .MuiOutlinedInput-root{
        width: 100%;
    }


    @media (min-width: 840px) {

        h1{
            font-size: 30px;
            margin-bottom: 60px;
            margin-top: 30px;
        }

        .home{

            div{
                flex-direction: row;
                padding-top: 50px;

                #text, #phone{
                    margin: 0 20px;
                    padding: 0;
                }

                #text{
                    width: 330px;

                    h2{
                        font-size: 26px;
                    }

                    span{
                            font-size: 16px; 
                        }
                }

                #phone{
                    flex-direction: column;
                    margin-top: 30px;
                }
            }
        }

        div{

            .about{
                
                div{
                    flex-direction: row;

                    div{
                        margin: 0 15px;

                        h2{
                            font-size: 26px;
                        }

                        p{
                            font-size: 16px; 
                        }
                    }
                }
            }

            .tecnologies{

                h1{
                    margin-bottom: 60px;
                }

                div{
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;

                    div{
                        margin: 0 4%;
                    }
                }
            }
        }

        .contact{
            height: 700px;

            video{
                height: 700px;
            }
        }
    }

    @media (min-width: 1024px) {

        .h1{
            max-width: 1000px;
        }

        div{

            .qualifications, .projects{

                div{

                    .carousel-root{
                        max-width: 1000px;
                    }
                }
            }
        }
    }

    @media (min-width: 1440px) {

        .h1{
            max-width: 1400px;
            justify-content: flex-start;

            h1{
                font-size: 40px;
            }
        }

        .home, .home video{
            height: 750px;
        }

        .home{

            div{

                #text, #phone{
                    margin: 0 120px;
                }

                #text{
                    width: 430px;

                    h2{
                        font-size: 40px;
                    }

                    span{
                        font-size: 24px;
                    }
                }

                #phone{
                    flex-direction: column;

                    figure{

                        img{
                            width: 340px;
                        }
                    }

                    div{
                        figure{

                            img{
                                width: 60px;
                            }
                    }

                    }
                }
            }
        }

        div{

            .about{

                .h1{
                    justify-content: flex-start;
                }

                div{
                    width: 100%;
                    justify-content: center;

                    #video{
                        width: 100%;
                            
                        video{
                            max-width: 600px;
                        }
                    }

                    div{
                        max-width: 750px;
                        width: 90%;

                        h2{
                            font-size: 35px;
                        }

                        p{
                            font-size: 22px;
                        }
                    }
                }
            }

            .tecnologies{

                div{

                    div{
                        max-width: 480px;

                        figure{
                            width: 250px;
                        }

                        h3{
                            font-size: 30px;
                        }

                        span{
                            font-size: 22px;
                        }
                    }
                }
            }

            .qualifications, .projects{

                div{

                    .carousel-root{
                        max-width: 1000px;
                    }
                }
            }
        }

        #form{
            max-width: 700px;

            .MuiBox-root{

                button{
                    width: 200px;
                    height: 50px;
                }
            }
        }

    }
`
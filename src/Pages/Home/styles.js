import styled from "styled-components";

export const Main = styled.main`
    background-color: var(--Black-1);
    
    h1{
        color: var(--Color-primary);
        font-weight: bold;
        font-size: 26px;
        align-self: flex-start;
        padding-left: 20px;
        padding-bottom: 30px;
    }

        #home{

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

                #text{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    height: 100px;
                    margin-bottom: 50px;
        
                    h2{
                        font-size: 22px;
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
                max-width: 600px;
                padding: 20px 0;
            }

            #about{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 40px;

                h1{
                    padding-bottom: 0;
                }

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
                        padding: 15px 0;
                    }
                }

            }

            #tecnologies{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px 20px;

                h1{
                    padding-left: 0;
                    padding-bottom: 30px;
                }

                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    background-color: var(--Grey-2);
                    border-radius: 20px;
                    margin-bottom: 20px;
                    padding: 10px 0;
                    max-width: 300px;

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
                    }
                }
            }

            #qualifications{
                display: flex;
                flex-direction: column;
                align-items: center;

                div{
                    max-width: 600px;
                }
            }

            #projects{

            }

    }
`
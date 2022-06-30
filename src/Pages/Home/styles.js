import styled from "styled-components";

export const Main = styled.main`
    

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
    
                h1{
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

    #about{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--Black-1);

        #video{
            padding: 0;
            
            video{
                width: 100%;
                max-width: 400px;
            }
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 20px;
            max-width: 400px;
            
            p{
                text-align: -webkit-center;
                text-align: center;
            }
        }

}
`
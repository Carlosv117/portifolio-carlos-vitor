import styled from "styled-components";

export const Button = styled.button`
            border: 1px solid var(--Color-primary-focus);
            background: none;
            width: 150px;
            height: 40px;
            font-size: 20px;
            cursor: pointer;
            color: var(--Color-primary-focus);
            transition: 0.5s;
            position: relative;
            overflow: hidden;
            border-radius: 7px;
            margin: 10px;
        :hover{
            background-color: var(--Color-primary-focus);
            color: var(--White);
        }
`
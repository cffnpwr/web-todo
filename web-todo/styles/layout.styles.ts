import { css } from "@emotion/react";

export const outline = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
`

export const loginCard = css`
    padding: 2em;
    background-color: #fff;
    border: 0;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: node;
`

export const loginButton = css`
    padding: 16px 36px;
    border: solid;
    border-color: #e3f1fc;
    border-radius: 9999px;
    background-color: #eaf4fc;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, .1));
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #cae6fc;
    }
`

export const loginGIcon = css`
    margin-right: 0.7rem;
    align-items: center;
    justify-content: center;
`

export const title = css`
    @media (min-width: 768px) {
        font-size: 3rem;
    }
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
`

export const titleBr = css`
    @media (min-width: 768px) {
        display: none;
    }
`

export const titleSub = css`
    @media (min-width: 768px) {
        font-size: 2rem;
    }
    font-size: 1rem;
    margin-top: 0.25rem;
`
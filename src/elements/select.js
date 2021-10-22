import styled, {css} from 'styled-components';

export default styled.select`
    width: 60px;
    height: 34px;
    border: 1.5px;
    border-radius: 4px;
    box-shadow: 0 2.5px 0 2.5px rgba(0,0,0,0.05);
    background: #FFFFFF;
    ${(props) =>
        props.background &&
        css`
        background:${(props) => props.background};
    `}
    font-family: 'Roboto';
    font-style: 'normal';
    font-size: 14px;
    color: black;
}
`;
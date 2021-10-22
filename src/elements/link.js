import styled, {css} from 'styled-components';

export default styled.a`
    width: 80px;
    height: 34px;
    border: 1.5px solid white;
    border-radius: 5px;
    margin: 8px;
    padding: 7px 30px;
    font-family: 'Roboto';
    font-style: 'normal';
    font-size: 14px;
    color: white;
    &:hover{
        text-decoration:underline;
    }
    ${(props) =>
        props.color &&
        css`
        color:${(props) => props.color};
    `}
`;
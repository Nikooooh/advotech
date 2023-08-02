import styled from 'styled-components';

const Input = styled.input`
    color: Black;
    font-size: 20px;
    width: 28%;
    padding: 20px 10px 20px;
    text-align: center;
    background-color: White;
    border: none;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
        width:80%;
      }
`

export default Input;
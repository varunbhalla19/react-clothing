import styled, { css } from "styled-components";


const typeStyle = css`
  ${({ googleButton, inverted }) => {
    if (googleButton) {
      return `
        color: white;
        background-color: blue;
      `;
    }
    if (inverted) {
      return `
        color: black;
        background-color: white;
        border: 1px solid black;
        `;
    }
    return `background-color: black;
            color: white;
            `;
  }}
`;

const hoverStyle = css`
  ${({ googleButton, inverted }) => {
    if (googleButton) {
      return `
          color: blue;
          background-color: white;
          border: 1px solid blue;
          `;
    }
    if (inverted) {
      return `
        background-color: black;
        color: white;
        border: 1px solid transparent;
        `;
    }
    return `
    color: black;
    background-color: white;
    border: 1px solid black;
    `;
  }}
`;

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.75rem 1rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: 1px solid transparent;

  ${typeStyle}

  &:hover {
    ${hoverStyle}
  }
`;

export {StyledButton} ;

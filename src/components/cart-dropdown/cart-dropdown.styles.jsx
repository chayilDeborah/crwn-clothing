import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const  CartDropdownContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    .empty-message {
      font-size: 18px;
      margin: auto;
    }
`;
export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;

export const CartItemsContainer = styled.div`
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: auto;
`;
export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: auto;
`;

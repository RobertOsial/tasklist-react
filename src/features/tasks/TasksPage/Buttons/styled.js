import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   gap: 20px;
   flex-wrap: wrap;
   justify-content: flex-end;

   @media(max-width: ${({theme}) => theme.breakpoint.mobileSmall}px) {
       gap: 5px;
   }
`;
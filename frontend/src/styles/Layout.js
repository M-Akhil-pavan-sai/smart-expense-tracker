import styled from "styled-components";

export const MainLayout = styled.div`
padding:2rem;
height:100%;
display:flex;
gap:2rem;
@media only screen and (max-width: 1200px) {
  flex-direction: column;
}
`;

export const InnerLayout = styled.div`
padding:2rem 1.5rem;
width:100%
`;

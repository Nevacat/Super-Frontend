import styled from "@emotion/styled";

export const Layout = styled.div`
  @media (min-width: 810px) {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 360px auto;
    justify-content: center;
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
  overflow-y: scroll;
  margin: 0 auto;
  width: 360px;
  height: 100vh;
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 420px) {
    //모바일 대응
    width: 100vw;
    max-width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
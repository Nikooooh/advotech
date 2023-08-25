import styled from "styled-components";
import banner from "../../Imagens/banner.png";

const ContainerBanner = styled.div`
  display: flex;
  background-color: green;
`;
function Banner() {
  return (
    <ContainerBanner>
      <img src={banner} alt="banner advogado alecio trevisan"></img>
    </ContainerBanner>
  );
}

export default Banner;

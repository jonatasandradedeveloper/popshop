import styled from 'styled-components/native';

export const ContainerProduto = styled.View`
  /* flex: 1; */
  flex-direction: column;
  margin: 20px;
`;

export const Input = styled.TextInput`
  font-size: 27px;
  text-align: center;
  width: 100%;
  padding: 20px;
  border-bottom-color: #000;
  border-bottom-width: 1px;
  border-top-color: #000;
  border-top-width: 1px;
`;

export const Menu = styled.View`
  flex-direction: row;
  margin-top: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Itens = styled.TouchableOpacity`
  margin-bottom: 30px;
`;

export const TextItem = styled.Text`
  margin-right: 2px;
  font-size: 15px;
`;

export const ContainerCapa = styled.View`
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 15px;
  max-height: 370px;
`;

export const CapaProduto = styled.Image`
  width: 100%;
  max-height: 300px;
  border-radius: 30px;
`;

export const ButtonCar = styled.TouchableOpacity`
  background: #00ff7e;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: -40px;
  border-radius: 100px;
`;

export const ImageCar = styled.Image`
  width: 40px;
`;

export const ContainerSobre = styled.View`
  border-width: 1px;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #0174E7;
`;

export const TitleSub = styled.Text`
  font-size: 15px;
  color: #0174E7;
`;

export const ItensSobre = styled.View`
  flex-direction: row;
`;

export const CategoriaSobre = styled.TouchableHighlight`
  background: #9e9e9e;
  margin: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
`;

export const TextCategoria = styled.Text`
  color: #FFF;
`;

export const TitleSobre = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 30px;
`;

export const SobreText = styled.Text`
  margin-top: 30px;
  font-size: 16px;
  color: #000;
  line-height: 22px;
`;

export const PrincipalFaixa = styled.View`
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 20px;
`;

export const TitleFaixa = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ff779b;
  margin-bottom: 20px;
`;

export const Faixas = styled.View`
  flex-direction: row;
  align-content: center;
  align-items:center;
  justify-content: space-between;
  margin-top: 10px;
  color: #000;
  padding: 10px;
`;

export const Play = styled.TouchableOpacity`
  border-width: 1px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 100px;
  margin-top: -8px;
`;

export const ImagePlay = styled.Image`
  width: 12px;
  /* margin-top: 3px; */
`;

export const Music = styled.Text`

`;

export const Minutes = styled.Text`

`;

export const Grafics = styled.Image`
  width: 30px;
  margin-top: -10px;
`;

export const ContainerCarrosel = styled.View`
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 30px;
`;

export const TitleCarrosel = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #ff779b;
  text-align: center;

`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 30 },
  showsHorizontalScrollIndicator: true,
})``;

export const AlbumItem = styled.TouchableOpacity`
  width: 300px;
  margin-top: 30px;
  /* height: 100px; */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-right: 30px;
  margin-top: 20px;
  padding: 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const ImageAlbum = styled.Image`
  width: 80%;
  border-radius: 20px;
`;

export const TabName = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const TabArtist = styled.Text`
  text-align: center;
  font-size: 17px;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const FooterText = styled.Text`
  text-align: center;
`;
import React from 'react';
import { StyleSheet, ScrollView } from "react-native";
import capa from "../../assets/image/produto.png";
import carshop from "../../assets/image/car.png";
import play from "../../assets/image/play.png";
import grafics from "../../assets/image/grafics.png";
import imagemAlbum from "../../assets/image/album.png"
import 
{ 
  ContainerProduto, 
  Input, 
  Menu, 
  Itens, 
  TextItem, 
  ContainerCapa, 
  CapaProduto, 
  ButtonCar, 
  ImageCar,
  ContainerSobre,
  Title,
  TitleSub,
  ItensSobre,
  CategoriaSobre,
  TextCategoria,
  TitleSobre,
  SobreText,
  PrincipalFaixa,
  Faixas,
  TitleFaixa,
  Play,
  Music,
  Minutes,
  Grafics,
  ImagePlay,
  ContainerCarrosel,
  TitleCarrosel,
  TabsContainer,
  AlbumItem,
  ImageAlbum,
  TabName,
  TabArtist,
  Footer,
  FooterText
 } from '../Produto/ProdutoStyles';

export default function Produto({ navigation }) {
  return (
    <ScrollView pagingEnable={true}>
      <ContainerProduto>
      <Input  
      placeholder="Digite sua pesquisa..."
      autoCapitalize= "none"
      autoCorrect={false}
      placeholderTextColor= "#999"
      />
      <Menu>
        <Itens>
        <TextItem>HOME /</TextItem>
        </Itens>
        <Itens>
        <TextItem>GÊNERO /</TextItem>
        </Itens>
        <Itens>
        <TextItem>POP /</TextItem>
        </Itens>
        <Itens>
        <TextItem>COLORING BOOK</TextItem>
        </Itens>
      </Menu>
      <ContainerCapa>
        <CapaProduto source={capa} />
        <ButtonCar onPress={() => navigation.navigate('Ckeckout')}>
          <ImageCar style={{ resizeMode: 'contain'}} source={carshop} />
        </ButtonCar>
      </ContainerCapa>
      <ContainerSobre>
        <Title>COLORING BOOK</Title>
        <TitleSub>CHANGE THE RAPPER / POP / 2017</TitleSub>
        <ItensSobre>
          <CategoriaSobre>
            <TextCategoria>CD</TextCategoria>
          </CategoriaSobre>
          <CategoriaSobre>
          <TextCategoria>VINIL</TextCategoria>
          </CategoriaSobre>
          <CategoriaSobre>
           <TextCategoria>K7</TextCategoria>
          </CategoriaSobre>
        </ItensSobre>
        <TitleSobre>SOBRE</TitleSobre>
        <SobreText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </SobreText>
      </ContainerSobre>
      <PrincipalFaixa>
        <TitleFaixa>PRINCIPAIS FAIXAS</TitleFaixa>
        <Faixas style={{backgroundColor: '#e5e5e5',paddingTop: 10, borderRadius: 20,}}>
          <Play>
          <ImagePlay source={play} style={{resizeMode: 'contain'}} />
          </Play>
          <Music>Name Music</Music>
          <Minutes>00:00</Minutes>
          <Grafics source={grafics} style={{resizeMode: 'contain'}} />
        </Faixas>
        <Faixas>
          <Play>
          <ImagePlay source={play} style={{resizeMode: 'contain'}} />
          </Play>
          <Music>Name Music</Music>
          <Minutes>00:00</Minutes>
          <Grafics source={grafics} style={{resizeMode: 'contain'}} />
        </Faixas>
        <Faixas>
          <Play>
          <ImagePlay source={play} style={{resizeMode: 'contain'}} />
          </Play>
          <Music>Name Music</Music>
          <Minutes>00:00</Minutes>
          <Grafics source={grafics} style={{resizeMode: 'contain'}} />
        </Faixas>
        <Faixas>
          <Play>
          <ImagePlay source={play} style={{resizeMode: 'contain'}} />
          </Play>
          <Music>Name Music</Music>
          <Minutes>00:00</Minutes>
          <Grafics source={grafics} style={{resizeMode: 'contain'}} />
        </Faixas>
        <Faixas>
          <Play>
          <ImagePlay source={play} style={{resizeMode: 'contain'}} />
          </Play>
          <Music>Name Music</Music>
          <Minutes>00:00</Minutes>
          <Grafics source={grafics} style={{resizeMode: 'contain'}} />
        </Faixas>
        <Faixas>
          <Play>
          <ImagePlay source={play} style={{resizeMode: 'contain'}} />
          </Play>
          <Music>Name Music</Music>
          <Minutes>00:00</Minutes>
          <Grafics source={grafics} style={{resizeMode: 'contain'}} />
        </Faixas>
        <Faixas>
          <Play>
          <ImagePlay source={play} style={{resizeMode: 'contain'}} />
          </Play>
          <Music>Name Music</Music>
          <Minutes>00:00</Minutes>
          <Grafics source={grafics} style={{resizeMode: 'contain'}} />
        </Faixas>
      </PrincipalFaixa>
      <ContainerCarrosel>
        <TitleCarrosel>VOCÊ TAMBÉM PODE GOSTAR</TitleCarrosel>
        <TitleCarrosel>DESSES ÁLBUNS TAMBÉM!</TitleCarrosel>
        <TabsContainer>
          <AlbumItem>
            <ImageAlbum source={imagemAlbum} />
            <TabName>NAME ALBUM</TabName>
            <TabArtist>NAME ARTIST</TabArtist>
          </AlbumItem>
          <AlbumItem>
            <ImageAlbum source={imagemAlbum} />
            <TabName>NAME ALBUM</TabName>
            <TabArtist>NAME ARTIST</TabArtist>
          </AlbumItem>
          <AlbumItem>
            <ImageAlbum source={imagemAlbum} />
            <TabName>NAME ALBUM</TabName>
            <TabArtist>NAME ARTIST</TabArtist>
          </AlbumItem>
          <AlbumItem>
            <ImageAlbum source={imagemAlbum} />
            <TabName>NAME ALBUM</TabName>
            <TabArtist>NAME ARTIST</TabArtist>
          </AlbumItem>
        </TabsContainer>
      </ContainerCarrosel>
      <Footer>
        <FooterText>Pop Shop LTDA Todos os direitos reservados</FooterText>
      </Footer>
    </ContainerProduto>
    </ScrollView>
    );
}
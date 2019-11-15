import React, { Component } from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
import CheckBox from 'react-native-check-box'

import capa from "../../assets/image/produto.png";
import edit from "../../assets/image/edit.png";
import bell from "../../assets/image/bell.png";

import visa from "../../assets/image/visa.png";
import master from "../../assets/image/master.png";
import express from "../../assets/image/express.png";
import discover from "../../assets/image/discover.png";


import concluir from "../../assets/image/concluir.png";

import { 
  ContainerCkeckout, 
  Input, 
  Menu, 
  Itens, 
  TextItem,
  ContainerSobre,
  Title,
  ImageEdit,
  TitleSub,
  ItensSobre,
  CategoriaSobre,
  ContainerTitle,
  TextCategoria,
  TitleSobre,
  SobreText,
  ContainerUser,
  TitleUser,
  TextContato,
  ContainerEmail,
  Sino,
  ContainerFret,
  ContainerPag,
  ContainerPreco,
  Description,
  Valor,
  Pagamento,
  ContainerBandeira,
  Bandeira,
  ItemBandeira,
  ContainerMetodo,
  ContainerCapa,
  CapaProduto,
  ButtonCar,
  ImageCar,
  Footer,
  FooterText
} from '../Ckeckout/CkeckoutStyles';

export default class Ckeckout extends Component {

  constructor(props){
    super(props);
    this.state={
      isChecked:false
    }
  }

  render() {
  return (
    <ScrollView pagingEnable={true}>
    <ContainerCkeckout>
    <Input  
      placeholder="Digite sua pesquisa..."
      autoCapitalize= "none"
      autoCorrect={false}
      placeholderTextColor= "#999"
      />
      <Menu>
        <Itens>
        <TextItem>GÊNERO /</TextItem>
        </Itens>
        <Itens>
        <TextItem>POP /</TextItem>
        </Itens>
        <Itens>
        <TextItem>COLORING BOOK /</TextItem>
        </Itens>
        <Itens>
        <TextItem>CKECKOUT</TextItem>
        </Itens>
      </Menu>
      <ContainerSobre>
        <ContainerTitle>
        <Title>COLORING BOOK</Title>
        <ImageEdit source={edit} stylle={{resizeMode: 'contain', flex:1}} />
        </ContainerTitle>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </SobreText>
      </ContainerSobre>
      <ContainerUser>
      <ContainerTitle>
        <Title>JOHN TOMPSON</Title>
        <ImageEdit source={edit} stylle={{resizeMode: 'contain', flex:1}} />
        </ContainerTitle>
        <TitleUser>RUA HELVETIA, 500 / SANTA CECILIA </TitleUser>
        <TitleUser>SÃO PAULO, SP </TitleUser>
         <TextContato style={{marginTop:30}}>55 11 0000-0000</TextContato>
        <ContainerEmail>
        <TextContato>contato@serhumano.com.br</TextContato>
        <Sino source={bell} style={{ resizeMode: 'contain'}} />
        </ContainerEmail>
        <TextContato>012025-010</TextContato>
      </ContainerUser>
      <ContainerFret>
      <ContainerTitle>
        <Title>FRETE GRÁTIS</Title>
        <ImageEdit source={edit} stylle={{resizeMode: 'contain', flex:1}} />
        </ContainerTitle>
        <TitleUser>PARA TODO PAÍS</TitleUser>
        <TextContato style={{marginTop:30, fontSize: 20,}}>R$ 00,00</TextContato>
      </ContainerFret>

      <Pagamento>
      <ContainerTitle>
        <Title>PAGAMENTO</Title>
        <ImageEdit source={edit} stylle={{resizeMode: 'contain', flex:1}} />
        </ContainerTitle>
        <TextContato style={{marginTop:30}}>ESCOLHA A BANDEIRA:</TextContato>
        <ContainerBandeira>
          <Bandeira>
            <ItemBandeira source={visa} />
          </Bandeira>
          <Bandeira>
            <ItemBandeira source={master} />
          </Bandeira>
          <Bandeira>
            <ItemBandeira source={express} />
          </Bandeira>
          <Bandeira>
            <ItemBandeira source={discover} />
          </Bandeira>
        </ContainerBandeira>
        <TextContato style={{marginTop:30}}>ESCOLHA O MÉTODO:</TextContato>
        <ContainerMetodo>
        <CheckBox
            style={{flex: 1}}
            onClick={()=>{
              this.setState({
                  isChecked:!this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            rightText={"Crédito"}
        />
        <CheckBox
            style={{flex: 1}}
            onClick={()=>{
              this.setState({
                  isChecked:!this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            rightText={"Débito"}
        />
        </ContainerMetodo>
        
        <TextInput style={{borderWidth:1, marginTop:30,padding:7, textAlign: 'center'}} 
        placeholder={"Número do cartão de crédito/débito"}
        placeholderTextColor= "#999"
        />

        <TextInput style={{borderWidth:1, padding:7, textAlign: 'center'}}
        placeholder={"JANEIRO"}
        placeholderTextColor= "#000"
        />

        <TextInput style={{borderWidth:1, padding:7, textAlign: 'center'}}
        placeholder={"Código de segunraça"}
        placeholderTextColor= "#999"
        />

        <TextInput style={{borderWidth:1, padding:7, textAlign: 'center'}}
        placeholder={"2018"}
        placeholderTextColor= "#000"
        />

        <CheckBox
            style={{flex: 1, marginTop:30}}
            onClick={()=>{
              this.setState({
                  isChecked:!this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            leftText={"Confirmar endereço registrado no site"}
        />
      </Pagamento>

      <ContainerPag>
      <ContainerTitle>
        <Title>TOTAL</Title>
        <ImageEdit source={edit} stylle={{resizeMode: 'contain', flex:1}} />
        </ContainerTitle>
        <ContainerPreco>
        <Description>PREÇO :</Description>
        <Valor>R$ 25,00</Valor>
        </ContainerPreco>
        <ContainerPreco>
        <Description>FRETE :</Description>
        <Valor>R$ 00,00</Valor>
        </ContainerPreco>
        <ContainerPreco>
        <Description>TAXA :</Description>
        <Valor>R$ 15,00</Valor>
        </ContainerPreco>
        <TextContato style={{marginTop:30, fontSize: 20,}}>TOTAL: R$ 40,00</TextContato>
      </ContainerPag>
  
      <ContainerCapa>
        <CapaProduto source={capa} />
        <ButtonCar>
          <ImageCar style={{ resizeMode: 'contain'}} source={concluir} />
        </ButtonCar>
      </ContainerCapa>
      <Footer>
        <FooterText>Pop Shop LTDA Todos os direitos reservados</FooterText>
      </Footer>
    </ContainerCkeckout>
    </ScrollView>
    );
}
}
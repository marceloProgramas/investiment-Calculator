import { useState } from 'react'
import * as S from './app'
import './app'

function calcular(
  periodo:number, 
  porcentagem:number, 
  Valor_investido:number,
  valorAtual = 0,
  Investido = true,
  ){
  for(let i = 0; i<periodo; i++ ){
    valorAtual += (valorAtual*(porcentagem/100))
    valorAtual += Valor_investido
  }
  if(Investido) return Math.floor(valorAtual)
  valorAtual = 0
  
  for(let i = 0; i<periodo; i++ ){
    valorAtual += Valor_investido
  }
  return Math.floor(valorAtual)
}

function App() {
  const [ValIn, setValIn] = useState(0);
  const [ValNaoIn, setValNaoIn] = useState(0);
  const [Mos, setMos] = useState(false)
  return (
    <S.wrapper>
      <S.titulo>Calculadora</S.titulo>
      <S.text>periodo</S.text>
      <S.input type="number"/>
      <S.text>porcentagem de lucro por periodo</S.text>
      <S.input type="number"/>
      <S.text>Valor investido mensal</S.text>
      <S.input type="number"/>
      <S.text>valor inicial</S.text>
      <S.input type="number" />
      <S.btn value='calcular' type = "button" onClick={() => {
        const input = document.querySelectorAll("input");
        setValIn(calcular(Number(input[0].value), Number(input[1].value), Number(input[2].value), Number(input[3].value)));
        setValNaoIn(calcular(Number(input[0].value), Number(input[1].value), Number(input[2].value), Number(input[3].value), false));
        setMos(true);
      }}/>
      {Mos&& (
      <>
      <S.text>Valor investido: {ValIn}</S.text>
      <S.text>Valor não investido: {ValNaoIn}</S.text>
      </>      
      )
    }
    </S.wrapper>
  )
}

export default App

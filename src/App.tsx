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
  let valorNovo = valorAtual
  for(let i = 0; i<periodo; i++ ){
    if(Investido) valorNovo += (valorNovo*(porcentagem/100))
    valorNovo += Valor_investido
    console.log(valorNovo);
  }
  return (valorNovo.toLocaleString('pt-BR'));
}

function App() {
  const [ValIn, setValIn] = useState(0);
  const [ValNaoIn, setValNaoIn] = useState(0);
  const [Mos, setMos] = useState(false)
  return (
    <S.wrapper>
      <S.titulo>Calculadora</S.titulo>
      <S.DivInput>
        <S.inputs>
          <S.text>Periodo</S.text>
          <S.input type="number"/>
        </S.inputs>
        <S.inputs>
          <S.text>Porcentagem de lucro<br/> por periodo</S.text>
          <S.input type="number"/>
        </S.inputs>
      </S.DivInput>
      <S.DivInput>
        <S.inputs>
          <S.text>Valor inicial</S.text>
          <S.input type="number" />
        </S.inputs>
        <S.inputs>
          <S.text>Valor investido mensal</S.text>
          <S.input type="number"/>
        </S.inputs>
      </S.DivInput>
      <S.btn value='calcular' type = "button" onClick={() => {
        const input = document.querySelectorAll("input");
        setValIn(calcular(Number(input[0].value), Number(input[1].value), Number(input[3].value), Number(input[2].value)));
        setValNaoIn(calcular(Number(input[0].value), Number(input[1].value), Number(input[3].value), Number(input[2].value), false));
        setMos(true);
      }}/>
      {Mos &&(
      <S.DivInput>
        <S.text>Valor investido: {ValIn}</S.text>
        <S.text>Valor não investido: {ValNaoIn}</S.text>
      </S.DivInput>
      )}
    </S.wrapper>
  )
}

export default App

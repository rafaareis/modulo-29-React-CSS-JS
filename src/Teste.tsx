import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
`

function Teste() {
  return (
    <div>
      <h1>Teste</h1>
      <Botao principal>Clique Aqui</Botao>
      <Botao principal={false}>Cancelar</Botao>
    </div>
  )
}

export default Teste

import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [eMail, setEMail] = useState("");
  const [senha, setSenha] = useState("")

  const changeName = (event) => {setName(event.target.value)}
  const changeAge = (e) => {setAge(e.target.value)}
  const changeEMail = (e) => {setEMail(e.target.value)}
  const changeSenha = (e) => {setSenha(e.target.value)}

  const limparInputs = () => {
    setName("");
    setAge("");
    setEMail("");
    setSenha("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={name} onChange={changeName}/>
        </label>
        <label>
          Idade:
          <Input type="number" value={age} onChange={changeAge}/>
        </label>
        <label>
          E-mail:
          <Input type="email" value={eMail} onChange={changeEMail}/>
        </label>
        <label>
          Senha:
          <Input type="password" value={senha} onChange={changeSenha}/>
        </label>
      <button onClick={limparInputs}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage

import React from 'react'
{/* Importação do módulo CSS */ }
const Login = () => {
  return (
    <div>
      <form style={{width:'500px', margin:'auto', marginTop:'70px'}}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" style={{fontFamily:'ubuntu', fontSize:'30px'}}>Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text" style={{fontFamily:'ubuntu', fontSize:'10px'}}>* Email corporativo *</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label" style={{fontFamily:'ubuntu', fontSize:'30px'}}>Senha</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Permanecer conectado</label>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default Login
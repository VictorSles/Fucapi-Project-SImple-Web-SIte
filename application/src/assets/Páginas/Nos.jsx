import React from 'react'
import img1 from '../images/2.jpg'
import img2 from '../images/3.jpg'
import img3 from '../images/4.jpg'
const Nos = () => {
  return (
    <>
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src={img2} alt="Imagem de capa do card" style={{width:'80%', height:'80%', borderRadius:'40px', margin:'auto', padding:'15px'}}/>
            <div class="card-body">
              <h5 class="card-title" style={{fontSize:'20px', fontWeight:'bolder', textDecoration:'underline'}}>Sustentabilidade no Centro de Tudo</h5>
              <p class="card-text">Priorizar soluções ecológicas em cada etapa do processo, desde a produção até a entrega, garantindo que nossos valores ambientais estejam alinhados com as necessidades de nossos clientes e da sociedade.</p>
              <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
            </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={img1} alt="Imagem de capa do card" style={{width:'80%', height:'80%', borderRadius:'40px', margin:'auto', padding:'15px'}}/>
            <div class="card-body">
              <h5 class="card-title" style={{fontSize:'20px', fontWeight:'bolder', textDecoration:'underline'}}>Transformar o Mundo com Sustentabilidade</h5>
              <p class="card-text">Ser referência global em práticas inovadoras que unem desenvolvimento econômico e preservação ambiental, construindo um futuro sustentável para as próximas gerações.</p>
              <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
            </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={img3} alt="Imagem de capa do card" style={{width:'80%', height:'80%', borderRadius:'40px', margin:'auto', padding:'15px'}}/>
            <div class="card-body">
              <h5 class="card-title" style={{fontSize:'20px', fontWeight:'bolder', textDecoration:'underline'}}>Impacto Positivo e Sustentável</h5>
              <p class="card-text">Desenvolver produtos e serviços que reduzam o impacto ambiental, promovendo uma economia circular, eficiência energética e conscientização para um planeta mais verde.</p>
              <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Nos
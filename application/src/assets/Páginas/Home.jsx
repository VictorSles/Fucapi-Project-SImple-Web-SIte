import React from 'react';
import img1 from '../images/7.jpg';
import img2 from '../images/6.jpg';
import img3 from '../images/7.jpeg';

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Carousel */}
        <div className="col-md-6">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            style={{ backgroundColor: 'black' }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={img1} alt="Primeiro Slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img2} alt="Segundo Slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img3} alt="Terceiro Slide" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>

        {/* Descrição da empresa */}
        <div className="col-md-6">
          <div className="p-4 bg-light rounded">
            <h1 className="display-4">Green Company</h1>
            <p className="lead">
              A Green Company é uma pioneira na integração de tecnologias sustentáveis nos setores de energia hidrelétrica, eólica e petrolífera. Com um compromisso inabalável com a preservação ambiental, a empresa desenvolve soluções inovadoras que minimizam impactos ecológicos.
            </p>
            <hr />
            <p>
              Ao equilibrar eficiência energética e responsabilidade ambiental, a Green Company lidera o caminho para um futuro mais limpo e sustentável.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Leia mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

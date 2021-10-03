import './cards.css';

function Cards({name, gender, image, origin, status}) {
  return (

  <div className="card mt-5">
    <a target="_blank" href={image}>
    <img className="card-img-top" src={image} alt={name} />
    </a>
    <div className="card-body">
      <h5 className="card-title" align="center">{name}</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Gênero: {gender == "Male" ? "Masculino" : "Feminino"}</li>
        <li className="list-group-item">Naturalidade: {origin == "unknown" ? "Desconhecido" : origin}</li>
        <li className="list-group-item">Status: {status == "Alive" ? "Vivo" : "Morto"}</li>
      </ul>
    </div>
  </div>

  );
}

export default Cards;

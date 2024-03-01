import './Accueil.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Accueil() {
  const firstname = useSelector((state) => state.user.firstname);
  return (
    <div className="container__centered">
      <div className="container__centered__accueil">
        <h1 className="title">
          {firstname ? `Bienvenue, ${firstname} !` : 'Bienvenue !'}
        </h1>
        <h2 className="title">
          Laisse libre cours à ton imagination et créé toi-même tes propres
          histoires !
        </h2>
        <h3 className="title">Es-tu prêt(e) à relever le défi ?</h3>
        <Link to="/options">
          <button type="button" className="btn btn__blue">
            Je joue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;

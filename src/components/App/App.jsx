import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Accueil from '../Accueil/Accueil';
import Options from '../Options/Options';
import Profil from '../Profil/Profil';
import Politique from '../Politique/Politique';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';
import Jeux from '../Jeux/Jeux';
import MesHistoires from '../MesHistoires/MesHistoires';
import ResetPasswordRequest from '../Profil/UpdateProfil/MotDePasse/ResetPasswordRequest/ResetPasswordRequest';
import ResetPasswordPage from '../Profil/UpdateProfil/MotDePasse/ResetPasswordPage/ResetPasswordPage';
import UpdateProfil from '../Profil/UpdateProfil/UpdateProfil';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const location = useLocation();
  return (
    <div className="app-container">
      {location.pathname !== '/jeux' ? <Header /> : null}
      <div className="container__game">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/options" element={<Options />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/politique-confidentialite" element={<Politique />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/jeux" element={<Jeux />} />
          <Route path="/mes_histoires" element={<MesHistoires />} />
          <Route
            path="/reinitilisation-mot-de-passe"
            element={<ResetPasswordPage />}
          />
          <Route
            path="/request-reset-password"
            element={<ResetPasswordRequest />}
          />
          <Route path="/modification-profil" element={<UpdateProfil />} />
        </Routes>
      </div>
      {location.pathname !== '/jeux' ? <Footer /> : null}
    </div>
  );
}

export default App;

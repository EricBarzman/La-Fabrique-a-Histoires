import './NotFound.scss';

import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Link to="/">
      <img className="img404" src="/assets/elements/404.jpg" alt="background" />
    </Link>
  );
}

export default NotFound;

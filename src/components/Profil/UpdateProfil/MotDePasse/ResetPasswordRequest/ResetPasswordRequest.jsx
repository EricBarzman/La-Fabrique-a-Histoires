import './ResetPasswordRequest.scss';
import { useState } from 'react';
import { Form, FormField, Input, Button } from 'semantic-ui-react';

function ResetPasswordRequest() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer l'e-mail au backend pour le processus de réinitialisation du mot de passe
    console.log('Adresse e-mail soumise :', email);
    // Ajouter ici la logique pour envoyer l'e-mail au backend ou en reducer
  };

  return (
    <div className="center-content">
      <h1 className="title">
        Demande de mail pour la réinitialisation du mot de passe
      </h1>
      <p>
        Nous allons vous envoyer un email qui contient un lien pour
        réinitialiser le mot de passe.
      </p>
      <p> Pensez à regarder dans vos spams ou indésirables.</p>
      <Form onSubmit={handleSubmit}>
        <FormField
          control={Input}
          label="Email *"
          placeholder="votre-adresse@mail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Envoi du mail de réinitialisation</Button>
      </Form>
    </div>
  );
}

export default ResetPasswordRequest;

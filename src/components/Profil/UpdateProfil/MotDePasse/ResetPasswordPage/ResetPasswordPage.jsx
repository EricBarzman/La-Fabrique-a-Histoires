import { useState } from 'react';
import {
  Form,
  FormGroup,
  FormField,
  Input,
  Button,
  Icon,
} from 'semantic-ui-react';

function ResetPasswordPage() {
  // affiche le mot de passe
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // affiche la confirmation de mot de passe
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer l'e-mail au backend pour le processus de réinitialisation du mot de passe
    console.log('Adresse e-mail soumise :', password);
    // Ajouter ici la logique pour envoyer l'e-mail au backend ou en reducer
  };
  return (
    <div className="center-content">
      <h1 className="title">Réinitialisation du mot de passe</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup widths="equal">
          <FormField
            control={Input}
            label="Mot De Passe *"
            placeholder="mot de passe"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            icon={
              <Icon
                name={showPassword ? 'eye ' : 'eye slash'}
                alt={showPassword ? 'eye icone' : 'eye slash icone'}
                size="large"
                color="black"
                link
                onClick={togglePasswordVisibility}
              />
            }
          />

          <FormField
            control={Input}
            label="Confirmation du Mot De Passe *"
            placeholder="confirmer le mot de passe"
            type={showConfirmPassword ? 'text' : 'password'}
            icon={
              <Icon
                name={showConfirmPassword ? 'eye' : 'eye slash'}
                alt={showConfirmPassword ? 'eye icone' : 'eye slash icone'}
                size="large"
                color="black"
                link
                onClick={toggleConfirmPasswordVisibility}
              />
            }
          />
        </FormGroup>
        <p id="champs">* champs obligatoires</p>
        <Button type="submit">Réinitialiser le mot de passe</Button>
      </Form>
    </div>
  );
}

export default ResetPasswordPage;

import './Contact.scss';
import {
  Form,
  FormGroup,
  FormField,
  Input,
  TextArea,
  Button,
} from 'semantic-ui-react';

function Contact() {
  return (
    <div id="contact">
      <h1 className="title">Contact</h1>
      <div id="coordonnees">
        <h3>Nos Coordonnées</h3>
        <p>Adresse : 42 Rue de la tête dans les Nuages, 12345 Olympe</p>
        <p>Téléphone : +33 1 00 00 00 02</p>
        <p>Email : contact@la-fabrique-a-histoires.com</p>
      </div>
      <div id="contact-support">
        <h3>Contactez le support technique</h3>
        <Form id="contact-form">
          <FormGroup id="formgroup">
            <FormField control={Input} label="Nom *" placeholder="votre nom" />
            <FormField
              control={Input}
              label="Prénom *"
              placeholder="votre prénom"
            />
            <FormField
              control={Input}
              label="Email *"
              placeholder="votre-adresse@mail.com"
            />
            <FormField
              control={Input}
              label="Téléphone"
              placeholder="téléphone"
            />
          </FormGroup>
          <FormGroup widths="equal" id="object-form">
            <FormField control={Input} label="Objet de votre message *" />
          </FormGroup>
          <FormField
            id="description-form"
            control={TextArea}
            label="Description du problème rencontré *"
          />
          <p>* champs obligatoires</p>
        </Form>

        <Button
          content="Soumettre"
          labelPosition="right"
          icon="checkmark"
          color="green"
          // onClick={handleSubmit}
          // positive
        />
      </div>
    </div>
  );
}
export default Contact;

import { Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateField } from '../../store/gameSlice';
import ListeHistoires from './ListeHistoires';

export default function Personnage() {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [readyToValidate, setReadyToValidate] = useState(false);
  const [isBoySelected, setIsBoySelected] = useState(true);
  const [inputMaleValue, setInputMaleValue] = useState('');
  const [inputFemaleValue, setInputFemaleValue] = useState('');

  const dispatch = useDispatch();

  const handleMaleClick = () => {
    setInputFemaleValue('');
    setIsBoySelected(true);
    setReadyToValidate(true);
  };

  const handleFemaleClick = () => {
    setInputMaleValue('');
    setIsBoySelected(false);
    dispatch(updateField({ name: 'characterGender', value: 'fille' }));
    setReadyToValidate(true);
  };

  const handleMaleInputChange = (e) => {
    setInputMaleValue(e.target.value);
  };

  const handleFemaleInputChange = (e) => {
    setInputFemaleValue(e.target.value);
  };

  const handleValidate = () => {
    if (isBoySelected) {
      dispatch(updateField({ name: 'characterGender', value: 'garçon' }));
      dispatch(updateField({ name: 'characterName', value: inputMaleValue }));
    } else {
      dispatch(updateField({ name: 'characterGender', value: 'fille' }));
      dispatch(updateField({ name: 'characterName', value: inputFemaleValue }));
    }
    setIsContentVisible(false);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isContentVisible && (
        <>
          <h1 className="title">Fille ou garçon ? Comment t'appelles-tu ?</h1>
          <div className="flex margin-top_4 options__level-wrapper">
            <div className="center options__level-container">
              <img
               src={`/assets/elements/boy${Math.ceil(3 * Math.random())}.jpg`}
               alt="boy"
              />
              <input
                type="text"
                id="name-male"
                name="name"
                minLength="4"
                maxLength="18"
                size="18"
                placeholder="Ton prénom"
                className="btn btn_ocre"
                onClick={handleMaleClick}
                onChange={handleMaleInputChange}
                value={inputMaleValue}
              />
            </div>
            <div className="center">
              <img
               src={`/assets/elements/girl${Math.ceil(3 * Math.random())}.jpg`}
               alt="girl"
              />
              <input
                type="text"
                id="name-female"
                name="name"
                minLength="4"
                maxLength="18"
                size="18"
                className="btn btn_ocre"
                placeholder="Ton prénom"
                onClick={handleFemaleClick}
                onChange={handleFemaleInputChange}
                value={inputFemaleValue}
              />
            </div>
            <div className="center play">
              {readyToValidate && (
                <Icon
                  onClick={handleValidate}
                  name="play"
                  alt="play"
                  size="big"
                  className="violet_main"
                />
              )}
            </div>
          </div>
        </>
      )}
      {/* Personnage content */}
      {!isContentVisible && <ListeHistoires />}
    </>
  );
}

import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import PhoneNumberInputComponent from './PhoneNumberInputComponent';
import EmailInputComponent from './EmailInputComponent';
import TextInputComponent from './TextInputComponent';
import ErrorOverlay from './ErrorOverlay';
import SuccessOverlay from './SuccessOverlay';
import '../styles/ModalComponentStyles.scss';

const FeedbackFormComponent = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleButtonClick = () => {
    onClose && onClose();
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      setError('Необходимо заполнить все поля');
      return;
    }

    setError('');

    try {
      const response = await fetch('https://lims.backend.demowts.ru/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log('Данные, отправляемые на сервер:', formData);

      if (response.ok) {
        console.log('Данные успешно отправлены:', responseData.data.feedback);
        setSuccess(true);
      } else {
        console.error('Ошибка при отправке формы:', responseData.message);
        setError('Произошла ошибка при отправке формы');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error.message);
      setError('Произошла ошибка при отправке формы');
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {success ? (
        <SuccessOverlay onClose={() => onClose && onClose()} />
      ) : (
        <div className="feedback-form-container">
          <div className="feedback-form-content">
            <div className="feedback-form-block">
              <div className="feedback-form-header">
                <span>Форма обратной связи</span>
                <button className="feedback-form-close-button" onClick={handleButtonClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#263238"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="feedback-form-subheader">
                <span>Оставьте свои контактные данные, мы свяжемся с Вами в ближайшее время. </span>
              </div>
            </div>
            <div className="feedback-form-block">
              <PhoneNumberInputComponent
                placeholder="+7 (---) --- -- --"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
              />
              <EmailInputComponent
                placeholder="E-mail"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
              />
              <TextInputComponent
                placeholder="Ваше ФИО"
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
              />
              <TextInputComponent
                placeholder="Компания"
                value={formData.company}
                onChange={(value) => handleInputChange('company', value)}
              />
            </div>
            <div className="request-demo-block">
              <div className="request-demo-checkbox">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M3.75 0H26.25C28.32 0 30 1.68 30 3.75V26.25C30 27.2446 29.6049 28.1984 28.9017 28.9017C28.1984 29.6049 27.2446 30 26.25 30H3.75C2.75544 30 1.80161 29.6049 1.09835 28.9017C0.395088 28.1984 0 27.2446 0 26.25V3.75C0 1.68 1.68 0 3.75 0ZM3.21429 3.75V26.25C3.21429 26.5457 3.45429 26.7857 3.75 26.7857H26.25C26.3921 26.7857 26.5283 26.7293 26.6288 26.6288C26.7293 26.5283 26.7857 26.3921 26.7857 26.25V3.75C26.7857 3.60792 26.7293 3.47166 26.6288 3.37119C26.5283 3.27073 26.3921 3.21429 26.25 3.21429H3.75C3.60792 3.21429 3.47166 3.27073 3.37119 3.37119C3.27073 3.47166 3.21429 3.60792 3.21429 3.75Z" fill="#0593F5"/>
                  <rect x="2.85742" y="2.85742" width="24.2857" height="24.2857" fill="#0593F5"/>
                  <path d="M23.8195 9.03728C24.4406 9.6586 24.4406 10.666 23.8195 11.2873L14.7653 20.346C13.3227 21.7892 10.9839 21.7893 9.54131 20.346L6.17963 16.9826C5.55861 16.3613 5.55861 15.354 6.17963 14.7326C6.80064 14.1113 7.8075 14.1113 8.42852 14.7326L11.7902 18.096C11.9907 18.2966 12.3159 18.2966 12.5164 18.096L21.5706 9.03728C22.1917 8.41596 23.1985 8.41596 23.8195 9.03728Z" fill="white"/>
                </svg>
                <p className="request-demo-agree-text">Я даю согласие на обработку моих <span className="request-demo-highlight-text">персональных данных</span>.</p>
              </div>
            </div>
            <div className="feedback-form-block">
              <ButtonComponent
                className="feedback-form-send-button button-style-1"
                onClick={handleSubmit}
              >
                Связаться
              </ButtonComponent>
            </div>
          </div>
          {error && <ErrorOverlay message={error} onClose={onClose} />}
        </div>
      )}
    </>
  );
};

export default FeedbackFormComponent;

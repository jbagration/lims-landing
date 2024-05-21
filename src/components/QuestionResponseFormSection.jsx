import React, { useState, useEffect } from 'react';
import '../styles/QuestionResponseFormStyles.scss';
import feedbackArrow from '../assets/feedback-arrow.svg';
import feedbackAtom1 from '../assets/feedback-atom-1.svg';
import feedbackAtom2 from '../assets/feedback-atom-2.png';
import feedbackAtom3 from '../assets/feedback-atom-3.svg';
import PhoneNumberInputComponent from './PhoneNumberInputComponent';
import TextInputRequiredComponent from './TextInputRequiredComponent';
import ButtonComponent from './ButtonComponent';

const QuestionResponseFormSection = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [error, setError] = useState('');

  const handleOrderConsultation = async () => {
    if (!formData.name || !formData.phone) {
      setError('Необходимо заполнить все поля');
      return;
    }
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
        onSuccess(true); 
      } else {
        console.error('Ошибка при отправке данных на сервер:', responseData.message);
        setError('Произошла ошибка при отправке данных');
        onError(true, 'Произошла ошибка при отправке данных');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error.message);
      setError('Произошла ошибка при отправке данных');
      onError(true, 'Произошла ошибка при отправке данных');
    }
  };
  
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const button = document.querySelector('.question-response-button');
    if (button) {
      button.addEventListener('click', handleOrderConsultation);
      return () => {
        button.removeEventListener('click', handleOrderConsultation);
      };
    }
  }, []);
  
  return (
    <div className="question-response-container">
      <img src={feedbackAtom1} alt="feedback-atom" className="feedback-atom-1" />
      <img src={feedbackAtom2} alt="feedback-atom" className="feedback-atom-2" />
      <img src={feedbackAtom3} alt="feedback-atom" className="feedback-atom-3" />
      <img src={feedbackArrow} alt="feedback-arrow" className="feedback-arrow" />
      <div className="question-response-form-container">
        <h2 className="question-response-title">Не нашли ответ на свой вопрос?</h2>
        <p className="question-response-text">Оставьте свой номер и мы обязательно свяжемся с вами!</p>
        <TextInputRequiredComponent
          placeholder="Ваше имя"
          label="Имя"
          value={formData.name}
          onChange={(value) => handleInputChange('name', value)}
        />
        <PhoneNumberInputComponent
          placeholder="+7 (---) --- -- --"
          value={formData.phone}
          onChange={(value) => handleInputChange('phone', value)}
        />
<ButtonComponent
  className="question-response-button button-style-1"
  type="button"
  onClick={handleOrderConsultation}
>
  Заказать консультацию
</ButtonComponent>

      </div>
    </div>
  );
}

export default QuestionResponseFormSection;

import React, { useState, useEffect } from 'react';
import SelectInputComponent from './SelectInputComponent';
import NumberInputComponent from './NumberInputComponent';
import TextInputRequiredComponent from './TextInputRequiredComponent';
import EmailInputComponent from './EmailInputComponent';
import PhoneNumberInputComponent from './PhoneNumberInputComponent';
import ButtonComponent from './ButtonComponent';
import ErrorOverlay from './ErrorOverlay';
import SuccessOverlay from './SuccessOverlay';  
import '../styles/ModalComponentStyles.scss';

const RequestDemoComponent = ({ onClose }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fio: '',
    phone: '',
    email: '',
    technology: '',
    company: '',
    position: '',
    users_number: 0,
  });

  const handleButtonClick = async () => {
    const { fio, phone, email, technology, company, position, users_number } = formData;
    if (!fio || !phone || !company || !position ) {
      setError('Необходимо заполнить все поля');
      return;
    }
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fio', fio);
      formDataToSend.append('phone', phone);
      formDataToSend.append('email', email);
      formDataToSend.append('technology', technology);
      formDataToSend.append('company', company);
      formDataToSend.append('position', position);
      formDataToSend.append('users_number', users_number);
      
      console.log('Данные, отправляемые на сервер:', formData);

      const response = await fetch('https://lims.backend.demowts.ru/api/demos', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        const responseData = await response.json();
        console.log('Данные успешно отправлены:', responseData.data.demo);
        setSuccess(true);
      } else {
        const responseData = await response.json();
        console.error('Ошибка при отправке данных:', responseData.message);
        setError('Произошла ошибка при отправке данных');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error.message);
      setError('Произошла ошибка при отправке данных');
    }
  };

  const handleCloseButtonClick = () => {
    setError(null);
    setSuccess(false);
    onClose && onClose();
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const handleResize = () => {
      const requestDemoOverlay = document.querySelector('.request-demo-overlay');
      if (requestDemoOverlay && window.innerHeight < 700) {
        requestDemoOverlay.classList.add('scrollable');
      } else {
        requestDemoOverlay.classList.remove('scrollable');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {success ? (
        <SuccessOverlay onClose={handleCloseButtonClick} />
      ) : (
        <div className="request-demo-overlay">
          <div className="send-request-modal">
            <div className="request-demo-block">
              <div className="request-demo-title-close-button" onClick={handleCloseButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M21.3056 9.23047L9.23047 21.418M9.23047 9.23047L21.3056 21.418" stroke="#949599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="request-demo-text">
                <div className="request-demo-title-container">
                  <h2 className="request-demo-title">Заказать онлайн демонстрацию</h2>
                </div>
              </div>
            </div>
            <div className="request-demo-block">
              <SelectInputComponent 
                label="Выберите решение"
                value={formData.technology} 
                options={['LIMS IT-LAB Протоколы испытаний', 'LIMS IT-LAB СМК', 'LIMS IT-LAB ВЛК', 'LIMS IT-LAB Реактивы и расходные материалы', 'LIMS IT-LAB Градуировочные характеристики', 'LIMS IT-LAB Акт верификации']} 
                onChange={(value) => handleInputChange('technology', value)}
              />
            </div>
            <div className="request-demo-block">
              <NumberInputComponent 
              value={formData.users_number} 
                label="Укажите необходимое количество пользователей в базе"
                onChange={(value) => handleInputChange('users_number', value)}
              />
            </div>
            <div className="request-demo-block">
              <span className="request-demo-block-text">Заполните информацию</span>
              <PhoneNumberInputComponent 
                className="request-demo-block-text-input" 
                placeholder="+7 (---) --- -- --" 
                value={formData.phone} 
                onChange={(value) => handleInputChange('phone', value)} 
              />
              <EmailInputComponent 
              label="Email" 
                className="request-demo-block-text-input" 
                placeholder="E-mail" 
                value={formData.email} 
                onChange={(value) => handleInputChange('email', value)} 
              />
                            <TextInputRequiredComponent 
                className="request-demo-block-text-input" 
                placeholder="Ваше ФИО" 
                value={formData.fio} 
                onChange={(value) => handleInputChange('fio', value)} 
              />
              
              <TextInputRequiredComponent 
                className="request-demo-block-text-input" 
                placeholder="Компания" 
                value={formData.company} 
                onChange={(value) => handleInputChange('company', value)} 
              />
              <TextInputRequiredComponent 
                className="request-demo-block-text-input" 
                placeholder="Должность" 
                value={formData.position} 
                onChange={(value) => handleInputChange('position', value)} 
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
            <div className="request-demo-block">
              <ButtonComponent className="button-style-1" onClick={handleButtonClick}>Отправить</ButtonComponent>
            </div>
            {error && <ErrorOverlay message={error} onClose={onClose} />}
          </div>
        </div>
      )}
    </>
  );
};

export default RequestDemoComponent;

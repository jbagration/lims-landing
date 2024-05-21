import React, { useState, useEffect, useRef } from 'react';
import ButtonComponent from './ButtonComponent';
import TextInputRequiredComponent from './TextInputRequiredComponent';
import PhoneNumberInputComponent from './PhoneNumberInputComponent';
import EmailInputComponent from './EmailInputComponent';
import CommentInputComponent from './CommentInputComponent';
import ErrorOverlay from './ErrorOverlay';
import SuccessOverlay from './SuccessOverlay';
import '../styles/ModalComponentStyles.scss';

const SendRequestModalComponent = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', comment: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    onClose && onClose();
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, phone, email, comment } = formData;

    if (!name || !phone) {
      setError('Необходимо заполнить все поля');
      return;
    }
    if (!selectedFile) {
      setError('Необходимо прикрепить файл');
      return;
    }
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', name);
      formDataToSend.append('phone', phone);
      formDataToSend.append('email', email);
      formDataToSend.append('comment', comment);
      formDataToSend.append('file', selectedFile, selectedFile.name);

      const response = await fetch('https://lims.backend.demowts.ru/api/surveys', {
        method: 'POST',
        body: formDataToSend,
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('Данные успешно отправлены:', responseData.data.survey);
        setSuccess(true);
      } else {
        console.error('Ошибка при отправке данных:', responseData.message);
        setError('Произошла ошибка при отправке данных');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error.message);
      setError('Произошла ошибка при отправке данных');
    }
  };

  return (
    <>
      {success ? (
        <SuccessOverlay onClose={() => onClose && onClose()} />
      ) : (
        <div className="send-request-modal-overlay" onClick={handleButtonClick}>
          <div className="send-request-modal" onClick={(e) => e.stopPropagation()}>
            <div className="send-request-modal-header">
              <h2>Отправьте опрос</h2>
              <button className="send-request-modal-close-button" onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M21.3056 9.23047L9.23047 21.418M9.23047 9.23047L21.3056 21.418" stroke="#949599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="send-request-modal-content">
              <p className="modal-subtitle">Прикрепите заполненный опрос и мы свяжемся с вами в ближайшее время.</p>

              <TextInputRequiredComponent
                className="send-request-demo-block-text-input"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(newValue) => handleInputChange('name', newValue)}
              />
              <PhoneNumberInputComponent
                className="send-request-demo-block-text-input"
                placeholder="+7 (---) --- -- --"
                value={formData.phone}
                onChange={(newValue) => handleInputChange('phone', newValue)}
              />
              <EmailInputComponent
                className="send-request-demo-block-text-input"
                placeholder="E-mail"
                value={formData.email}
                onChange={(newValue) => handleInputChange('email', newValue)}
              />
              <CommentInputComponent
                className="send-request-demo-block-text-input"
                placeholder="Оставьте комментарий"
                value={formData.comment}
                onChange={(newValue) => handleInputChange('comment', newValue)}
              />
              <input
                type="file"
                accept=".pdf, .doc, .docx, .xlsx"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
          {error && <ErrorOverlay message={error} onClose={onClose} />}
              <button className="send-request-attach-survey-button" onClick={openFileDialog}>
                <div className="send-request-button-content">
                  {selectedFile ? (
                    <>
                      <span className="send-request-file-name">{selectedFile.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <g clipPath="url(#clip0_905_11553)">
                          <path d="M25.2 14.0001L14.4536 24.7465C12.9619 26.1999 10.9576 27.0072 8.87496 26.9937C6.79227 26.9801 4.79873 26.1468 3.32602 24.6741C1.8533 23.2014 1.01995 21.2078 1.00639 19.1251C0.992841 17.0424 1.80019 15.0382 3.25361 13.5465L14.3211 2.47901C15.3112 1.48887 16.6541 0.932617 18.0544 0.932617C19.4547 0.932617 20.7976 1.48887 21.7877 2.47901C22.7779 3.46916 23.3341 4.81208 23.3341 6.21235C23.3341 7.61262 22.7779 8.95554 21.7877 9.94568L11.0395 20.6939C10.5444 21.189 9.87294 21.4671 9.17281 21.4671C8.47267 21.4671 7.80121 21.189 7.30614 20.6939C6.81107 20.1989 6.53294 19.5274 6.53294 18.8273C6.53294 18.1271 6.81107 17.4557 7.30614 16.9606L17.7333 6.53341" stroke="#0593F5" strokeWidth="2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_905_11553">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Прикрепить заполненный опрос</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M19.9999 33.5999C12.4799 33.5999 6.3999 27.5199 6.3999 19.9999C6.3999 12.4799 12.4799 6.3999 19.9999 6.3999C27.5199 6.3999 33.5999 12.4799 33.5999 19.9999C33.5999 27.5199 27.5199 33.5999 19.9999 33.5999ZM19.9999 7.9999C13.3599 7.9999 7.9999 13.3599 7.9999 19.9999C7.9999 26.6399 13.3599 31.9999 19.9999 31.9999C26.6399 31.9999 31.9999 26.6399 31.9999 19.9999C31.9999 13.3599 26.6399 7.9999 19.9999 7.9999Z" fill="#0593F5" />
                        <path d="M12.8 19.2H27.2V20.8H12.8V19.2Z" fill="#0593F5" />
                        <path d="M19.2 12.8H20.8V27.2H19.2V12.8Z" fill="#0593F5" />
                      </svg>
                    </>
                  )}
                </div>
              </button>
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
              <ButtonComponent className="send-request-demo-send-button button-style-1" onClick={handleSubmit}>
                Отправить
              </ButtonComponent>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendRequestModalComponent;

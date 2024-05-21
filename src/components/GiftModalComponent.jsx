import React from 'react';
import '../styles/ModalComponentStyles.scss';

const GiftModalComponent = ({ children, onClose }) => {
  return (
    <div className="news-document-modal-overlay">
      <div className="news-document-modal gift-modal">
        <button className="news-document-modal-close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M23 6L6 23M6 6L23 23" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="scrollable-content news-document-modal-content gift-modal-content">
          <div className="gift-modal-text">
            <h2>Что входит в данный тариф:</h2>
            <ul>
              <li>6 месяцев бесплатного доступа к облачному продукту «LIMSIT-LAB» на 1 пользователя (ЛИМС разработана на платформе 1С)</li>
              <li>Бесплатные консультации специалистов по электронной почте. Пользователи смогут направлять заявки с проблемами или вопросами по работе системы</li>
              <li>Материалы для изучения системы : методические материалы, видео ролики</li>
              <li>Периодическое проведение бесплатных семинаров по работе системы (можно заранее направлять свои вопросы или же задавать их на семинаре). После семинара все материалы будут направлены на почту пользователей облачного продукта.</li>
              <li>Внесение в систему 2 электронных журналов, 1 единицы оборудования и 1 сотрудника на выбор пользователя</li>
              <li>Обновление базового функционала в зависимости от расширения системы (при этом пользователи будут уведомлены о том, что произведены обновления и в уведомлении будет отражено содержание обновлений)</li>
            </ul>
          </div>
          <div className="gift-modal-text">
            <h2>Что необходимо для получения доступа:</h2>
            <ul>
              <li>Отправить заявку на почту <a href="mailto:kora@adinex.ru">kora@adinex.ru</a> или же оставить заявку по телефону нашему менеджеру Ситникова Ирина +7 915 689-83-99 или Цыкаленко Роман +7 977 808-22-40</li>
              <li>В заявке указать: название организации, контактное лицо (ФИО, должность и контактные данные: электронная почта и телефон), дату активации доступа</li>
              <li>После регистрации организации на указанную почту будут направлены все материалы и доступы</li>
              <li>Для внесения первичных данных в систему необходимо ответным письмом направить: карточку организации, 2 электронных журнала, 1 карточку оборудования, 1 карточку сотрудника (по необходимости)</li>
            </ul>
          </div>
        
      <button className="document-button button-style-4" onClick={onClose}>
            Закрыть
          </button>
        </div>
        {children}
        
      </div>
    </div>
  );
};

export default GiftModalComponent;

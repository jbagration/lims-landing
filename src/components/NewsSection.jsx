import React from 'react';
import SectionTitle from './SectionTitle';
import NewsCard from './NewsCard';
import news1 from '../assets/news-1.jpg';
import news2 from '../assets/news-2.jpg';
import news2Picture1 from '../assets/news-2-picture-1.jpg';
import news2Picture2 from '../assets/news-2-picture-2.jpg';
import news2Picture3 from '../assets/news-2-picture-3.jpg';
import newsAtom from '../assets/news-atom.svg';
import newsIllustration from '../assets/news-illustration.png';
import '../styles/NewsSectionStyles.scss';

const newsData = [
  {
    image: news1,
    title: 'В 2023 году программное обеспечение LIMS IT-LAB активно развивалось.',
    subtitle: 'В ПО LIMS IT-LAB добавлялись новые разделы, улучался текущий функционал. Вместе с НИИЖБ им. А.А.Гвоздева внедрили раздел протоколы испытаний, но кроме внедрения типового блока, дополнительно были настроены формы для удобного перехода с бумажного носителя на электронный. Что позволило пользователям постепенно вникать в мир ЛИМС.',
    modalContent: `
      <h2>В 2023 году программное обеспечение LIMS IT-LAB активно развивалось.</h2>
      <br />В ПО LIMS IT-LAB добавлялись новые разделы, улучался текущий функционал.
      <br />Вместе с НИИЖБ им. А.А.Гвоздева внедрили раздел протоколы испытаний, но кроме внедрения типового блока, дополнительно были настроены формы для удобного перехода с бумажного носителя на электронный. Что позволило пользователям постепенно вникать в мир ЛИМС.
      <br />
      Кроме автоматизации самих протоколов, было подключено и настроено использование ЭЦП (электронных цифровых подписей).
      <br />
      Сами Клиенты довольны работой и опубликовали у себя на сайте информационную памятку о работе с ПО LIMS IT-LAB.
      <br /><br />
      <a href="https://niizhb.online/service/ispytaniya-konstruktsiy-i-materialov/" target="_blank" rel="noopener noreferrer">https://niizhb.online/service/ispytaniya-konstruktsiy-i-materialov/</a>
    `,
  },
  {
    image: news2,
    title: 'В программу LIMS IT-LAB добавлен новый раздел «Несоответствия и корректирующие действия»',
    subtitle: 'Данный раздел позволяет формировать базу оценок приемлемости и оценок значимости несоответствий (предварительно в систему внесены значения: Допустимое (последствия отсутствуют), Значительное (последствия значительны, прогнозируемы и устранимы), Незначительное  (последствия незначительны и минимальны), Критическое (последствия могут привести к критическим издержкам))',
    modalContent: `
      <h2>В программу LIMS IT-LAB добавлен новый раздел «Несоответствия и корректирующие действия»</h2>
      <br />
    <img src="${news2Picture1}" alt="News 2 Picture 1" />
    <br /><br />Данный раздел позволяет формировать базу оценок приемлемости и оценок значимости несоответствий (предварительно в систему внесены значения: Допустимое (последствия отсутствуют), Значительное (последствия значительны, прогнозируемы и устранимы), Незначительное  (последствия незначительны и минимальны), Критическое (последствия могут привести к критическим издержкам))
    <br />В системе добавлена возможность полноценно вести учет несоответствий. А именно: вносить описание, делать описание влияния несоответствия, обозначать, если несоответствие обнаружено в результате испытаний, причины возникновения  
    <br /><br />
    <img src="${news2Picture2}" alt="News 2 Picture 2" />
    <br />
    <br />А также есть возможность в системе проводить работу с устранением несоответствий    
    <br /><br />
    <img src="${news2Picture3}" alt="News 2 Picture 3" />
    <br /><br /><br /><br />`,
  },
];


const NewsSection = () => {
  return (
    <div id='news' className="news-section">
      <div className="news-section-container">
        <img src={newsAtom} alt="news-atom" className="news-atom" />
        <SectionTitle title="Новости:" />
        <div className="news-cards-container">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              title={news.title}
              subtitle={news.subtitle}
              modalContent={news.modalContent} 
            />
          ))}
        </div>
        <div className="news-svg-container">
          <img src={newsIllustration} alt="news-illustration" className="news-illustration" />
        </div>
      </div>
    </div>
  );
};


export default NewsSection;

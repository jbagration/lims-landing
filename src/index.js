import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const title = "LIMS IT-Lab купить в Москве (цена, отзывы, характеристики) | Компьютерные программы";
const description = "Приобретайте программный комплекс LIMS IT-LAB для лабораторий - это ПО для автоматизации процессов производства в лаборатории в Москве и области. Учет материалов и оснащения, исчерпывающая информация о свойствах материалов, управление рабочим коллективом. Телефон для справок +7 (495) 445-00-58";
const keywords = "LIMS IT-Lab, купить, Москва, цена, отзывы, характеристики, компьютерные программы";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="ООО Компьютерные программы" />
        <title>{title}</title>
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta itemProp="keywords" content={keywords} />
        <meta property="ok:image" content="/sharing-ok.jpg" />
        <meta property="telegram:image" content="/sharing-tg.jpg" />
        <meta itemProp="image" content="/sharing-tg.jpg" />
        <meta property="og:site_name" content="cybstorm.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:keywords" content={keywords} />
        <meta property="og:image" content="/sharing-vk.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://trade.cyberstorm.pro/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:keywords" content={keywords} />
        <meta name="twitter:image:src" content="/public/sharing-tg.jpg" />
        <meta name="twitter:creator" content="ООО Компьютерные программы" />
      </head>
      <body>
        <App />
      </body>
    </html>
  </React.StrictMode>
);

reportWebVitals();

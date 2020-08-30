import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/components/News.scss';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getnews = async () => {
      const savedNews = JSON.parse(localStorage.getItem('news'));
      if (savedNews) {
        setNews(savedNews);
      } else {
        const response = await axios.get(
          'https://bing-news-search1.p.rapidapi.com/news?cc=GB&safeSearch=Off&category=ScienceAndTechnology&textFormat=Raw',
          {
            headers: {
              'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
              'x-rapidapi-key':
                'd3524897a6mshf30434875b11145p1e3371jsnd5fa48e7575f',
              'x-bingapis-sdk': 'true',
            },
          }
        );

        setNews(response.data.value);
        localStorage.setItem('news', JSON.stringify(response.data.value));
      }
    };

    getnews();
  }, []);
  return (
    <div className='news'>
      {news &&
        news.length > 0 &&
        news.map((article) => (
          <div
            className='news__article'
            onClick={() => (window.location = article.url)}
            key={article.url}
          >
            <div className='news__article__top'>
              <div className='news__article__top__image'>
                <img
                  src={article.image.thumbnail.contentUrl}
                  className='news__article__top__image__element'
                />
              </div>
              <div className='news__article__top__title'>{article.name}</div>
            </div>
            <div className='news__article__description'>
              {article.description}
            </div>
          </div>
        ))}
    </div>
  );
};

export default News;

// App.js
import React from 'react';
import RecomandedProducts from './RecommandedProducts';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLj6G3brjOJmbiNWGXqcrWXrja6ltdWitxvg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWXkFmUCYvXU-vJT96H02q48IqDSb8Anzc7-FtEJT7lGLahQR8aMQFF6HTLyvQ0J98v8&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6BPhICVdHVGLafN73FS8YL9bp720rFCp4Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrX9BIcH2XexDZ66bQ_tFpAN_1yI1zUjnIWXaga-_HZD6lGCYb6h7RWx4VeaDwCetR3Qs&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLG0rx99VrL4yiykB92ma572A2faiRyAjJxv2kWM_pS0X11KES22fSDvsxlZAJLWmiK2Y&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoks1ToyQ1FO0rY-g3obHtmfcEwxG9FXqbg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAH6UpFN23E9avyEu-sZ9oWbq0f82t43W1Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-n664zYmv-psdmy31tMP5RSWjn6IQeYwcg&usqp=CAU',
  'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_180x.jpg?v=1691158341 180w 223h, https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_360x.jpg?v=1691158341 360w 446h, https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_540x.jpg?v=1691158341 540w 670h, https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_720x.jpg?v=1691158341 720w 893h, https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_900x.jpg?v=1691158341 900w 1116h, https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_1080x.jpg?v=1691158341 1080w 1339h, https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_1296x.jpg?v=1691158341 1296w 1607h, https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_1512x.jpg?v=1691158341 1512w 1875h, https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1436996_1728x.jpg?v=1691158341 1728w 2143h'
];

function RecommandedProDuctContainer() {
  return (
    <div>
      <p className='recommmandedPtag'>RECOMMENDED PRODUCTS</p>
      <RecomandedProducts images={images} />
    </div>
  );
}

export default RecommandedProDuctContainer;

import React from 'react'
import UseFetch from './UseFetch';

const FetchApihooks = () => {
  const [data] = UseFetch("https://fakestoreapiserver.reactbd.com/products")
  return (
    <>
      {
        data &&
        data.map((item) => {
          return <p key={item._id}>{item.title}</p>;
        })
      }
    </>
  )
}

export default FetchApihooks

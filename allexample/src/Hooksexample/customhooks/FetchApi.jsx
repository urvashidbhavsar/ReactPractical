import React, { useEffect, useState } from 'react'

const FetchApi = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item._id}>{item.title}</p>;
        })
      }
    </>
  )
}

export default FetchApi

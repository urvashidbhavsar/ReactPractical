import Image from './assets/image.jpg'
const Disimage = () => {
  return (
    <>
      <img src={Image} alt="" height={200} width={300} />
      {/* if use image directly  */}
      <img src="./src/assets/image.jpg" alt="" height={200} width={300} />
    </>
  )
}

export default Disimage
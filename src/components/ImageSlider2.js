import React, {useState} from 'react';

const ImageSlider2 = () => {
  const url = process.env.PUBLIC_URL;
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    url + '/images/leagueOfWiki.png',
    url + '/images/fakeInsta.png',
    url + '/images/Convertitore.png',
  ];
  
  const handleImg = (num) => {
    setCurrentImage(num);
  };

  return (
    <div className='bg-pink p-4 rounded-lg border-4 border-main'>
      <div className='flex flex-col items-center'>
        <div className='flex'>
          <div className='w-3/4'>
            <img
              className='rounded-lg border-4 border-green'
              src={images[currentImage]}
              alt=''
            />
            <div className='flex justify-center'>
              <div
                onClick={() => {
                  handleImg(0);
                }}
                className='bg-green flex items-center justify-center p-4 m-2 hover:bg-main font-bold text-black rounded-full h-8 w-8'
              >
                <p>1</p>
              </div>
              <div
                onClick={() => {
                  handleImg(1);
                }}
                className='bg-green flex items-center justify-center p-4 m-2 hover:bg-main font-bold text-black rounded-full h-8 w-8'
              >
                <p>2</p>
              </div>
              <div
                onClick={() => {
                  handleImg(2);
                }}
                className='bg-green flex items-center justify-center p-4 m-2 hover:bg-main font-bold text-black rounded-full h-8 w-8'
              >
                <p>3</p>
              </div>
            </div>
          </div>
          <div className='w-1/4 text-center  border-4 border-green rounded-lg bg-secondary text-black ml-4'>
            <h1 className='font-bold text-3xl'>Descrizione</h1>
            <p>Home della pagina instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider2;

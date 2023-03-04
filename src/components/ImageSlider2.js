import React, {useState} from 'react';

const ImageSlider2 = ({imagesData, git, www}) => {
  const url = process.env.PUBLIC_URL;
  const [currentImage, setCurrentImage] = useState(0);
  const images = [];
  for (let image in imagesData) {
    images.push(url + imagesData[image].url);
  }

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
              {images.map((value, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      handleImg(index);
                    }}
                    className={
                      currentImage === index
                        ? 'bg-main flex items-center justify-center p-4 m-2 font-bold text-black rounded-full h-8 w-8'
                        : 'bg-green flex items-center justify-center p-4 m-2 hover:bg-main font-bold text-black rounded-full h-8 w-8'
                    }
                  >
                    <p>{index + 1}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='w-1/4 text-center relative  border-4 border-green rounded-lg bg-secondary text-black ml-4'>
            <div>
              <h1 className='font-bold text-3xl'>Descrizione</h1>
              <p>{imagesData[currentImage].description}</p>
            </div>
            <div className='absolute bottom-6 left-16'>
              <h2 className='text-2xl font-bold text-black mt-4'>Link</h2>
              <div className='flex justify-center items-center'>
                <div className='linkButton ml-3'>
                  <a
                    className='flex items-center'
                    href={git}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <p className='mr-2'>Git Hub</p>
                    <img
                      style={{height: '2rem'}}
                      src={url + '/images/git.png'}
                      alt='Git Hub Logo'
                    />
                  </a>
                </div>
                <div className='linkButton ml-3'>
                  {www ? (
                    <p>Non disponibile</p>
                  ) : (
                    <a
                      href={www}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center'
                    >
                      <p className='mr-2'>Sito Web</p>
                      <img
                        style={{height: '2rem'}}
                        src={url + '/images/www.png'}
                        alt='Web logo'
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider2;

import React, {useState} from 'react';

const ImageSlider = ({imagesData, git, www, work}) => {
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
    <div className='bg-pink p-4 rounded-lg border-4 border-main mb-10'>
      <div className='flex flex-col items-center'>
        <div className='flex max-laptop:flex-col'>
          <div className='w-3/4 h-5/6 max-laptop:w-full'>
            <div className='w-[100%]'>
              <img className='border-green rounded-lg border-4' src={images[currentImage]} alt="" />
            </div>
            <div className='flex justify-center h-1/6'>
              {images.map((_,index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      handleImg(index);
                    }}
                    className={
                      currentImage === index
                        ? 'ImgSlider-buttonSelect'
                        : 'ImgSlider-buttonUnselect hover:bg-main'
                    }
                  >
                    <p>{index + 1}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='w-1/4 description-img-container max-laptop:w-full max-laptop:h-fit max-laptop:ml-0 '>
            <div>
              <h1 className='font-bold text-3xl mt-4'>{imagesData[currentImage].title}</h1>
              <p className={work ? 'image-description h-[570px] max-laptop:h-auto imgDescription-hidden-scrollbar' : 'image-description text-left mx-4 text-lg h-[450px] max-laptop:h-fit imgDescription-hidden-scrollbar'}>{imagesData[currentImage].description}</p>
            </div>
            {work ? null : (
              <div className='max-laptop:mb-6'>
                <h2 className='text-2xl font-bold text-black mt-4'>Link</h2>
                <div className='flex justify-center items-center mt-4 mx-2'>
                  <div className='linkButton'>
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
                    {www === '' ? (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

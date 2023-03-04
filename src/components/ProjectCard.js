import {Link} from 'react-router-dom';
const ProjectCard = ({pageData}) => {
  const url = process.env.PUBLIC_URL;
  const webNotAvaiable = pageData.title === 'Clone di Instagram' ? true : false
  return (
    <div className='relative h-full border-pink border-4 w-full m-2 rounded-lg p-6 bg-secondary text-black'>
      <h1 className='text-3xl font-bold'>{pageData.title}</h1>
      <div className='my-2 h-44'>
        <h2 className='font-bold text-xl'>Tecnologie Utilizzate</h2>
        {pageData.languages.map((language, id) => {
          return <li key={id}>{language}</li>;
        })}
      </div>
      <div>
        <h2 className='my-2 font-bold text-xl'>Descrizione</h2>
        <h2 className='mb-8'>{pageData.shortbio}</h2>
      </div>
      <div className='absolute bottom-2 flex'>
        <Link to={`/${pageData.title}`} state={{pageData}}>
          <button className='linkButton h-[50px]'>
            Più informazioni
          </button>
        </Link>

        {pageData.work ? null : 
        <div className='flex'>
          <div className='linkButton ml-3'>
            <a className='flex items-center' href={pageData.git} target='_blank' rel='noreferrer'>
              <p className='mr-2'>Git Hub</p>
              <img style={{height: '2rem'}} src={url + '/images/git.png'} alt='Git Hub Logo'/>
            </a>
          </div>

          <div className='linkButton ml-3 flex items-center'>
            {webNotAvaiable ? <p className='flex'>Non disponibile</p> : <a href={pageData.www} target='_blank' rel='noreferrer' className='flex items-center'>
              <p className='mr-2'>Sito Web</p>
              <img style={{height: '2rem'}} src={url + '/images/www.png'} alt='Web logo'/>
            </a>}
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default ProjectCard;

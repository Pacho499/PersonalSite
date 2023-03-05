import {Link} from 'react-router-dom';
import { faCircleInfo, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectCard = ({pageData}) => {
  const url = process.env.PUBLIC_URL;
  const webNotAvaiable = pageData.title === 'Clone di Instagram' ? true : false
  return (
    <div className='relative h-full border-pink border-4 w-full m-2 rounded-lg p-6 bg-secondary text-black'>
      <h1 className='text-3xl font-bold'>{pageData.title}</h1>
      <div className='my-2 h-48'>
        <h2 className='font-bold text-xl'>Tecnologie Utilizzate</h2>
        {pageData.languages.map((language, id) => {
          return <li key={id}>{language}</li>;
        })}
      </div>
      <div className='h-60 mb-8'>
        <h2 className='my-2 font-bold text-xl'>Descrizione</h2>
        <h2 className=''>{pageData.shortbio}</h2>
      </div>
      <div className='flex'>
        <Link className='linkButton w-1/3 max-phone:w-fit' to={`/${pageData.title}`} state={{pageData}}>
          <button className='h-[50px] max-phone:hidden'>
            Più informazioni
          </button>
          <FontAwesomeIcon size='2x phone:hidden' icon={faCircleInfo}/>
        </Link>

        {pageData.work ? null : 
        <div className='flex w-2/3'>
          <div className='linkButton ml-3 flex items-center'>
            <a className='flex items-center' href={pageData.git} target='_blank' rel='noreferrer'>
              <p className='mr-2 max-phone:hidden'>Git Hub</p>
              <img style={{height: '2rem'}} src={url + '/images/git.png'} alt='Git Hub Logo'/>
            </a>
          </div>

          <div className='linkButton ml-3 flex items-center'>
            {webNotAvaiable ? <FontAwesomeIcon size='2x' icon={faCircleExclamation}/> 
            : <a href={pageData.www} target='_blank' rel='noreferrer' className='flex items-center'>
              <p className='mr-2 max-phone:hidden'>Sito Web</p>
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

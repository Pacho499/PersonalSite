const ProjectCard = ({title, languages, bio}) => {
  return (
      <div className='relative h-full border-pink border-4 w-full m-2 rounded-lg p-6 bg-secondary text-black'>
        <h1 className='text-2xl'>{title}</h1>
        <div className='my-2 h-44'>
            <h2 >Tecnologie Utilizzate</h2>
                {languages.map((language, id) => {
                    return <li key={id}>{language}</li>
                })}
        </div>
        <div className="">
            <h2 className="my-2" >Descrizione</h2>
            <h2 className="mb-8">{bio}</h2> 
        </div>
        <p className='absolute bottom-2 rounded-lg bg-pink text-black hover:bg-green text-center p-2 w-40'>
          Più informazioni
        </p>
      </div>
  );
};

export default ProjectCard;

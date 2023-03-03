const Input = ({title, handle, value, name}) => {
    return(
        <div className="flex flex-col text-black">
            <label className='my-4 font-bold text-xl'>{title}</label>
            <input
                className='border-main border-2 rounded-lg text-black p-2'
              type='text'
              onChange={handle}
              value={value}
              name={name}
            />
        </div>
    )
}

export default Input
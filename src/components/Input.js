const Input = ({title, handle, value, name}) => {
    console.log(value)
    return(
        <div className="flex flex-col">
            <label className='my-4 text-orange font-bold text-xl'>{title}</label>
            <input
                className='border-2 rounded-lg text-black p-2'
              type='text'
              onChange={handle}
              value={value}
              name={name}
            />
        </div>
    )
}

export default Input
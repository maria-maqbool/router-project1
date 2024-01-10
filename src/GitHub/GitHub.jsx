import React, { useEffect, useState } from 'react'

const GitHub = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://api.github.com/users/maria-maqbool')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

  return (
    <>
        <div className='text-center p-4 bg-stone-500'>
            GitHub: {data.name}
            <img className='text-center' src={data.avatar_url} width={300} alt="image" />
        </div>
        
    </>
    
  )
}

export default GitHub
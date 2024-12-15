import React from 'react'
import Blog from './Blog'

const Articles = () => {
  return (
    <section className='w-screen flex justify-center items-center mt-16'>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-9 px-4 py-3">
            <div className="w-80 h-96 bg-green-300 hidden lg:flex lg:justify-center lg:items-center">
                <div className='w-10/12 h-4/6'>
                    <p className='text-5xl font-bold leading-tight'>More News</p>
                </div>
            </div>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </div>
    </section>
  )
}

export default Articles
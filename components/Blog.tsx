import React from 'react'

type BlogProps = {
  image: string,
  date: Date,
  post: string,
  title: string,
  onClickFunc: () => void
}

const Blog = ({image, date, post, title, onClickFunc} : BlogProps) => {
  return (
    <div className="w-80 h-96 flex flex-col gap-3 justify-between items-center cursor-pointer">
      <div className='w-full h-2/3 bg-bg-img-5 bg-center bg-cover'>
        
      </div>
      <div className='flex justify-between items-center w-full h-14'>
        <div className='w-32 h-full flex justify-center items-center bg-purple-400'>
          <p className='text-xl'>Dec 15 2024</p>
        </div>
        <div className='w-20 h-full flex justify-center items-center bg-yellow-200'>
          <p className='text-xl'>News</p>
        </div>
      </div>
      <div className='w-full h-24 flex justify-center items-center'>
        <p className='text-bold text-2xl text-wrap'>
          WHAT IS THE EFFECT OF HABITUAL JUNK FOOD CONSUMPTION? 
        </p>
      </div>
    </div>
  )
}

export default Blog
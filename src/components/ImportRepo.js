import React from 'react'

const ImportRepo = (props) => {
  return (
    
        <div {...props} className='ml-16 w-[37%] h-96 border-gray-700 border bg-[#111111] rounded-lg'>
          <div className="text-white text-2xl m-6 mt-6">
              Import Repository
          </div>
          <div>
            <div className='m-auto w-80 text-gray-500 text-xs text-center my-6'>Select a provider to import an existing project from a Respository</div>
            <button className='flex w-80 px-12 justify-center py-4 text-white rounded-xl m-auto items-center bg-[#1f2123]'>
              <img src="/assets/git.svg" className="mr-2" alt="logo" />
              Continue with GitHub
            </button>
            <button className='flex w-80 mt-4 px-12 justify-center py-4 text-white rounded-xl m-auto items-center bg-[#956BD0]'>
              <img src="/assets/git.svg" className="mr-2" alt="logo" />
              Continue with GitLab
            </button>
            <button className='flex w-80 mt-4 px-12 justify-center py-4 text-white rounded-xl m-auto items-center bg-[#0C40D4]'>
              <img src="/assets/git.svg" className="mr-2" alt="logo" />
              Continue with BitBucket
            </button>
          </div>
        </div>
    
  )
}

export default ImportRepo
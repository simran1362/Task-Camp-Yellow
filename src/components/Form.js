import React, { useEffect, useState } from 'react'
import UploadFile from './shared/UploadFile'
import Loading from './shared/Loading';
import { Progress } from "@material-tailwind/react";
import { ProgressBar } from './shared/ProgressBar';

const Form = () => {

    const [isActive, setIsActive] = useState(false);
    const [formData, setformData] = useState({csvStory: false, gameAssets:false, appIcon:false })
    const [isLoading, setIsLoading] = useState(false);
    const [deploy,setDeploy] = useState(0);
   
    useEffect(()=>{
      if(isLoading) setTimeout(()=>{setIsLoading(false);},5000);
    },[isLoading])
    useEffect(()=>{
      if(deploy>0 && deploy<100) setTimeout(()=>{setDeploy(deploy+1);},100);
      if(deploy===100) setDeploy(0);
    },[deploy])

    function setAllexcept(name){
      Object.keys(formData).forEach((key)=>{
        console.log(key)
        if(key!==name)
          setformData(prevState=>({...prevState,[key]: false}))
        else
          setformData(prevState=>({...prevState,[key]: true}))
      })
    }
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault(); setDeploy(1)}} >
        <div className="m-6">
            <div className="text-gray-500 mb-2">
                Project Name
            </div>
            <input 
                // style={{
                //     borderColor: isActive ? 'white' : '',
                //     color: isActive ? 'gray' : '',
                // }} 
                type="text" onClick={()=> {
                    setIsActive(!isActive)
                }} 
                className="border border-gray-500 input input-white px-4 py-3 w-full rounded-lg bg-transparent" />
        </div>
        <div className="mt-8 ml-6 mr-6">
            <div className="text-gray-500">
                Upload Game Files
            </div>
            <div className='flex'>
                <button onClick={(e) => {
                    e.preventDefault()
                    setAllexcept('csvStory')}} className = {`my-4 ${formData['csvStory'] ? 'bg-white text-black' : ''} border border-gray-500 px-2 py-2 rounded-lg w-32`} >CSV Story</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    setAllexcept('gameAssets')}} className={`my-4 ${formData['gameAssets'] ? 'bg-white text-black' : ''} mx-4 border border-gray-500 px-2 py-2 rounded-lg w-32`}>Game Assets</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    setAllexcept('appIcon')}} className={`my-4 ${formData['appIcon'] ? 'bg-white text-black' : ''} border border-gray-500 px-2 py-2 rounded-lg w-32`}>App Icon</button>
            </div>
            {formData['csvStory'] && <UploadFile onChange={()=>{setIsLoading(true)}} /> }
            {formData['gameAssets'] && <UploadFile onChange={()=>{setIsLoading(true)}} /> }
            {formData['appIcon'] && <UploadFile onChange={()=>{setIsLoading(true)}} /> }
            {isLoading && <Loading className/> } 


            {deploy===0 ? (<button type="submit" className='border w-full mt-16 mb-4 px-4 py-4 rounded-lg bg-white text-center text-black'>Deploy Your Game</button>): <ProgressBar value={deploy} name="Done" />}
            
        </div>
      </form>
    </div>
  )
}

export default Form

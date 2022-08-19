import React from 'react'
import Header from '../../components/Header'
import {getProviders, signIn} from 'next-auth/react'


export default function signin({providers}) {
  return (
    <><Header />
    <div className='mt-40'>
      {Object.values(providers).map(provider => (
        <div key={provider.name} className="flex flex-col items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google logo" className='w-52 object-cover' />
          <p className='text-sm italic my-10 text-center'>this website is created for learning purposes</p>
          <button onClick={()=>signIn(provider.id, {callbackUrl:"/"})} className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500">Sign in with {provider.name}</button>
        </div>
      ))}
    </div>
    </>
  )
}


export async function getServerSideProps(context){
  const providers = await getProviders();
  return {
    props:{providers}
  }
}
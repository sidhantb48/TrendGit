import React from 'react';
import { GrGithub } from "react-icons/gr";

export const Footer = () => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py16 px-5 text-center'>
        <p className='max-w-xl font-light text-gray-500 mb-10'>
        <div className="flex justify-center items-center">
          <div className="mr-4"><GrGithub size={32} /> </div>
          <div className="flex-none mr-4">© 2023 GitHub, Inc.</div>
          <div className="mr-6 text-blue-500">Terms</div>
          <div className="mr-6 text-blue-500">Privacy</div>
          <div className="mr-6 text-blue-500">Security</div>
          <div className="mr-6 text-blue-500">Status</div>
          <div className="mr-6 text-blue-500">Docs</div>
          <div className="mr-6 text-blue-500">Contact</div>
          <div className="mr-6 text-blue-500">Pricing</div>
          <div className="mr-6 text-blue-500">API</div>
          <div className="mr-6 text-blue-500">Training</div>
          <div className="mr-6 text-blue-500">Blog</div>
          <div className="mr-6 text-blue-500">About</div>
        </div>
        </p>
    </section>
  )
}

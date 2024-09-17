"use client";
import Bot from '@/Components/Bot/Bot';
import { BotIcon } from '@/Components/Bot/Icon';
import LineGraph from '@/Components/Graph/LineGraph';
import ExpandableTable from '@/Components/Table/ExpandableTable';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isBotOpen,setIsBotOpen]=useState<boolean>(false);
  const openBot=()=>setIsBotOpen(true);
  const closeBot=()=>setIsBotOpen(false);

  return (
    <div className="text-[#593690]">
      <section className="m-10 flex items-center">
        <div className="w-1/2 m-10">
          <h2 className='text-6xl'>AI is after our jobs!</h2>
          <h2 className="text-4xl py-4">How many times have you heard it?</h2>
          <p className="text-justify text-gray-600">
          The rise of artificial intelligence has sparked concerns about job displacement across various industries. As AI systems become increasingly sophisticated, they can perform tasks that were once exclusive to human workers, leading to fears of widespread unemployment. Those are true in many cases.
          </p>
          <a href="#jobs">
            <button className="bg-[#593791] hover:bg-[#6b3fb4] text-white font-bold py-2 px-4 rounded my-8 text-xl">
              But there is another side!
            </button>
          </a>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <Image 
          src="/ai_news.png"
          alt="News articles on AI layoffs"
          width="1750"  
          height="1750"
          className='w-3/4 rounded-md p-8 bg-white'
          />
        </div>
      </section>
      <section className='m-10 flex justify-evenly items-center' id='jobs'>
        <LineGraph/>
        <div className="w-1/3 m-10">
          <h2 className='text-6xl'>Rise in new-gen jobs!</h2>
          <h2 className="text-4xl py-4">Really, How much rise?</h2>
          <p className="text-justify text-gray-600">
            The job market is evolving with the rise of data-centric roles like data scientists, engineers, and ML specialists. These professionals are in high demand across industries, using big data and AI to drive innovation. As technology advances, these roles are becoming increasingly crucial for business success.
          </p>
          <a href="#main_table">
            <button className="bg-[#593791] hover:bg-[#6b3fb4] text-white font-bold py-2 px-4 rounded my-8 text-xl">
              Want to Learn more?
            </button>
          </a>
        </div>
      </section>
      <section className='mx-20 my-10'>
        <div>
          <h2 className='text-6xl'>See details.</h2>
          <h2 className="text-4xl py-4">See the table below.</h2>
        </div>
        <ExpandableTable/>
      </section>
      <div>
          <Bot isOpen={isBotOpen} onClose={closeBot}/>
          <button onClick={openBot} className="fixed bottom-4 right-4 bg-white border-[#8652d9] border-2 animate-bounce p-2 rounded-[50%] text-xl flex flex-col justify-center items-center">
            <BotIcon/>
          </button>
      </div>
    </div>
  );
}
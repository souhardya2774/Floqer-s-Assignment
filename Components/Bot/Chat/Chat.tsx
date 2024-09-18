"use client";

import { FormEvent, useEffect, useRef, useState, useTransition } from "react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Loader2Icon } from "lucide-react";
import ChatMessage from "./ChatMessage";

const askQuestion=async(query:string)=>{
    try {
        const response=await fetch("https://floqer-s-assignment-backend.onrender.com/query",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query:query})
        });

        const data=await response.json();
        return {
            success: true,
            message: data.message
        };
    } catch (error) {
        return {
            success: false,
            message: error
        };
    }
};

export type Message={
    role: "human" | "ai" | "placeholder";
    message: string;
};

function Chat() {
    const [input, setInput]= useState<string>("");
    const [isPending, startTransition]= useTransition();
    const [messages,setMessage]= useState<Message[]>([]);
    const bottomOfChatRef= useRef<HTMLDivElement>(null);

    useEffect(()=>{
        bottomOfChatRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    },[messages]);

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const q=input;
        setInput("");
        setMessage((prev)=>[
            ...prev,
            {
                role: "human",
                message: q
            },{
                role: "ai",
                message: "Thinking..."
            }
        ]);

        startTransition(async()=>{
            const { success, message}=await askQuestion(q);
            
            if(!success){
                setMessage((prev)=>
                    prev.slice(0,prev.length-1).concat([
                        {
                            role: "ai",
                            message: `Whoops... ${message}`
                        }
                    ])
                );
            }

            setMessage((prev)=>
                prev.slice(0,prev.length-1).concat([
                    {
                        role: "ai",
                        message: message
                    }
                ])
            );
        });
    }

  return (
    <div className="flex flex-col h-full overflow-scroll">
        {
        (messages && messages.length && messages[messages.length-1].message === "Thinking...")?
            <div className="fixed w-full bg-violet-600/75 text-white text-lg font-bold p-2 z-10">
                Sorry, sometimes it can take 1-2 minutes complete the query. Please bear with us 🥺. 
            </div>
        :<></>
        }
        <div className="flex-1 w-full">
                <div className="p-5">
                    {
                        messages.length===0 &&
                        (
                            <ChatMessage key="placeholder" message={{
                                role: "ai",
                                message: "Ask me anything about the dataset! It may take 1-2 minutes first time, please stick with us 🥺!"
                            }}/>
                        )
                    }
                    {messages.map((message,index)=>(
                        <ChatMessage key={index} message={message}/>
                    ))}

                    <div ref={bottomOfChatRef}/>
                </div>
        </div>
        <form
        onSubmit={handleSubmit}
        className="flex sticky bottom-0 space-x-2 p-5 bg-indigo-600/75"
        >
            <Input
            placeholder="Ask a Question..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="bg-white"
            />
            <Button
            type="submit"
            disabled={!input || isPending}>{
                isPending?(
                    <Loader2Icon className="animate-spin text-indigo-600"/>
                ):("Ask")
            }</Button>
        </form>
    </div>
  );
}

export default Chat;
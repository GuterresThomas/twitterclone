import React from "react";
import Form from "./form";

const TwitterBackground = () => {
    return (
        <div className="flex bg-white">
            <img src="/twitterbg.png" className="w-2/4 h-screen"></img>
            <img src="/twitter (1).svg" className="z-10 h-10 fill-indigo-500"></img>    
            <div className="ml-10 mb-10 self-center">
                <h1 className="font-extrabold font-sans-Roboto text-6xl ml-2 mb-10 self-center">Acontecendo agora</h1>
                <h3 className="font-extrabold font-sans-Roboto text-3xl ml-2 mb-10 self-center">Inscreva-se no Twitter hoje mesmo.</h3>
                <Form></Form>
            </div>
        </div>
    )
};

export default TwitterBackground;
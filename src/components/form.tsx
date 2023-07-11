import React from "react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Form = () => {
    return (
      <form className="">
        <button className=" flex justify-center border-solid border-zinc-200 border-2 rounded-3xl bg-white w-3/4 mb-3 h-10"><img src="/google.svg" className="h-7 w-10 pt-1 pr-3"></img><span className="font-family-Roboto pl-1 pt-1">Inscreva-se no google</span></button>
        <button className="flex justify-center border-solid border-zinc-200 border-2 rounded-3xl bg-white w-3/4 mb-3 h-10"><img src="/apple.svg" className="h-8 w-10 pt-1 pr-1 pl-3"></img><span className="font-family-Roboto pl-4 pt-1 font-semibold">Inscreva-se com apple</span></button>
        <hr className="w-3/4 mb-3"></hr>
        <button className="border-2 rounded-3xl bg-sky-500 w-3/4 text mb-3 h-10"><span className="font-sans-Roboto font-bold text-white">Criar conta</span></button>
        <p className="text-xs w-3/4">Ao se inscrever, você concorda com os Termos de Serviço e a Política de Privacidade, incluindo o Uso de Cookies.</p>
      </form>
    );
  };

export default Form
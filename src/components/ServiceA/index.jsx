
  import React from "react";
  import { Button, Text, Img } from "./.."

  
  
  
  
  
  export default function ServiceA({imagem = "images/img_container.png",title = "FALE COMIGO!",subtitle = "DANTAS SOLUÇÕES",text = "Soluções especializadas para o seu negocio",button = "CONTATO",...props}){

    

    

    return (
      

{/* contact section */}<div {...props}>
<Img src={imagem} alt="container" className="my-[242px] h-[380px] w-[33%] object-cover md:w-full" />
<div className="flex flex-1 flex-col items-start gap-[21px] md:self-stretch">
<Text size="lg" as="p" className="tracking-[0.50px]">
{title}</Text>
<div className="flex">
<Text size="8xl" as="p" className="mt-2 tracking-[-1.50px]">
{subtitle}</Text>
</div>
<Text size="6xl" as="p" className="w-[82%] leading-[56px] md:w-full">
{text}</Text>
<Button color="green_700" size="md" className="min-w-[92px] rounded-[18px] border border-solid border-green-400 tracking-[0.50px]">
{button}</Button>
</div>
</div>

    )
  }
  
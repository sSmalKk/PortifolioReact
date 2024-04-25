
  import React from "react";
  import { Button, Text } from "./.."

  
  
  
  
  
  export default function ServiceC({title = "FALE COMIGO!",subtitle = "DANTAS SOLUÇÕES",text = "Soluções especializadas para o seu negocio",button = "CONTATO",...props}){

    

    

    return (
      

{/* testimonials section */}<div {...props} className="container-sm">
<Text size="lg" as="p" className="mt-[563px] tracking-[0.50px] !text-white-A700">
{title}</Text>
<div className="flex">
<Text size="8xl" as="p" className="mt-2 tracking-[-1.50px] !text-white-A700">
{subtitle}</Text>
</div>
<Text size="6xl" as="p" className="w-[49%] leading-[56px] !text-white-A700 md:w-full">
{text}</Text>
<Button color="black_900_60" size="sm" shape="round" className="min-w-[92px] border border-solid border-green-700 tracking-[0.50px]">
{button}</Button>
</div>

    )
  }
  
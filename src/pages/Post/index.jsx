import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { BlogModel, Button, Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Blog, content } from "../../components/content.jsx";

export default function Post({ id }) {
  // Encontrar o post correspondente pelo ID
  const post = Blog.find(post => post.id === id);

  if (!post) {
    // Se não houver post com o ID fornecido, retornar uma mensagem de erro ou redirecionar para uma página 404
    return (
      <div>
        <p>Post not found!</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.subtitle} />
      </Helmet>
      <div className="flex w-full flex-col gap-[11px] bg-gray-50">
        {/* header section */}
        <Header content={content} className="header sticky container-xs gap-5 px-7 md:p-5 sm:px-5" style={{ position: 'fixed', padding: '5px' }} />
        <div className="flex flex-col items-center gap-5">
          {/* about section */}
          <div className="container-xs flex flex-col items-center gap-[83px] md:gap-[62px] md:p-5 sm:gap-[41px]">
            <div className="flex items-center gap-[50px] self-stretch md:flex-col">
              <Img
                src={post.image} // Usar a imagem do post
                alt="container"
                className="h-[250px] w-[26%] object-cover md:w-full"
              />
              <div className="flex flex-1 flex-col items-start gap-[23px] md:self-stretch">
                <Heading as="h1" className="!font-bold uppercase tracking-[2.70px]">
                  {post.title}
                </Heading>
                <div className="flex self-center">
                  <Text size="8xl" as="p" className="mt-1.5 tracking-[-1.50px]">
                    {post.subtitle}
                  </Text>
                </div>
                <Text size="6xl" as="p">
                  {post.content}
                </Text>
              </div>
            </div>
            <Img src={post.image} alt="container" className="h-[453px] w-[53%] object-cover" />
          </div>
          {/* footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
}

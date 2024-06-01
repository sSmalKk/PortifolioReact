import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BlogModel } from "../../components";
import { Blog, content } from "../../components/content.jsx"


export default function Post({ id, blog }) {
  // Verifica se o objeto blog e o post 0 existem antes de tentar acessá-los
  if (!blog || !Array.isArray(blog) || !blog[0]) {
    return <p>Post not found</p>;
  }

  const post = blog[0]; // Seleciona o primeiro post

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.alternativeHeadline} />
      </Helmet>
      <div className="flex w-full flex-col gap-[11px] bg-gray-50">
        {/* header section */}
        <Header content={content} style={{ position: 'fixed', padding: '5px' }} />
        <div className="flex flex-col items-center gap-5" style={{ marginTop: '100px' }}>
          {/* about section */}
          <div className="container-xs flex flex-col items-center gap-[83px] md:gap-[62px] md:p-5 sm:gap-[41px]">
            <div className="flex items-center gap-[50px] self-stretch md:flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="h-[250px] w-[26%] object-cover md:w-full"
              />

              <div className="flex flex-1 flex-col items-start gap-[23px] md:self-stretch" style={{ marginTop: '50px' }}>
                <h1 className="font-bold uppercase tracking-[2.70px] mt-5">
                  {post.title}
                </h1>
                <div className="flex self-center">
                  <p className="text-[64px] mt-1.5 tracking-[-1.50px]">
                    {post.alternativeHeadline}
                  </p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.articleBody }} />
              </div>
            </div>
            <img src={post.image} alt={post.title} className="h-[453px] w-[53%] object-cover" />
          </div>
          {/* Renderiza a seção do artigo */}
          <div dangerouslySetInnerHTML={{ __html: post.articleSection }} />
          {/* footer section */}
          <BlogModel blogData={Blog} content={content} />

          <Footer />
        </div>
      </div>
    </>
  );
}

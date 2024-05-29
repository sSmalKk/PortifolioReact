import React, { useState } from "react";
import {ServicesComponent, Img, Heading, Button } from "../../components"; // Import any required components

const BlogModel = ({ blogData, content }) => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const filteredPosts = blogData.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const hasPrevPage = currentPage > 1;
  const hasNextPage = indexOfLastPost < filteredPosts.length;

  return (

    <div className="mt-[18px] flex flex-col gap-5">


      <div className="flex flex-col items-start gap-8 md:flex-col">
        {/* Destaque do primeiro post */}
        <div className="mt-[18px] flex flex-col gap-5">
          <div className="flex flex-col items-center">
            <div className="flex items-start gap-2.5 self-stretch rounded-[3px] p-2.5">
              <input className="!font-inter tracking-[0.50px] !text-black-900_60" placeholder="Filter" />
            </div>
            <Heading as="h4" className="!font-bold uppercase tracking-[2.70px]">
              {blogData[0].author}
            </Heading>
            <Heading size="xl" as="h5" className="mt-[7px] !text-gray-900">
              {blogData[0].title}
              <br />
              {blogData[0].subtitle}
            </Heading>
          </div>
          {/* Destaque do primeiro post */}
          <div className="flex flex-1 flex-col gap-8 md:self-stretch">
            <Img src={blogData[0].image} alt="container" className="h-[453px] object-cover" />
            <div className="flex flex-col items-start gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-8 shadow-sm sm:p-5">
              <Heading as="h6" className="mt-[11px]">
                {blogData[0].author}
              </Heading>
              <Heading size="md" as="h3" className="w-full leading-10 !text-gray-900">
                <>
                  {blogData[0].title}
                  <br />
                  {blogData[0].subtitle}
                </>
              </Heading>
            </div>
          </div>
        </div>
        {/* Lista de posts restantes */}
        <div className="grid-container">
          {currentPosts.map((post, index) => (
            <div key={`blog-post-${index}`} className="blog-post">
              <Img src={post.image} alt="container" className="post-image" />
              <div className="post-content">
                <h6>{post.author}</h6>
                <h3>
                  {post.title}
                  <br />
                  {post.subtitle}
                </h3>
                <Button className="!text-gray-900">
          {content[0].cookiesmais}

        </Button>
              </div>
            </div>
          ))}
        </div>


      </div><div className="flex justify-between mt-5">
        <Button onClick={prevPage} disabled={!hasPrevPage} className="!text-gray-900">
          {content[0].buttonPrevious}

        </Button>
        <Button onClick={nextPage} disabled={!hasNextPage} className="!text-gray-900">
          {content[0].buttonNext}
        </Button>
      </div>
    </div>
  );
};

export default BlogModel;




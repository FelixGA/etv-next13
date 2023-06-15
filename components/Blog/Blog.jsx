import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Sidebar from '../Blog/SideBar';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Blog({ getBlogs }) {

  const [blogs, setBlogs] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    let index = dataToShow.length;
    if (dataToShow.length < blogs.length) {
      setDataToShow(dataToShow.concat(blogs.slice(index, index +1)));
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    setBlogs(getBlogs);
    if (getBlogs.length > 4) {
      setDataToShow(getBlogs.slice(0, 3));
      setHasMore(true);
    } else {
      setDataToShow(getBlogs);
    }
  }, [getBlogs]);

  const scrollRef = useRef();


  // console.log(blogs, 'w blog')
  // console.log(dataToShow, 'dataTOshow')
  // .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  return (
    <>
      <div className="grid justify-center grid-cols-1 2xl:grid-cols-[auto,_320px] gap-5 2xl:mx-48 cursor-pointer  ">
        <div className="w-full">
        <div  ref={scrollRef}></div>
          <InfiniteScroll
            dataLength={dataToShow.length}
            next={fetchMoreData}
            hasMore={hasMore}
            scrollThreshold={scrollRef.current && scrollRef.current.clientHeight}

            loader={<h4>Loading...</h4>}
            style={{ overflow: 'hidden' }}
          >
            {dataToShow?.map((post, index) => {
              return (
                <Link
                  href={`/magazin/${post.category}/${post.slug}`}
                  passHref
                  key={index}
                >
                  <div className="relative flex flex-col items-center my-10 overflow-hidden transition delay-100 bg-white border-t shadow-xl border-t-blue-extralight sm:flex-row hover:scale-105 hover:z-10">
                    <div className="w-[350px] h-[250px] overflow-hidden">
                      {post.src && (
                        <a className="relative w-full">
                          <Image
                            src={post.src}
                            alt={post.slug}
                            width={300}
                            height={214}
                            objectFit="cover"
                            layout="responsive"
                            priority={index < 4 ? true : false}
                          />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 w-full px-4 py-4 justify-evenly">
                      <p className="flex-grow ">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                      <p className="flex-grow py-2 text-xl font-bold text-blue-dark">
                        {post.title}
                      </p>
                      <p className="hidden md:line-clamp-4 md:block">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </InfiniteScroll>
        </div>
        <div className="">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
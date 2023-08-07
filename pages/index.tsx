import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import { useState } from 'react'
import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const ITEMS_PER_PAGE = 4
  const [postsFromApi, setPostsFromApi] = useState(morePosts);
  const [items, setItems] = useState( [...morePosts].splice(0, ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(morePosts.length / ITEMS_PER_PAGE);
  
  const nextHandler = () => {
    const totalPosts = postsFromApi.length;
  
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
  
    console.log(firstIndex);
    console.log(totalPosts)
    if(firstIndex >= totalPosts) return;
    setItems( [...postsFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
    console.log("next");
  }
  
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if(prevPage < 0) return;
    const firstIndex = prevPage * ITEMS_PER_PAGE;
  
    setItems( [...postsFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
    console.log("prev");
  }

  const nextPageHandler = (i) => {
    const firstIndex = i * ITEMS_PER_PAGE;
  
    setItems( [...postsFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(i);
    console.log("prev");
  }

  return (
    <>
      <Layout>
        <Head>
          <title>{`CiberMaster`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={items} />}
          <nav style={{marginBottom: "20px"}} aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" style={{cursor: "pointer"}} onClick={prevHandler}>Previous</a></li>
              {
              [...Array(pages)].map((e, i) => <li onClick={() => nextPageHandler(i)} className={"page-item " + (currentPage == i ? 'active' : '')}><a className="page-link" >{i}</a></li>)
              } 
              <li className="page-item"><a className="page-link" style={{cursor: "pointer"}} onClick={nextHandler}>Next</a></li>
            </ul>
          </nav>
        </Container>
      </Layout>
    </>
  )
 
}


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

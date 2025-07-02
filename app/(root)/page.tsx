import React from 'react';
import { Header, VideoCard } from '@/components';
import { dummyCards  } from '@/constants';

const Page = () => {
  return (
      <main className="wrapper page">
          <Header subHeader="Public Library" title="All Videos" />

          {dummyCards?.length > 0 ? (
              <section className="video-grid">
                  {dummyCards.map(( video ) => (
                      <VideoCard
                          key={video.id}
                          id={video.id}
                          title={video.title}
                          thumbnail={video.thumbnail}
                          createdAt={video.createdAt}
                          userImg={video.userImg?? ""}
                          username={video.username ?? "Guest"}
                          views={video.views}
                          visibility={video.visibility}
                          duration={video.duration}
                      />
                  ))}
              </section> ) : (<div>Hello</div>)}
      </main>
  )
}

export default Page
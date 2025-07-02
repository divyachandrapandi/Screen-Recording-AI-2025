import React from 'react';
import Header from '@/components/Header';
import { dummyCards } from '@/constants';
import { VideoCard } from '@/components';


const Page = async ({params} : ParamsWithSearch) => {

    const {id} = await params;
    return (
        <main className="wrapper page">
            <Header subHeader="Divya@mail" title="Divya | Chandrapandi " userImg={"/assets/images/dummy.jpg"} />
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

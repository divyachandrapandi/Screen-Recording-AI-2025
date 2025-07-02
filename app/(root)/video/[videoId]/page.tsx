import React from 'react'

 const page = async ({ params }: Params) => {
    const { videoId } = await params;

    return (
        <main className="wrapper page">
            video
        </main>
    )
}
export default page;
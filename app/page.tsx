import Image from 'next/image'
import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src="/profile.png"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          GyuHyeon’s Data Journal
        </h1>
      </div>
      <p className="mb-4">
        {`Here, I share insights, tutorials, and projects on data-driven technologies. 
        Stay tuned and thanks for your interest!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

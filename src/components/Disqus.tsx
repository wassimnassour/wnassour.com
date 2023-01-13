import { DiscussionEmbed } from 'disqus-react'
import { SITE_URL } from 'utils'
import { IPost } from 'types/post'

interface Props {
  slug: string
  post: Omit<IPost, 'slug'>
}

const DisqusComments = ({ post, slug }: Props) => {
  const disqusShortname = 'wassim'
  const disqusConfig = {
    url: SITE_URL + slug,
    identifier: post.title,
    title: post.title,
  }
  return (
    <div className="my-4">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
export default DisqusComments

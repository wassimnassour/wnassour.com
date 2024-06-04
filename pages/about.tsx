import { Layout } from 'components'
import { ExperienceAndAbout, LeftSection } from 'components/About'

const About = () => {
  return (
    <Layout>
      <div className="max-w-5xl lg:mt-10 p-2 sm:p-6  gap-x-10 mx-auto">
        <LeftSection />
        <ExperienceAndAbout />
      </div>
    </Layout>
  )
}

export default About

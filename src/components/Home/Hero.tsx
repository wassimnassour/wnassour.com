/* eslint-disable react/no-unescaped-entities */
export const Hero = () => {
  return (
    <div
      className="h-[450px]  bg-primary "
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
    >
      <div className="flex flex-col items-start justify-center w-10/12 h-full max-w-5xl mx-auto text-white sm:w-10/12 md:9/12">
        <span className="text-gray-400 ">Software Engineer</span>
        <h2 className="mt-3 text-4xl font-medium md:text-6xl ">
          Wassim Nassour
        </h2>
        <p className="font-normal text-gray-400 my-7">
          I'm a Self-taught JavaScript Developer, proficient in Front-End, I'm
          passionate about the Tech world, skilled at writing clean and readable
          Code, by using current best practices in web development
        </p>
        <p className="border-b border-secondary">Let's have Chat</p>
      </div>
    </div>
  )
}

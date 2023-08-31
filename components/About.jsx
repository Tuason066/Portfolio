const About = () => {
  return (
    <section
      id="about"
      className="bg-lightest text-dark text-center py-14 lg:py-20"
    >
      <div className="center max-w-4xl">
        <h2 className="h2 uppercase text-darkest mb-8 lg:mb-16">about me</h2>
        {/*  <p className="text-base md:text-lg lg:text-xl">
          I am highly motivated self-taught{" "}
          <strong>Front-end Web Developer</strong> with a passion for creating
          pixel-perfect designs and seamless user experiences. Seeking a
          position where I can leverage my skills in Nextjs, Nodejs, JavaScript
          (ES6), and other front-end development tools to deliver high quality
          web applications.
        </p> */}
        <p className="text-base md:text-lg lg:text-xl tracking-wide text-justify indent-4 md:indent-8">
          I am a fourth-year College student at <em>Talisay City College</em>,
          pursuing a{" "}
          <em>
            Bachelor of Science in Industrial Technology major in Computer
            Technology
          </em>
          . Additionally, I am a{" "}
          <strong>
            <em>self-taught front-end developer</em>
          </strong>
          . I find joy in building web applications, and as time goes on, it has
          transformed into a personal hobby. The tech stacks I have used include
          Javascript(es6), nodejs, expressjs, nextjs, reactjs, tailwindcss, and
          several other frontend development tools. What keeps me motivated in
          web development is that I enjoy bringing my ideas to life, and what
          makes it more interesting is that I can learn new things/skills every
          day that are emerging frequently, as well as figuring out how to
          implement a particular feature, optimize performance, or debug issues.
          In the future, I might be able to find a work-from-home working
          arrangement, which I prefer.
        </p>
      </div>
    </section>
  );
};

export default About;

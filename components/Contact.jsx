const Contact = () => {
  return (
    <section id="contact" className="py-14 lg:py-20 bg-darkest">
      <div className="center">
        <div className="text-center text-lightest mb-8 lg:mb-16">
          <h2 className="h2 uppercase mb-2 lg:mb-4">let's get in touch</h2>
          <p className="text-xs md:text-base">
            Ready to ignite my career and bring my passion to your organization.{" "}
            <br className="hidden md:block" />
            Reach out to explore how we can create a winning team together!
          </p>
        </div>
        <form
          action="https://getform.io/f/a984d8c2-ae7d-4178-acd2-cfb23d22c6df"
          method="POST"
        >
          <div className="grid gap-y-2 md:grid-cols-2 md:gap-3 max-w-xl w-full mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Name / Company Name"
              className="bg-lightest text-base text-dark placeholder:text-base placeholder:text-dark placeholder:opacity-70 w-full px-2 py-3 md:px-3 md:py-4 rounded shadow-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              pattern="^[a-zA-Z0-9._%+-]+@gmail.com$"
              className="bg-lightest text-base text-dark placeholder:text-base placeholder:text-dark placeholder:opacity-70 w-full px-2 py-3 md:px-3 md:py-4 rounded shadow-lg"
              required
            />
            <textarea
              name="message"
              id="message"
              rows="10"
              className="md:col-span-2 w-full bg-lightest text-base text-dark placeholder:text-base placeholder:text-dark placeholder:opacity-70 px-2 py-3 md:px-3 md:py-4 rounded shadow-lg"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="text-center mt-4 md:mt-6">
            <button
              type="submit"
              className="uppercase bg-darkAccent text-lightest hover:bg-dark px-8 py-2 rounded transition duration-500 shadow-lg"
            >
              connect
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

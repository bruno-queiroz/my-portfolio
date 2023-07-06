import Subtitle from "./Subtitle";

const Contact = () => {
  const onSendingEmail = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  return (
    <section className="flex justify-center p-4">
      <div className="max-w-[700px] w-full">
        <Subtitle>Contact</Subtitle>
        <form className="flex flex-col gap-8 w-full">
          <label className="flex flex-col gap-1">
            <span>Your Name</span>
            <input
              type="text"
              className="p-2 bg-black/30 transition-all rounded-md border-b-[3px] border-b-primary"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Your Email</span>
            <input
              type="email"
              className="bg-black/30 p-2 rounded-md border-b-[3px] border-b-primary"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Your Message</span>
            <textarea className="border-b-[3px] p-2 rounded-md border-b-primary bg-black/30" />
          </label>
          <button
            className="px-6 py-[10px] mt-4 bg-primary text-black font-semibold w-[fit-content] rounded-md mx-auto"
            onClick={onSendingEmail}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

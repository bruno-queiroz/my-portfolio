import { useRef, useState } from "react";
import Subtitle from "./Subtitle";
import emailjs from "@emailjs/browser";
import EmailNotification from "./EmailNotification";
import LoadingSpinner from "./LoadingSpinner";

const Contact = () => {
  const [notification, setNotification] = useState({
    isActive: false,
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onSendingEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameRef.current && emailRef.current && messageRef.current) {
      const templateParams = {
        from_name: nameRef.current.value,
        to_name: "Bruno",
        message: messageRef.current.value,
        reply_to: emailRef.current.value,
      };
      setIsSending(true);

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            setNotification({
              isActive: true,
              message: "Thanks for reaching out!",
            });
            nameRef.current!.value = "";
            messageRef.current!.value = "";
            emailRef.current!.value = "";
            setIsSending(false);
          },
          () => {
            setIsSending(false);
            setNotification({
              isActive: true,
              message: "Something went wrong",
            });
          }
        );
    }
  };
  return (
    <section className="flex justify-center p-4 relative py-12" id="contact">
      <EmailNotification {...{ notification, setNotification }} />
      <div className="max-w-[700px] w-full">
        <Subtitle>Contato</Subtitle>
        <form onSubmit={onSendingEmail} className="flex flex-col gap-8 w-full">
          <label className="flex flex-col gap-1">
            <span>Seu Nome</span>
            <input
              ref={nameRef}
              type="text"
              required
              className="p-2 bg-black/30 transition-all rounded-md border-b-[3px] border-b-primary"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Seu Email</span>
            <input
              ref={emailRef}
              type="email"
              required
              className="bg-black/30 p-2 rounded-md border-b-[3px] border-b-primary"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Sua Mensagem</span>
            <textarea
              ref={messageRef}
              required
              className="border-b-[3px] p-2 rounded-md border-b-primary bg-black/30"
            />
          </label>
          <button
            className="grid place-items-center w-[85px] h-[45px] mt-4 bg-primary  font-semibold rounded-md mx-auto"
            disabled={isSending}
          >
            {isSending ? <LoadingSpinner /> : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

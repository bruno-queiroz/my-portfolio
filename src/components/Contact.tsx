import { useRef, useState } from "react";
import Subtitle from "./Subtitle";
import emailjs from "@emailjs/browser";
import EmailNotification from "./EmailNotification";
import LoadingSpinner from "./LoadingSpinner";
import { useLanguage } from "../context/languageContext";
import { contact_en } from "../content/languages/english/contact";
import { contact_pt } from "../content/languages/portuguese/contact";

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
              message: "Obrigado por entrar em contato!",
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
              message: "Ocorreu um problema",
            });
          }
        );
    }
  };

  const [languageIndex] = useLanguage();
  const language = [contact_en, contact_pt];
  return (
    <section className="flex justify-center p-4 relative py-12" id="contact">
      <EmailNotification {...{ notification, setNotification }} />
      <div className="max-w-[700px] w-full">
        <Subtitle>{language[languageIndex].sub_title}</Subtitle>
        <form onSubmit={onSendingEmail} className="flex flex-col gap-8 w-full">
          <label className="flex flex-col gap-1">
            <span>{language[languageIndex].input1}</span>
            <input
              ref={nameRef}
              type="text"
              required
              className="p-2 bg-black/30 transition-all rounded-md border-b-[3px] border-b-primary"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>{language[languageIndex].input2}</span>
            <input
              ref={emailRef}
              type="email"
              required
              className="bg-black/30 p-2 rounded-md border-b-[3px] border-b-primary"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>{language[languageIndex].input3}</span>
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
            {isSending ? <LoadingSpinner /> : language[languageIndex].send_btn}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

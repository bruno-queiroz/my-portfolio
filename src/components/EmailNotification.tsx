import { useEffect } from "react";

interface EmailNotificationProps {
  notification: {
    isActive: boolean;
    message: string;
  };
  setNotification: React.Dispatch<
    React.SetStateAction<{
      isActive: boolean;
      message: string;
    }>
  >;
}

const EmailNotification = ({
  notification: { isActive, message },
  setNotification,
}: EmailNotificationProps) => {
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setNotification({
          isActive: false,
          message: "",
        });
      }, 2000);
    }
  }, [isActive]);

  return (
    <div
      className={`absolute left-0 p-6 bg-black/30 text-primary transition-transform backdrop-blur-sm border-[2px] box-glowy-shadow border-l-0 border-primary text-glowy-shadow font-semibold rounded-tr-md rounded-br-md ${
        isActive ? "translate-x-0" : "translate-x-[-105%]"
      }`}
    >
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default EmailNotification;

import { createTransport } from 'nodemailer';

type Message = {
  subject: string;
  text: string;
  html: string;
};

type Props = {
  to: string;
  messageTemplate: Message;
};

export const sendMail = async ({ to, messageTemplate }: Props) => {
  const user = { email: process.env.NO_REPLY_EMAIL, password: process.env.NO_REPLY_PASSWORD };

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: user.email,
      pass: user.password,
    },
  });

  const message = {
    from: user.email,
    to,
    ...messageTemplate,
  };
  await transporter.sendMail(message);
};

const nodemailer = require('nodemailer');
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(process.env.EMAIL_ADDRESS, process.env.EMAIL_PASSWORD);

  const message = {
    from: req.body.email,
    to: 'filip@wnek.cc',
    subject: `Nowa wiadomość od ${req.body.name} (formularz portfolio)`,
    text: `${req.body.message}`,
    html: `<p> ${req.body.message} <br/> Wysłane przez: ${req.body.email}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  if (req.method === 'POST') {
    if (
      req.body.name === '' ||
      req.body.email === '' ||
      req.body.message === ''
    ) {
      res.status(400).send('Missing fields');
    } else {
      transporter.sendMail(message, (err: any, info: any) => {
        if (err) {
          console.log(err);
          res.status(500).send({ message: 'Something went wrong' });
        } else {
          console.log(info);
          res.status(200).send({ message: 'Success' });
        }
      });
    }
  } else {
    res.status(405).send({ message: 'Method not allowed' });
  }

  res.status(200);
};

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.DATABASE_URL,
  providers: [
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    Providers.Email({
      server: {
        port: 465,
        host: "smtp.gmail.com", // create a gmail address and activate less secure app access on google
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);

// console.dir(Providers);

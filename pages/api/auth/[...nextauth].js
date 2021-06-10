import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.DATABASE_URL,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    Providers.Email({
      server: {
        port: 465,
        host: "smtp.gmail.com", // create a gmail address and activate less secure app access on google
        ssl: true,
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

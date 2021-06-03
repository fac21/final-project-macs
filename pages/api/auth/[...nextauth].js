import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL || "http://localhost:3000",
});

const options = {
  site: process.env.DATABASE_URL,
  providers: [
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
  //   database: {
  //     type: "postgres",
  //     host: process.env.DATABASE_URL,
  //     port: 5432,
  //     ssl: process.env.NODE_ENV === "production",
  //     extra: process.env.NODE_ENV === "production" && {
  //       ssl: {
  //         rejectUnauthorized: false,
  //       },
  //     },
  //   },
};

export default (req, res) => NextAuth(req, res, options);

// console.dir(Providers);

require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MUMBAI_URL: process.env.MUMBAI_URL,
  }
}

module.exports = nextConfig

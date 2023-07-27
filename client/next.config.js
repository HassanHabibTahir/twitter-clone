/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "i.imgur.com", "miro.medium.com", "twitter-space.s3.us-east-1.amazonaws.com"]
    }
}

module.exports = nextConfig

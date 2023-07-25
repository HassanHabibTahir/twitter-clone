/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "i.imgur.com", "miro.medium.com"]
    }
}

module.exports = nextConfig

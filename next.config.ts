module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com", 
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:  "upload.wikimedia.org", 
        port: "",
        pathname: "/**",
      },
    ],
  },
};
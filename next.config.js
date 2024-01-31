/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // ... puedes agregar más configuraciones aquí si necesitas
  }
  
  module.exports = nextConfig
  
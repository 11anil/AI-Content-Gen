/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com'
            }
        ],
        unoptimized:true
    },
    devIndicators: false
};

export default nextConfig;

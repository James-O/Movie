/** @type {import('next').NextConfig} */
const nextConfig = {
    //output:"export",
    images: {
        remotePatterns:[
        {
            protocol:"https",
            hostname:"image.tmdb.org",
            pathname:"**"
        }    
    ]
        //domains:['images.tmdb.org'],
    }
};

export default nextConfig;

"use client";

import Image from 'next/image';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Sample social post data
const socialPosts = [
  {
    id: 1,
    platform: 'instagram',
    icon: <FaInstagram className="text-pink-600" />,
    image: '/social-1.jpg',
    caption: "Behind the scenes of our latest creative project! 🎨 Exploring the intersection of AI and design to build something truly unique. #CreativeProcess #AIDesign #BuildWithBrilliance",
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    platform: 'twitter',
    icon: <FaTwitter className="text-blue-400" />,
    image: '/social-2.jpg',
    caption: "Innovation happens at the edge of possibility. Today we're pushing boundaries with generative design tools that amplify human creativity rather than replace it. What creative challenges are you tackling? #CreativeTech #BuildWithBrilliance",
    likes: 87,
    comments: 15,
  },
  {
    id: 3,
    platform: 'linkedin',
    icon: <FaLinkedin className="text-blue-700" />,
    image: '/social-3.jpg',
    caption: "Excited to share our latest case study on how we helped a creative agency transform their digital presence using AI-powered design tools and automation. The results? 40% faster production and a 25% increase in client engagement. #CreativeInnovation #AITransformation #BuildWithBrilliance",
    likes: 156,
    comments: 32,
  },
];

export default function SocialContent() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {socialPosts.map((post) => (
        <div key={post.id} className="card overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2 text-xl">{post.icon}</span>
              <span className="font-medium capitalize">{post.platform}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">2h ago</span>
          </div>
          
          <div className="relative h-64">
            <Image 
              src={post.image} 
              alt={`Social post for ${post.platform}`} 
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-4">
            <p className="text-gray-800 dark:text-gray-200 mb-4">{post.caption}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-800 dark:text-gray-200 font-medium transition-colors">
              Generate Similar Post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

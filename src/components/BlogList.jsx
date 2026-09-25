'use client';

import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BlogList({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Pronto publicaremos nuevos artículos.</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </motion.div>
  );
}

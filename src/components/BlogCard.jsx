import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogCard({ post }) {
  return (
    <motion.article 
      className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {post.coverImage ? (
        <Link href={`/blog/${post.id}`} className="block h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      ) : (
        <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
          <span className="text-blue-300 font-medium text-lg">Radiología Portátil</span>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {post.author && (
            <span className="flex items-center">
              <span className="w-1 h-1 rounded-full bg-gray-300 mr-2"></span>
              {post.author}
            </span>
          )}
        </div>
        
        <Link href={`/blog/${post.id}`} className="group">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
          {post.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-50">
          <Link 
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Leer artículo completo
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

import { getPostData, getAllPostIds } from '../../../lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: `${postData.title} | Blog Radiografía Portátil`,
    description: postData.description,
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al blog
        </Link>
        
        <article className="prose prose-lg prose-blue max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {postData.title}
            </h1>
            
            <div className="flex items-center text-gray-500 border-b border-gray-100 pb-6">
              <time dateTime={postData.date}>
                {new Date(postData.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {postData.author && (
                <>
                  <span className="mx-3 text-gray-300">|</span>
                  <span>Por {postData.author}</span>
                </>
              )}
            </div>
          </header>

          {postData.coverImage && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={postData.coverImage} 
                alt={postData.title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          )}
          
          <div 
            className="mt-8 text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </article>
      </div>
    </div>
  );
}

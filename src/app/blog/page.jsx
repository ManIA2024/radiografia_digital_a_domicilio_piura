import { getSortedPostsData } from '../../lib/blog';
import BlogList from '../../components/BlogList';
import FadeIn from '../../components/animations/FadeIn';

export const metadata = {
  title: 'Blog | Radiografía Portátil',
  description: 'Artículos, noticias y novedades sobre radiología digital portátil y salud ocupacional.',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre las últimas novedades, consejos y artículos especializados sobre radiología portátil, salud ocupacional y bienestar empresarial.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <BlogList posts={allPostsData} />
        </FadeIn>
      </div>
    </div>
  );
}

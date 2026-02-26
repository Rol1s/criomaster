import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMeta } from '@/lib/seo';
import { articles } from '@/data/articles';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateMeta({
  title: 'Блог о ремонте холодильников — статьи и советы | КриоМастер',
  description: 'Полезные статьи о ремонте и обслуживании холодильников. Практические советы от мастеров с 12-летним опытом.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: 'Блог' }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text mt-6 mb-4">Блог</h1>
      <p className="text-muted max-w-3xl mb-10">
        Полезные статьи и экспертные рекомендации по эксплуатации и ремонту холодильников
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-primary/5 to-primary-light/10 flex items-center justify-center p-6">
              <h2 className="text-lg font-semibold text-text text-center group-hover:text-accent transition-colors line-clamp-3">
                {article.title}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>{new Date(article.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime} мин</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

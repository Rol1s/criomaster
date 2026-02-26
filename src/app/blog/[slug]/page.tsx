import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticleBySlug } from '@/data/articles';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { CallToAction } from '@/components/sections/CallToAction';
import { COMPANY } from '@/lib/constants';
import { Clock, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `https://criomaster.ru/blog/${slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const otherArticles = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        date={article.date}
        url={`${COMPANY.url}/blog/${slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: 'Блог', href: '/blog' }, { label: article.title }]} />

        <div className="grid lg:grid-cols-3 gap-12 mt-8">
          <article className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted mb-8">
              <span>{new Date(article.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime} мин чтения</span>
            </div>

            <div className="prose prose-gray max-w-none">
              {article.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={i} className="text-xl font-semibold text-text mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={i} className="font-semibold text-text mb-3">{paragraph.replace(/\*\*/g, '')}</p>;
                }
                if (paragraph.startsWith('**')) {
                  const parts = paragraph.split('**');
                  return (
                    <p key={i} className="text-muted leading-relaxed mb-4">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? <strong key={j} className="text-text">{part}</strong> : part
                      )}
                    </p>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  const items = paragraph.split('\n');
                  return (
                    <ol key={i} className="list-decimal list-inside space-y-2 mb-4 text-muted">
                      {items.map((item, j) => <li key={j}>{item.replace(/^\d+\.\s*/, '')}</li>)}
                    </ol>
                  );
                }
                return <p key={i} className="text-muted leading-relaxed mb-4">{paragraph}</p>;
              })}
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-bg rounded-2xl p-6">
                <h3 className="font-semibold text-text mb-4">Другие статьи</h3>
                <div className="space-y-3">
                  {otherArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/blog/${a.slug}`}
                      className="group block py-2"
                    >
                      <span className="text-sm font-medium text-text group-hover:text-accent transition-colors line-clamp-2">
                        {a.title}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted mt-1">
                        <Clock className="w-3 h-3" />{a.readTime} мин
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-6 text-center">
                <h3 className="font-semibold text-text mb-2">Нужна помощь?</h3>
                <p className="text-sm text-muted mb-4">Вызовите мастера для диагностики</p>
                <Link
                  href="/kontakty"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  Оставить заявку <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}

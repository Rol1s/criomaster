import type { Metadata } from 'next';
import { generateMeta } from '@/lib/seo';
import { faqItems } from '@/data/faq';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { FaqJsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Accordion';
import { CallToAction } from '@/components/sections/CallToAction';

export const metadata: Metadata = generateMeta({
  title: 'Вопросы и ответы о ремонте холодильников | КриоМастер',
  description: 'Ответы на частые вопросы о ремонте холодильников: стоимость, сроки, гарантия, запчасти. Честные ответы от мастеров.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />

        <h1 className="text-3xl sm:text-4xl font-bold text-text mt-6 mb-4">Вопросы и ответы</h1>
        <p className="text-muted max-w-2xl mb-10">
          Собрали ответы на самые частые вопросы наших клиентов. Если не нашли свой вопрос — позвоните, и мы ответим лично.
        </p>

        <Accordion items={faqItems} />
      </div>

      <CallToAction />
    </>
  );
}

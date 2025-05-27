import { SectionRenderer } from '@/components/utility/SectionRenderer';
import { normalizeSlug, splitSlug } from '@/libs/functions';
import { sanityFetch } from '@/sanity/lib/client';
import { ROUTE_QUERY, ROUTES_QUERY } from '@/sanity/lib/queries';
import type { Route } from '@/sanity/types';
import { notFound, redirect } from 'next/navigation';

export async function generateStaticParams() {
  const routes: Route[] = await sanityFetch({
    query: ROUTES_QUERY,
    tags: ['route'],
  });

  return routes.map((route) => ({
    slug: splitSlug(route.slug.current),
  }));
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;

  const route: Route = await sanityFetch({
    query: ROUTE_QUERY,
    params: { slug: normalizeSlug(slug) },
    tags: ['route'],
  });

  if (!route) {
    return notFound();
  }

  if (route.isRedirect) {
    return redirect(route.redirectRoute.slug.current);
  }

  return (
    <>
      {route.page.sections?.map((section, index) => {
        const sectionType = section._type;

        // Hero section - no container
        if (sectionType === 'homeHeroSection') {
          return <SectionRenderer key={index} section={section} />;
        }

        // All other sections get standard container
        return (
          <div key={index} className='mx-auto px-2.5 md:px-10'>
            <SectionRenderer section={section} />
          </div>
        );
      })}
    </>
  );
}

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

        // Location sections - grouped in grid
        if (sectionType === 'locationSection') {
          const sections = route.page.sections || [];
          const prevSection = sections[index - 1];
          const isFirstLocation = !prevSection || prevSection._type !== 'locationSection';

          if (isFirstLocation) {
            // Collect all consecutive location sections
            const locationSections = [section];
            let nextIndex = index + 1;
            while (nextIndex < sections.length && sections[nextIndex]._type === 'locationSection') {
              locationSections.push(sections[nextIndex]);
              nextIndex++;
            }

            return (
              <div key={index} className='mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24'>
                <div className='grid gap-8 md:grid-cols-3 md:gap-5'>
                  {locationSections.map((locSection, locIndex) => (
                    <SectionRenderer key={`${index}-${locIndex}`} section={locSection} />
                  ))}
                </div>
              </div>
            );
          }

          // Skip if already rendered as part of a group
          return null;
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

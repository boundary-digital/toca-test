'use client';

import ContentCardsSection from '../sections/ContentCardsSection';

// Demo component showing all layout possibilities
export default function ContentCardDemo() {
  // Sample card data
  const sampleCards = {
    tocaTuesday: {
      heading: 'TOCA TUESDAY',
      title: 'Elevate Tuesdays with signature tacos, cocktails, and live entertainment.',
      backgroundImage: {
        _type: 'image',
        asset: {
          _ref: 'image-1',
          _type: 'reference',
        },
      },
      link: {
        _type: 'link',
        title: 'Learn More',
        href: '/toca-tuesday',
      },
      cardStyle: 'standard' as const,
    },
    ourStory: {
      heading: 'OUR STORY',
      title: 'Toca Madera is an experience for all of your senses.',
      backgroundImage: {
        _type: 'image',
        asset: {
          _ref: 'image-2',
          _type: 'reference',
        },
      },
      link: {
        _type: 'link',
        title: 'Learn More',
        href: '/our-story',
      },
      cardStyle: 'standard' as const,
    },
    onTheMenu: {
      heading: 'ON THE MENU',
      title: 'Our diverse menu is designed to offer something for everyone.',
      backgroundImage: {
        _type: 'image',
        asset: {
          _ref: 'image-3',
          _type: 'reference',
        },
      },
      link: {
        _type: 'link',
        title: 'Explore Menu',
        href: '/menu',
      },
      cardStyle: 'standard' as const,
    },
    scottsdale: {
      heading: 'EXPERIENCE',
      title: 'Scottsdale',
      backgroundImage: {
        _type: 'image',
        asset: {
          _ref: 'image-4',
          _type: 'reference',
        },
      },
      link: {
        _type: 'link',
        title: 'Learn More',
        href: '/locations/scottsdale',
      },
      cardStyle: 'location' as const,
    },
    lasVegas: {
      heading: 'EXPERIENCE',
      title: 'Las Vegas',
      backgroundImage: {
        _type: 'image',
        asset: {
          _ref: 'image-5',
          _type: 'reference',
        },
      },
      link: {
        _type: 'link',
        title: 'Learn More',
        href: '/locations/las-vegas',
      },
      cardStyle: 'location' as const,
    },
    houston: {
      heading: 'EXPERIENCE',
      title: 'Houston',
      backgroundImage: {
        _type: 'image',
        asset: {
          _ref: 'image-6',
          _type: 'reference',
        },
      },
      link: {
        _type: 'link',
        title: 'Learn More',
        href: '/locations/houston',
      },
      cardStyle: 'location' as const,
    },
  };

  return (
    <div className='space-y-20 py-12'>
      {/* Demo 1: Single Column Layout */}
      <section>
        <h2 className='mb-8 text-center text-3xl font-bold'>Single Column Layout</h2>
        <ContentCardsSection
          cards={[sampleCards.tocaTuesday]}
          layout='single'
          spacing='normal'
          containerWidth='container'
        />
      </section>

      {/* Demo 2: Two Column Layout */}
      <section>
        <h2 className='mb-8 text-center text-3xl font-bold'>Two Column Layout</h2>
        <ContentCardsSection
          cards={[sampleCards.ourStory, sampleCards.onTheMenu]}
          layout='two-column'
          spacing='normal'
          containerWidth='container'
        />
      </section>

      {/* Demo 3: Three Column Layout (Locations) */}
      <section>
        <h2 className='mb-8 text-center text-3xl font-bold'>Three Column Layout (Locations)</h2>
        <ContentCardsSection
          cards={[sampleCards.scottsdale, sampleCards.lasVegas, sampleCards.houston]}
          layout='three-column'
          spacing='normal'
          containerWidth='container'
        />
      </section>

      {/* Demo 4: Mixed Layout (1 + 2) */}
      <section>
        <h2 className='mb-8 text-center text-3xl font-bold'>Mixed Layout (1 + 2)</h2>
        <ContentCardsSection
          cards={[sampleCards.tocaTuesday, sampleCards.ourStory, sampleCards.onTheMenu]}
          layout='mixed-1-2'
          spacing='normal'
          containerWidth='container'
        />
      </section>

      {/* Demo 5: Four Column Layout with Compact Cards */}
      <section>
        <h2 className='mb-8 text-center text-3xl font-bold'>Four Column Layout (Compact)</h2>
        <ContentCardsSection
          cards={[
            { ...sampleCards.tocaTuesday, cardStyle: 'compact' as const },
            { ...sampleCards.ourStory, cardStyle: 'compact' as const },
            { ...sampleCards.onTheMenu, cardStyle: 'compact' as const },
            { ...sampleCards.scottsdale, cardStyle: 'compact' as const },
          ]}
          layout='four-column'
          spacing='tight'
          containerWidth='container'
        />
      </section>

      {/* Demo 6: With Section Title */}
      <section>
        <h2 className='mb-8 text-center text-3xl font-bold'>With Section Title</h2>
        <ContentCardsSection
          sectionTitle='Discover Our Experiences'
          cards={[sampleCards.tocaTuesday, sampleCards.ourStory, sampleCards.onTheMenu]}
          layout='three-column'
          spacing='normal'
          containerWidth='container'
        />
      </section>

      {/* Demo 7: Different Spacing Options */}
      <section>
        <h2 className='mb-8 text-center text-3xl font-bold'>Spacing Variations</h2>

        <div className='mb-12'>
          <h3 className='mb-4 text-center text-xl'>Tight Spacing</h3>
          <ContentCardsSection
            cards={[sampleCards.scottsdale, sampleCards.lasVegas, sampleCards.houston]}
            layout='three-column'
            spacing='tight'
            containerWidth='container'
          />
        </div>

        <div className='mb-12'>
          <h3 className='mb-4 text-center text-xl'>Relaxed Spacing</h3>
          <ContentCardsSection
            cards={[sampleCards.scottsdale, sampleCards.lasVegas, sampleCards.houston]}
            layout='three-column'
            spacing='relaxed'
            containerWidth='container'
          />
        </div>
      </section>

      {/* Demo 8: Container Width Variations */}
      <section>
        <h2 className='mb-8 text-center text-3xl font-bold'>Container Width Variations</h2>

        <div className='mb-12'>
          <h3 className='mb-4 text-center text-xl'>Full Width</h3>
          <ContentCardsSection
            cards={[sampleCards.ourStory, sampleCards.onTheMenu]}
            layout='two-column'
            spacing='normal'
            containerWidth='full'
          />
        </div>

        <div className='mb-12'>
          <h3 className='mb-4 text-center text-xl'>Narrow Container</h3>
          <ContentCardsSection
            cards={[sampleCards.tocaTuesday]}
            layout='single'
            spacing='normal'
            containerWidth='narrow'
          />
        </div>
      </section>
    </div>
  );
}

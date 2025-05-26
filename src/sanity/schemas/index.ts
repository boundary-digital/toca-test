import footer from './documents/footer';
import headerNav from './documents/headerNav';
import page from './documents/page';
import route from './documents/route';
import contentCard from './objects/contentCard';
import sanityLink from './objects/sanityLink';
import { sections } from './sections';

const objects = [...sections, sanityLink, contentCard];
const documents = [page, route, headerNav, footer];
export const schemaTypes = [...objects, ...documents];

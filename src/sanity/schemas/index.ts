import headerNav from './documents/headerNav';
import page from './documents/page';
import route from './documents/route';
import { objects } from './objects'
import { sections } from './sections';

const allObjects = [...sections, ...objects]
const documents = [page, route, headerNav];
export const schemaTypes = [...allObjects, ...documents]

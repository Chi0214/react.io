import rootReduers from './reduers';

import {createStore} from 'redux';

export const store = createStore(rootReduers);

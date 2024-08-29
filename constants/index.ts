import { Dimensions } from 'react-native';

export const EMPTY_STRING = '' as const;
export const EMPTY_ARRAY = [];
export const EMPTY_OBJECT = {} as const;
export const ZERO = 0 as const;
export const ONE_HALF = 1.5 as const;
export const TW0 = 2 as const;

/** Dimensions */
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

/** Navigation */
export const APP_TITLE = 'Movieland' as const;
export const FAVORITES_TITLE = 'Favorites' as const;
export const NAV_BACK = 'Back' as const;

/** Movie Card */
export const CARD_GAP = 20 as const;

/** Async Storage */
export const FAVORITES_KEY = 'favorites' as const;

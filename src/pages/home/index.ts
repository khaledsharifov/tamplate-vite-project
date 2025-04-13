import { lazy } from 'react';
import { Lazy } from '@shared/utils';

export const LazyHomePage = Lazy(
  lazy(() =>
    import('./page').then(({ HomePage }) => ({
      default: HomePage,
    }))
  )
);

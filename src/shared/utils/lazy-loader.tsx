import { ComponentType, ReactElement, ReactNode, Suspense } from 'react';

type TLazy = (
  Component: ComponentType<ReactElement | Element>,
  Loader?: () => ReactNode
) => (props: any) => ReactElement;

export const Lazy: TLazy =
  (
    Component,
    LoaderComponent = () => (
      <div className="flex h-screen w-full items-center justify-center">
        <span>Loading...</span>
      </div>
    )
  ) =>
  (props) => (
    <Suspense fallback={<LoaderComponent />}>
      <Component {...props} />
    </Suspense>
  );

export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/404' as const,
      hash: url?.hash,
    }),
  },
  $500: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/500' as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;

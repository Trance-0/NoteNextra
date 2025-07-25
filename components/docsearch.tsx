'use client'
// sample code from https://docsearch.algolia.com/docs/docsearch

import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

function AlgoliaSearch() {
  return (
    <DocSearch
      appId={process.env.NEXT_SEARCH_ALGOLIA_APP_ID || 'NKGLZZZUBC'}
      indexName={process.env.NEXT_SEARCH_ALGOLIA_INDEX_NAME || 'notenextra_trance_0'}
      apiKey={process.env.NEXT_SEARCH_ALGOLIA_API_KEY || '727b389a61e862e590dfab9ce9df31a2'}
    />
  );
}

export default AlgoliaSearch;
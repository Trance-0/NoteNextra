'use client'
// sample code from https://docsearch.algolia.com/docs/docsearch

import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

function AlgoliaSearch() {
  return (
    <DocSearch
      appId={process.env.NEXT_SEARCH_ALGOLIA_APP_ID || ''}
      indexName={process.env.NEXT_SEARCH_ALGOLIA_INDEX_NAME || ''}
      apiKey={process.env.NEXT_SEARCH_ALGOLIA_API_KEY || ''}
    />
  );
}

export default AlgoliaSearch;
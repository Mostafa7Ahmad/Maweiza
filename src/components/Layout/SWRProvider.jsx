'use client';

import { SWRConfig } from 'swr'

export const SWRProvider = ({ children }) => {
  return <SWRConfig
    value={{
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>{children}</SWRConfig>
};
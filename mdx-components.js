import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

const docsComponents = getDocsMDXComponents()
 
// Merge components
export const useMDXComponents = (components) => {
  return {
    ...docsComponents,
    ...components
  }
}
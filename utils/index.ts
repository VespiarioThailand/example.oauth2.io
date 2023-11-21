import getConfig from 'next/config'

export const getLocalStorage = (key: string, envName: string): string => {
  const env = localStorage?.getItem('app_en_2') ?? getConfig().publicRuntimeConfig['ENV']
  return localStorage?.getItem(key) ?? getConfig().publicRuntimeConfig[`${envName}_${env}`] ?? ''
}

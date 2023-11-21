import { getLocalStorage } from '@/utils'
import getConfig from 'next/config'
import { useEffect, useState } from 'react'

export default function Page() {
  const signInWithVespisti = async () => {
    const clientID = formData.client_id
    const clientSecret = formData.client_secret
    const redirectURI = formData.redirect_uri

    // redirect to vespisti login page
    window.location.href = `${
      formData.oauth2_signin
    }?client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(redirectURI ?? '')}`
  }
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    client_id: '',
    client_secret: '',
    redirect_uri: '',
    oauth2_signin: '',
    oauth2_api: '',
    app_env: '',
  })

  useEffect(() => {
    if (!window) return
    setFormData({
      client_id: getLocalStorage('client_id_2', 'OAUTH_CLIENT_ID'),
      client_secret: getLocalStorage('client_secret_2', 'OAUTH_CLIENT_SECRET'),
      redirect_uri: getLocalStorage('redirect_uri_2', 'OAUTH_REDIRECT_URI'),
      oauth2_signin: getLocalStorage('oauth2_signin_2', 'OAUTH_URL'),
      oauth2_api: getLocalStorage('oauth2_api_2', 'API_URL'),
      app_env: localStorage?.getItem('app_en_2') ?? getConfig().publicRuntimeConfig.ENV,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFormData])

  const handleSave = () => {
    localStorage.setItem('client_id_2', formData.client_id)
    localStorage.setItem('client_secret_2', formData.client_secret)
    localStorage.setItem('redirect_uri_2', formData.redirect_uri)
    localStorage.setItem('oauth2_signin_2', formData.oauth2_signin)
    localStorage.setItem('oauth2_api_2', formData.oauth2_api)
    localStorage.setItem('app_en_2', formData.app_env)
    setIsEdit(false)
  }

  const handleResetDEV = () => {
    setFormData({
      client_id: getConfig().publicRuntimeConfig.OAUTH_CLIENT_ID_DEV ?? '',
      client_secret: getConfig().publicRuntimeConfig.OAUTH_CLIENT_SECRET_DEV ?? '',
      redirect_uri: getConfig().publicRuntimeConfig.OAUTH_REDIRECT_URI_DEV ?? '',
      oauth2_signin: getConfig().publicRuntimeConfig.OAUTH_URL_DEV ?? '',
      oauth2_api: getConfig().publicRuntimeConfig.API_URL_DEV ?? '',
      app_env: 'DEV',
    })
  }
  const handleResetUAT = () => {
    setFormData({
      client_id: getConfig().publicRuntimeConfig.OAUTH_CLIENT_ID_UAT ?? '',
      client_secret: getConfig().publicRuntimeConfig.OAUTH_CLIENT_SECRET_UAT ?? '',
      redirect_uri: getConfig().publicRuntimeConfig.OAUTH_REDIRECT_URI_UAT ?? '',
      oauth2_signin: getConfig().publicRuntimeConfig.OAUTH_URL_UAT ?? '',
      oauth2_api: getConfig().publicRuntimeConfig.API_URL_UAT ?? '',
      app_env: 'UAT',
    })
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex h-screen ">
        <div className="flex-1 flex justify-center items-center ">
          <form className="bg-slate-100 mt-8 p-8 dark:bg-slate-800">
            <div className="grid gap-6 mb-6 grid-cols-2">
              <p>APP: {formData.app_env}</p>
            </div>

            <div className="grid gap-6 mb-6 grid-cols-2">
              <div className="">
                <label htmlFor="client_id">client_id</label>
                <input
                  onChange={(e) => setFormData({ ...formData, client_id: e.target.value })}
                  value={formData.client_id}
                  disabled={!isEdit}
                  type="text"
                  id="client_id"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="client_id"
                  required
                />
              </div>
              <div>
                <label htmlFor="client_secret">client_secret</label>
                <input
                  onChange={(e) => setFormData({ ...formData, client_secret: e.target.value })}
                  value={formData.client_secret}
                  disabled={!isEdit}
                  type="text"
                  id="client_secret"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 ">
              <div>
                <label htmlFor="redirect_uri">redirect_uri</label>

                <input
                  onChange={(e) => setFormData({ ...formData, redirect_uri: e.target.value })}
                  value={formData.redirect_uri}
                  disabled={!isEdit}
                  type="text"
                  id="redirect_uri"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="redirect_uri"
                  required
                />
              </div>
              <div>
                <label htmlFor="redirect_uri">oauth2_signin</label>
                <input
                  onChange={(e) => setFormData({ ...formData, oauth2_signin: e.target.value })}
                  value={formData.oauth2_signin}
                  disabled={!isEdit}
                  type="text"
                  id="oauth2_signin"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="oauth2_signin"
                  required
                />
              </div>
              <div>
                <label htmlFor="redirect_uri">oauth2_api</label>
                <input
                  onChange={(e) => setFormData({ ...formData, oauth2_api: e.target.value })}
                  value={formData.oauth2_api}
                  disabled={!isEdit}
                  type="text"
                  id="oauth2_api"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="oauth2_api"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => (isEdit ? handleSave() : setIsEdit(true))}
            >
              {isEdit ? 'save' : 'edit'}
            </button>
            {isEdit && (
              <button
                type="button"
                onClick={handleResetDEV}
                className="ml-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                reset to DEV
              </button>
            )}
            {isEdit && (
              <button
                type="button"
                onClick={handleResetUAT}
                className="ml-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                reset to UAT
              </button>
            )}
          </form>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <div>
            <button
              type="button"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
              onClick={signInWithVespisti}
            >
              Sign in with Vespisti
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

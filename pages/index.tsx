import { useEffect, useState } from 'react'

export default function Page() {
  const signInWithVespisti = async () => {
    const clientID = formData.client_id
    const clientSecret = formData.client_secret
    const redirectURI = formData.redirect_uri

    // redirect to vespisti login page
    window.location.href = `${
      formData.oauth2_signin
    }/sign-in?client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(redirectURI ?? '')}`
  }
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    client_id: '',
    client_secret: '',
    redirect_uri: '',
    oauth2_signin: '',
    oauth2_api: '',
  })

  useEffect(() => {
    if (!window) return
    setFormData({
      client_id: localStorage.getItem('client_id') ?? process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID ?? '',
      client_secret: localStorage.getItem('client_secret') ?? process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET ?? '',
      redirect_uri: localStorage.getItem('redirect_uri') ?? process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI ?? '',
      oauth2_signin: localStorage.getItem('oauth2_signin') ?? process.env.NEXT_PUBLIC_OAUTH_URL ?? '',
      oauth2_api: localStorage.getItem('oauth2_api') ?? process.env.NEXT_PUBLIC_API_URL ?? '',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFormData])

  const handleSave = () => {
    localStorage.setItem('client_id', formData.client_id)
    localStorage.setItem('client_secret', formData.client_secret)
    localStorage.setItem('redirect_uri', formData.redirect_uri)
    localStorage.setItem('oauth2_signin', formData.oauth2_signin)
    localStorage.setItem('oauth2_api', formData.oauth2_api)
    setIsEdit(false)
  }

  const handleReset = () => {
    setFormData({
      client_id: process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID ?? '',
      client_secret: process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET ?? '',
      redirect_uri: process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI ?? '',
      oauth2_signin: process.env.NEXT_PUBLIC_OAUTH_URL ?? '',
      oauth2_api: process.env.NEXT_PUBLIC_API_URL ?? '',
    })
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex h-screen">
        <div className="flex-1 flex justify-center items-center">
          <form>
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
                <label htmlFor="client_secret">client_id</label>
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
                onClick={handleReset}
                className="ml-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                reset default
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

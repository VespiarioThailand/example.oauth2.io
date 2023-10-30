export default function Page() {
  const signInWithVespisti = async () => {
    const clientID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID
    const clientSecret = process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET
    const redirectURI = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI

    // redirect to vespisti login page
    window.location.href = `${
      process.env.NEXT_PUBLIC_OAUTH_URL
    }/sign-in?client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(redirectURI ?? '')}`
  }

  return (
    <>
      <div className="grid h-screen place-items-center">
        <button
          type="button"
          className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          onClick={signInWithVespisti}
        >
          Sign in with Vespisti
        </button>
      </div>
    </>
  )
}

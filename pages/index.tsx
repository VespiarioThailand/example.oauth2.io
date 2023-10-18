 export default function Page() {
  
  const signInWithVespisti = async () => {
    const clientID = "123123123"
    const clientSecret = "xxxxx"
    const redirectURI = "https://vespiariothailand.github.io/example.vespistiid/profile"

    // redirect to vespisti login page
    window.location.href = `https://xxxxxxx?client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(redirectURI)}`
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
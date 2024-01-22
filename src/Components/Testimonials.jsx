
const Testimonials = () => {
  return (
    <div>
<div className="py-16 white">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl"> What our customers say</h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
              <p className="text-gray-600 md:text-xl"> <span className="font-serif"></span> 
              Yoop-IQ is a game-changer for our business analytics! Unlike traditional tools, Yoop-IQ AI-powered business analysis is incredibly intuitive. It not only provides insights but also understands our queries contextually, delivering actionable recommendations. The difference from ChatGPT lies in its specialized focus on business analytics, offering a tailored and efficient solution for our industry needs.
               <span className="font-serif"></span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600"> <span className="font-serif"></span> 
              Impressed with Yoop-IQ capabilities! As an AI startup enthusiast, I have tried various tools, and Yoop-IQ stands out. Its business analysis features are robust, offering deep insights into complex data. What sets it apart from ChatGPT is its laser-focused approach on empowering businesses with data-driven decisions. It is like having a dedicated analytics expert at your fingertips.
               <span className="font-serif"></span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Caleb Turner</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600"> <span className="font-serif"></span>
              Yoop-IQ brings a fresh perspective to AI-powered business analysis. Its user-friendly interface and smart recommendations make data analysis less daunting. While ChatGPT is fantastic for general conversations, Yoop-IQ dives deep into our business metrics, offering insights that directly impact our strategies. The specialization in business analytics distinguishes Yoop-IQ in a crowded AI landscape.
               <span className="font-serif"></span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Ethan Mitchell</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Testimonials
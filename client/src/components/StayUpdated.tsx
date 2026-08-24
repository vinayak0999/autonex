import { motion } from "framer-motion";

export default function StayUpdated() {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden py-24 bg-white">
      <div className="absolute inset-0"
        style={{
          background: "transparent"
        }}
      />
      
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center text-[#1a2236]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative mx-auto w-full px-4 sm:px-8 md:px-14 py-10 md:py-14">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-[#1a2236]">
            Stay <span className="text-[#163791]">Updated</span>
          </h2>
          <p className="text-lg md:text-xl text-[rgba(30,40,80,0.65)] mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest updates, insights,
            and news about our services and technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-[rgba(30,40,80,0.7)]">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>No spam</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Max twice a month</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto items-stretch gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white backdrop-blur-sm border border-[rgba(22,55,145,0.2)] rounded-lg px-4 py-3 text-[#1a2236] placeholder-[rgba(30,40,80,0.4)] focus:outline-none focus:ring-2 focus:ring-[#62AADE] focus:border-[#62AADE] shadow-sm focus:shadow-md transition-all duration-300"
            />
            <button className="bg-[#163791] hover:bg-[#1a4fa8] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] whitespace-nowrap">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-[rgba(30,40,80,0.5)] mt-4 max-w-md mx-auto text-left sm:text-center">
            By subscribing, you agree to our <a href="#" className="text-[#62AADE] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

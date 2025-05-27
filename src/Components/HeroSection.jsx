import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import '../index.css'

function HeroSection(){
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background blobs - animated with Framer Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2
          }}
          className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop",
            delay: 4
          }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Build Interactive Product Tours <span className="text-indigo-600">Effortlessly</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Create stunning, step-by-step guides for your product with our intuitive builder.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}         
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium  rounded-lg  transition-all duration-300 shadow-lg"
          >
            <motion.a href="#home" className=" inline-flex items-center py-3 px-8 scroll-smooth"> 
              Start Demo
            <ArrowRightIcon className="ml-2 h-5 w-5" />
            </motion.a>
            
          </motion.button>
        </motion.div>

        {/* Image mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-white bg-white">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Product screenshot" 
              className="w-full h-auto object-cover"
            />
            <motion.div
              animate={{
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg"
            >
              <motion.div
                className="bg-indigo-600 rounded-full p-2"
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  
   
  );
};

export default HeroSection;
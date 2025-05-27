import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";



const ProductTour = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const tourSteps = [
    {
      title: "Step 1: Create Your Tour",
      description: "Drag and drop elements to build interactive guides in minutes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      title: "Step 2: Customize Content",
      description: "Add tooltips, hotspots, and multimedia to engage users.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    },
    {
      title: "Step 3: Publish & Share",
      description: "Embed anywhere or share via link with analytics tracking.",
      image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800",
    },
  ];

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % tourSteps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + tourSteps.length) % tourSteps.length);

  return (
    <div className="max-w-4xl mx-auto p-6" id="home">
      {/* Carousel Navigation */}
      {/* <div className="flex justify-between items-center mb-8">
        <button
          onClick={prevStep}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        {/* Step Indicators */}
        {/* <div className="flex gap-2">
          {tourSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full ${currentStep === index ? "bg-indigo-600" : "bg-gray-300"}`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextStep}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div> */}

      {/* Animated Tour Content */}
      {/* <div className="relative h-96 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="md:w-1/2">
              <motion.img
                src={tourSteps[currentStep].image}
                alt={tourSteps[currentStep].title}
                className="rounded-xl shadow-lg w-full h-64 object-cover"
                whileHover={{ scale: 1.02 }}
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {tourSteps[currentStep].title}
              </h3>
              <p className="text-gray-600">
                {tourSteps[currentStep].description}
              </p>
              <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                {currentStep === tourSteps.length - 1 ? "Get Started" : "Next Step"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div> */}

      {/* Vertical Timeline Alternative (Comment out carousel to use) */}
  

<div className="space-y-12 mt-12">
  {tourSteps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale:0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 , delay:0.1}}
      className="flex flex-col md:flex-row gap-8 items-center"
    >
      <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <img
                src={step.image}
                alt={step.title}
                className="rounded-xl shadow-lg w-full cursor-pointer"
              />
            </Tooltip.Trigger>

            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                align="center"
                asChild
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7 }}
                  className="bg-black text-white px-3 py-1 rounded text-sm shadow-md mb-4"
                >
                  {step.title}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-2xl font-bold">{step.title}</h3>
        <p className={`mt-2 text-gray-500`}>{step.description}</p>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default ProductTour;
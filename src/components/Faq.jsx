import Pretitle from "./Pretitle"
import { delay, motion } from "framer-motion"
import { fadeIn } from "../../variants"
import FaqItem from "./FaqItem"

const faqItemsData = [
  {
    title: "How long does a construction projet usuality take?",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "Di I need permits for my project?",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "What materials do you use",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "Can I make changes after construction starts",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "How much will wy construction project cost",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description: "Timelines vary based on project size and complexity",
  },

]

// animation varians for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }

  }),
}


const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center max-w-[540px] mx-auto xl:mb-20 ">
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3"> Got questions? We've Got You Covered </h2>
          <p className="mb-11 max-w-[480px] mx-auto ">
            From project planning to final touches, we've answered the most common questions to help you make informed decisions.
          </p>
        </div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <li key={index}>
                <FaqItem title={item.title} description={item.description} />
              </li>
            )
          })}

        </ul>

      </div>

    </section>

  )
}

export default Faq

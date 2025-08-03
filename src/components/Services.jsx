import { useState } from "react"
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import Button from "./Button"

import { PiWallFill, PiPaintRollerFill, PiWrenchFill, PiUserGearFill } from 'react-icons/pi'
import Pretitle from "./Pretitle"

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description: "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ]
  },

  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description: "Revitalizing spaces with modern designs and high-quality craftsmanship. Whether upgrading a home or remodeling an office, we bring fresh life to every project",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ]
  },

  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description: "Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Painting"
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ]
  },

  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      "Providing expert guidance for construction and renovation projects. From planning and budgeting to compliance and sustainability, our consulting service ensure project success.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  }
]

const Services = () => {

  const [activeTab, setActiveTab] = useState("construction")

  return (
    <div id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">

        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Soluctions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">Offering tailored construction solutions, from planning to completion, with a focus on quality and innovation.</p>
        </div>

        {/* tabs */}

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col xl:flex-row w-full gap-[30px] "
        >
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px] "
          >
            {serviceData.map((item) => {
              return (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none cursor-pointer"
                  onMouseEnter={() => setActiveTab(item.name)}
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${activeTab === item.name
                      ? "bg-primary text-white"
                      : "bg-accent text-primary"
                      } 
                      hover:bg-primary hover:text-white transition-colors duration-200
                      `}
                  >
                    <div className="text-5xl">{item.icon}</div>
                  </div>

                  <div className="uppercase font-primary font-semibold tracking-[.6px] w-[100px] ml-16 ">{item.name} </div>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {/* tabs content */}
          <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px] ">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <div className="flex flex-col md:flex-row gap-[30px]">
                  {/* imagenes */}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index) => (
                      <div
                        key={index}
                        className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px] ">
                        <img src={thumb.url} alt="" />
                      </div>
                    ))}
                  </div>

                  {/* text & Button */}
                  <div>
                    <div>
                      <h3 className="h3 mb-6">{item.title} </h3>
                      <p className="mb-10">{item.description} </p>
                      {/* service list */}
                      <ul className="grid grid-cols-2 gap-4 mb-12">
                        {item.serviceList.map((service, index) => {
                          return (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-accent"></div>
                              <div className="capitalize font-medium text-primary">
                                {service}
                              </div>


                            </li>
                          )
                        })}
                      </ul>

                      {/* btn */}
                      <Button text="Read more" />

                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>


        </Tabs>



      </div>



    </div>
  )
}

export default Services

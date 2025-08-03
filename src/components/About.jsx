import Pretitle from "./Pretitle"
import Button from "./Button"


const About = () => {
  return (
    <section id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center ">

          {/* text */}
          <div className="flex-1">
            <div className="max-w-[540px] ">
              {/* pretitle */}
              <Pretitle text="About US" />
              <h2 className="h2 mb-6">Focused On Excellence In Every Project </h2>
              <p className="mb-11">Our unweavering commitment to excellence drives every project we undertake. From concept to completion, we meticulously craft solutions that embody quality, presision and innovation. </p>
            </div>
            <div className="w-max flex flex-col text-right mb-10">
              <img src="/assets/img/about/signature.svg" width={154} height={38} alt="" />
              <p>Company CEO</p>
            </div>

            <Button text="contact us" />
          </div>
          {/* img */}
          <div className="flex-1 xl:flex xl:justify-center ">
            <div className="xl:w-[444px] xl:h-[493px] relative ">
              {/* bg */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              <img
                src={"/assets/img/about/img.jpg"}
                alt=""
                width={444}
                height={493}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

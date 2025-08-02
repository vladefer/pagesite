const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10 "></div>
      <div className="container mx-auto h-full flex items-center">
        <div className="z-20">
        <h1 className="h1">
          <span className="text-accent">Building</span> 
          robust lasting solutions
          </h1>
      </div>
      </div>
    </section>
  )
}

export default Hero

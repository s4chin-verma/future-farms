import Image from 'next/image'
import { Members, TimeLine } from '@/components'

export default function Page() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto">
        {/*  */}
        <h1 className="text-3xl font-bold my-10 text-center">Our Story</h1>
        <p className="text-justify text-xl">
          At the heart of our journey lies a deep-rooted passion for sustainable
          agriculture and a fervent belief in the power of hydroponics to
          revolutionize how we grow food. It all began with a vision to address
          the pressing challenges of traditional farming methods, such as land
          scarcity, water scarcity, and environmental degradation. Inspired by
          the potential of hydroponics to overcome these hurdles, we embarked on
          a mission to promote its adoption and unlock its full potential.
        </p>
        <h1 className="text-3xl font-bold my-10 text-center">Our Mission</h1>
        <p className="text-justify text-xl">
          Our mission is to empower communities to cultivate fresh, nutritious
          produce in a sustainable and environmentally friendly manner through
          hydroponic agriculture. We strive to educate, innovate, and inspire
          individuals and organizations to embrace hydroponics as a viable
          solution to global food security challenges.
        </p>
        <h1 className="text-3xl font-bold my-10 text-center">
          Our Passion for Hydroponics
        </h1>
        <p className="text-justify text-xl">
          Hydroponics represents a paradigm shift in agriculture, offering
          unparalleled efficiency, resource conservation, and scalability. We
          are deeply passionate about harnessing this technology to create a
          more resilient and equitable food system. Our dedication to
          hydroponics stems from its ability to minimize water usage, maximize
          yield, and eliminate the need for arable land, making it a
          game-changer for both rural and urban settings.
        </p>

        {/* timeline */}

        <TimeLine />

        {/* team members */}

        <Members />
      </main>
    </>
  )
}

import Image from 'next/image'
import HeroDefault from './components/HeroDefault'
import FeatureSection from './components/FeatureSection'
import HowItWorksSection from './components/HowItWorksSection'
import FooterCard from './components/Footer'

export default function Home() {

  const handleFetch = async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // const res = await fetch('https://api.replicate.com/v1/predictions', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Token `,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     // Pinned to a specific version of Stable Diffusion
    //     // See https://replicate.com/stability-ai/sdxl
    //     version:
    //       '2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2',
    //     input: { prompt: 'A red mongoose' },
    //   }),
    // });
    // const data = await res.json()

    // console.log(data)



  }

  return (
    <main>
      <HeroDefault />
      <FeatureSection />
      <HowItWorksSection />
      <FooterCard />
    </main>
  )
}

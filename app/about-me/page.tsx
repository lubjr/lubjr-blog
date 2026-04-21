import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function AboutMePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <div className="flex flex-col items-center mb-8">
          <div className="w-52 h-52 rounded-full overflow-hidden border border-border">
            <Image
              src="/avatar.jpeg"
              alt="Luiz Eduardo"
              width={208}
              height={208}
              className="w-full h-full object-cover scale-110 -translate-y-1"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6">About me</h1>

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            Hi, I&apos;m Luiz Eduardo, a dev living in the interior of São Paulo. I work with web and cloud stuff,
            and I&apos;ve been building things with code for a while now. Before that, I spent years dealing with
            industrial electronics and IoT, which gave me a different way of looking at systems.
          </p>

          <p>
            This blog is where I document what I&apos;m learning, building, and thinking about. No algorithm, no schedule,
            just things I find worth writing down.
          </p>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">What I&apos;m into (tech)</h2>
            <p className="text-muted-foreground">
              Full stack development, cloud architecture on AWS, serverless systems and the occasional rabbit hole
              into performance and developer tooling. Always studying something new, currently focused on AWS courses.
              Always have some side project running, one of them is{" "}
              <a href="https://saedra-web.vercel.app" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Saedra</a>.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">Outside the keyboard</h2>
            <p className="text-muted-foreground">
              I follow F1 and football, big Internacional de Porto Alegre fan. I train karate (brown belt) and
              muay thai (yellow belt), and I watch boxing too. When I&apos;m not doing any of that, I&apos;m probably
              reading. Dune and Mickey17 are recent favorites, currently going through The King in Yellow.
              Also into anime, games, series and movies.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <div className="flex gap-6 text-muted-foreground">
              <a href="mailto:luizeduardobjr@outlook.com" aria-label="Email" className="hover:text-foreground transition-colors">
                <FaEnvelope size={22} />
              </a>
              <a href="https://github.com/lubjr" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/lubjr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          <p className="text-muted-foreground text-sm pt-8 border-t border-border">
            This blog was built with Next.js 16, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  )
}

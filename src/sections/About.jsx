import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

function About() {

    const [copied, setCopied] = useState(false)

    function handleCopy() {
        navigator.clipboard.writeText('rahul.kaushik0798@gmail.com')
        setCopied(true)
        const timer = setTimeout(() => {
            setCopied(false)
        }, 2000);

        return () => {
            clearTimeout(timer)
        }
    }

    return (
        <section id='about' className='c-space my-20'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Rahul Kaushik</p>
                            <p className='grid-subtext'>With 2 years of hands-on experience as a full stack developer, I specialize in designing and implementing robust, scalable, and efficient web solutions. My expertise lies in both frontend technologies like React and Next JS, and backend frameworks such as Node.js or Spring Boot</p>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>Full-stack development with proficiency in HTML, CSS and JS along with ReactJS and NextJS. Experienced in MERN Stack and familiar with project deployment. Good understanding of performance optimization and accessibility, along with cloud services like AWS.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    { lat: 27, lng: 74, text: 'Rajasthan, India', color: 'white', size: 25 }
                                ]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with locations</p>
                            <p className="grid-subtext">I&apos;m based in Rajasthan, India and open to remote work worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My Passion for Coding</p>
                            <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't just me profession, it is my passion. When I’m not coding, you’ll find me exploring open-source projects and learning new technologies.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={copied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="" />
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient'>rahul.kaushik0798@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { workExperiences } from '../utils'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import Developer from '../components/Developer'

function Experience() {

    const [animationName, setAnimationName] = useState('idle')

    return (
        <section id='experience' className='c-space my-20'>
            <div className="w-full text-white-600">
                <h2 className="head-text">My Work Experience</h2>

                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-2.25} scale={2.75} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {
                                workExperiences.map(({ id, name, pos, icon, duration, title, workdone }) => (
                                    <div key={id}>
                                        <div className="work-content_container group">
                                            <div className="flex flex-col h-full justify-start items-center py-2">
                                                <div className="work-content_logo">
                                                    <img src={icon} alt="logo" className='w-full h-full bg-white rounded-full' />
                                                </div>
                                                <div className="work-content_bar" />
                                            </div>
                                            <div className="sm:p-5 px-2.5 py-5">
                                                <div onClick={() => setAnimationName('victory')}>
                                                    <p className="font-bold text-white-800 pb-1">{name}</p>
                                                    <p className="text-sm pb-1">{pos} -- {duration}</p>
                                                    <p className="group-hover:text-white transition ease-in-out duration-300">{title}</p>
                                                </div>
                                                <div className='mt-4' onClick={() => setAnimationName('clapping')}>
                                                    <p className="font-semibold text-white-800">Features for hiring website</p>
                                                    {
                                                        workdone?.hiring?.map(i => (
                                                            <p key={i.id} className="group-hover:text-white transition ease-in-out duration-300 py-1.5">➢ {i.point}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className='mt-4' onClick={() => setAnimationName('salute')}>
                                                    <p className="font-semibold text-white-800">Features for insurance website</p>
                                                    {
                                                        workdone?.ins?.map(i => (
                                                            <p key={i.id} className="group-hover:text-white transition ease-in-out duration-300 py-1.5">➢ {i.point}</p>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

    const formRef = useRef()
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)

    function handleChange({ target: { name, value } }) {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.send('service_7fq236v', 'template_v807wcd', {
                from_name: formData.name,
                to_name: 'Rahul Kaushik',
                from_email: formData.email,
                to_email: 'rahul.kaushik0798@gmail.com',
                message: formData.message
            }, 'yryjXH2W6iGJZNTtv')

            setLoading(false)
            alert(' Message sent successfully')
            setFormData({ name: '', email: '', message: '' })
        }
        catch (error) {
            setLoading(false)
            alert('Some error ocurred.')
        }
    }

    return (
        <section className='c-space my-20' id='contact'>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* <img src="/assets/terminal.png" alt="terminal-bg" className='absolute inset-0 min-h-screen' /> */}
                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600">Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type="text" name='name' value={formData.name} onChange={handleChange} required className='field-input' placeholder='John Doe' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type="email" name='email' value={formData.email} onChange={handleChange} required className='field-input' placeholder='johndoe@gmail.com' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <input type="text" name='message' value={formData.message} onChange={handleChange} required className='field-input' placeholder='A sample message' />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {
                                loading ? 'Sending' : 'Send Message'
                            }
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
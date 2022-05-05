import Image from 'next/image';

import ContactImg from '../../../assets/images/contact/1.png';

function ContactForm({theme, backgroundColor}) {
    return (
        <section className={`${theme === 'dark' ? 'bg-gray-900 text-white' : null } ${backgroundColor} py-10`}>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='description'>
                        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-4xl font-bold my-4`}>Talk to Our Sales & Marketing Department Team</h2>
                        <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-700'} my-4`}>
                            Collaboratively promote client-focused convergence vis-a-vis
                            customer directed alignments via standardized infrastructures.
                        </p>
                        <form autoComplete='off'>
                            <div className="flex">
                                <div className='mb-4 mr-4'>
                                    <input className='border border-slate-200 py-1 px-2 outline-none' type="text" placeholder='First Name' />
                                </div>
                                <div className='mb-4 mr-4'>
                                    <input className='border border-slate-200 py-1 px-2 outline-none' type="text" placeholder='Last Name' />
                                </div>
                            </div>
                            <div className="flex">
                                <div className='mb-4 mr-4'>
                                    <input className='border border-slate-200 py-1 px-2 outline-none' type="text" placeholder='Your phone' />
                                </div>
                                <div className='mb-4 mr-4'>
                                    <input className='border border-slate-200 py-1 px-2 outline-none' type="text" placeholder='Your email' />
                                </div>
                            </div>
                            <div>
                                <input className='border border-slate-200 w-full outline-none py-4 px-2' placeholder='Your message' />
                            </div>
                            <div>
                                <button className='my-4 bg-red-500 text-white px-8 py-2 rounded-md shadow-lg'>Get In Touch</button>
                            </div>
                        </form>
                    </div>
                    <div className="imageProvider">
                        <Image src={ContactImg} alt="Contact Us" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
// react hooks
import { useState } from 'react';
import emailJS from 'emailjs-com';

// components
import Circles from '../../components/Circles';

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../../variants'


const Contact = () => {
    const [form, setFormData] = useState({
        from_name: undefined,
        from_email: undefined,
        from_subject: undefined,
        message: undefined,
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { value, id } = e.target;
        setFormData({ ...form, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        console.log('form data:', form);
        // Send email using EmailJS
        emailJS
            .send(
                'service_vfvkpda',   // Replace with your EmailJS Service ID
                'template_9lt83ah',  // Replace with your EmailJS Template ID
                form,
                '_ADqngOc3sK_kIcap'       // Replace with your EmailJS User ID
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus('Email sent successfully!');
                    setFormData({ from_name: '', from_email: '', from_subject: '', message: '' });
                },
                (error) => {
                    console.error('FAILED...', error);
                    setStatus('Failed to send email. Please try again.');
                }
            );
    };
    return (
        <div className='h-full bg-primary/30'>
            <div className=' container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
                {/* text & form */}
                <div className='flex flex-col w-full max-w-[700px]'>
                    {/* text */}
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center mb-12 '>Let's <span className='text-accent'>connect.</span>
                    </motion.h2>
                    {/* form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='flex flex-1 flex-col gap-6 w-full mx-auto'>
                        <div className='flex gap-x-6 w-full'>
                            <input
                                id='from_name'
                                type='text'
                                placeholder='name'
                                value={form.from_name}
                                onChange={handleChange}
                                required
                                className='input w-full p-4 rounded-md'/>
                            <input
                                id='from_email'
                                type='text'
                                placeholder='email'
                                value={form.from_email}
                                onChange={handleChange}
                                required
                                className='input w-full p-4 rounded-md'/>
                        </div>
                        <input
                            id='from_subject'
                            type='subject'
                            placeholder='subject'
                            value={form.from_subject}
                            onChange={handleChange}
                            required
                            className='input'/>
                        <textarea
                            id='message'
                            placeholder='message'
                            value={form.message}
                            onChange={handleChange}
                            required
                            className='textarea w-full p-4 rounded-md'/>
                        <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px]
                                          px-8 transition-all duration-300 flex items-center justify-center
                                          overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
                                 transition-all duration-300'>
                  Let's talk
                </span>
                            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
                                                        group-hover:-translate-y-0 group-hover:opacity-100
                                                        transition-all duration-300 absolute text-[22px]'/>
                        </button>
                        <p>{status}</p>
                    </motion.form>
                </div>
            </div>
        </div>
    )
};

export default Contact;

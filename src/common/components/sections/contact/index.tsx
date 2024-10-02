'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/common/lib/hooks';
import SubmitBtn from './_components/submit-btn';
import SectionHeading from '@/common/components/shared/section-heading';
import toast from 'react-hot-toast';
import { sendEmail } from '@/common/utils/actions/send-email';

export default function Contact() {
  const { ref } = useSectionInView('contact');
  const [formData, setFormData] = useState({
    senderEmail: '',
    message: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formDataEntry = new FormData();
    formDataEntry.append('senderEmail', formData.senderEmail);
    formDataEntry.append('message', formData.message);
    const data = await sendEmail(formDataEntry);

    if (data.error) {
      toast.error(data.error);
      return;
    }

    if (data.success) {
      toast.success('Email sent successfully!');
      // Clear text fields after successful submission
      setFormData({
        senderEmail: '',
        message: '',
      });
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="mb-20 mt-6 text-gray-700 dark:text-white/80">
          Feel free to reach out to me directly at
          <a className="underline" href="tel:+9779849426552">
            +9779849426552
          </a>{' '}
          or{' '}
          <a className="underline" href="mailto:raazeshp96@gmail.com">
            raazeshp96@gmail.com
          </a>
          . <br />
          Alternatively, you can connect with me through the contact form for
          any inquiries or opportunities.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col dark:text-black"
        >
          <input
            className="h-14 rounded-lg border bg-gray-50 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            value={formData.senderEmail}
            onChange={handleInputChange}
          />
          <textarea
            className="my-3 h-52 resize-none rounded-lg border bg-gray-50 p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="message"
            placeholder="Your message 👋"
            required
            maxLength={5000}
            value={formData.message}
            onChange={handleInputChange}
          />
          <div className="flex justify-center">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  );
}

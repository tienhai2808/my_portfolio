import { Button, useMatches } from '@mantine/core';
import FloatingInput from './FloatingInput';
import React, { useState } from 'react';
import { IconBrandTelegram, IconTopologyStar3 } from '@tabler/icons-react';
import { validateForm } from './Validation';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import toast from "react-hot-toast";

const Contact = () => {
  const form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  const btn = useMatches({
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  })

  const [formData, setFormData] = useState(form)
  const [formError, setFormError] = useState(form)

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value })
    setFormError({ ...formError, [id]: validateForm(id, value) })  
  }

  const handleSubmit = async () => {
    let valid = true;
    let newFormError = {};
    for (let key in formData) {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }
    setFormError(newFormError);
    if (valid) {
      setFormData(form);
      await addDoc(collection(db, "my_portfolio"), formData);
      toast.success("Message sent successfully", { duration: 4000 });
    } else {
      toast.error("Please fill the form correctly", { duration: 4000 });
    };
  }

  return (
    <div className='px-16 mx-20 pt-10 font-mono py-5 bs-mx:mx-5 md-mx:mx-0 xs-mx:px-3' id='contact'>
      <h1 className='text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-5 font-bold text-white'>
        <span className='text-primaryColor'>04.&nbsp;</span>Contact
      </h1>
      <div className='shadow-[0_0_10px_0_#8cf8f8] flex m-auto flex-col gap-6 w-[70%] lg-mx:w-[78%] bs-mx:w-[85%] xs-mx:w-[90%] border border-primaryColor p-8 md-mx:p-6 sm-mx:p-4 rounded-3xl'
        data-aos='flip-left'>
        <div className='flex justify-start gap-5 sm-mx:gap-3 xs-sm:gap-2 text-3xl sm-mx:text-2xl xs-mx:text-xl font-semibold text-white items-center'>
          Let's Connect
          <IconTopologyStar3 className='text-primaryColor h-[30px] w-[30px] sm-mx:h-[26px] sm-mx:w-[26px] xs-mx:w-6 xs-mx:h-6' />
        </div>
        <FloatingInput id='name' name='name' label='Name' value={formData.name} handleChange={handleChange} error={formError.name}/>
        <FloatingInput id='email' name='email' label='Email' value={formData.email} handleChange={handleChange} error={formError.email}/>
        <FloatingInput id='phone' name='phone' label='Phone Number' value={formData.phone} handleChange={handleChange} error={formError.phone}/>
        <FloatingInput id='message' name='message' label='Message' value={formData.message} handleChange={handleChange} error={formError.message}/>
        <Button fullWidth onClick={handleSubmit} variant='filled' size={btn} radius='lg'
          rightSection={<IconBrandTelegram size={20} />} color='#8cf8f8' className='!text-bgColor !font-bold'>
          Send
        </Button>
      </div>
    </div>
  )
}

export default Contact
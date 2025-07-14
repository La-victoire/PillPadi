import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { toast } from 'sonner'

const Hero = () => {
      const [email, setEmail] = useState("")
      const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await fetch("https://sheetdb.io/api/v1/bk6dil96o5quu",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({data: [{
            id: Math.random().toLocaleString(),
            email:email,
          }]})
        })
        if (res.ok) {
          toast.success("Thanks for reaching out! We’ll get back to you shortly.")
          setEmail("")
        } else {
          toast.error("Something Went Wrong")
        }
      } catch (error) {
        console.error(error)
        toast.error(error)
      }
    }
  return (
    <>
    <section>
      <div className="flex h-[700px]">
        <div className='text-5xl px-30 pt-20 h-[348px] w-[680px]'>
        <span className='text-red-400'>Simplify</span>  Medication Adherence <span className='text-red-400'>For</span> You or Your <span className='text-red-400'>Patients!</span>
        <p className='text-base'>Join our waitlist for effortless reminders and tracking coming soon for individuals and healthcare providers!</p>
        <form onSubmit={handleSubmit} className='flex gap-2 mt-5'>
          <Input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address" 
          required/>
          <Button
          type="submit"
          className="bg-[#0039B5]">Join the Waitlist</Button>
        </form>
        </div>
        <div className='relative'>
          <img src="/Background.png" alt="hand" />
          <img
          className='absolute -top-24 right-34' 
          src="/Frame 1.png" 
          alt="phone"  />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
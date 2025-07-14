import React, { useState } from 'react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { toast } from 'sonner'

const Register = () => {
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
    <section className='py-20'>
      <div className='text-black/80 text-7xl text-center w-[80dvw] font-bold'>
        Be Among the First to Try PillPadi! <span className='text-[#0051FE]'>For You</span> or <span className='text-[#0051FE]'>Your Clinic!</span>
      </div>
      <p>
       Sign up now to get early access when we launch for individuals and healthcare providers!
      </p>
      <form onSubmit={handleSubmit} className='flex gap-2 mt-5'>
        <Input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Johnsmith@company.com" 
        required/>
        <Button
        type="submit"
        className="bg-[#0039B5]">Join the Waitlist</Button>
      </form>
    </section>
  )
}

export default Register
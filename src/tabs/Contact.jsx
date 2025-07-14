import { Button } from '@/components/components/ui/button'
import { Input } from '@/components/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/components/ui/select'
import { Textarea } from '@/components/components/ui/textarea'
import React, { useState } from 'react'
import { client } from '../constant'
import { toast } from 'sonner'

const Contact = () => {
  const [clientType, setClientType] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

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
          name: name,
          email:email,
          client_type:clientType,
          message:message
        }]})
      })
      if (res.ok) {
        toast.success("Thanks for reaching out! We’ll get back to you shortly.")
        setName("")
        setEmail("")
        setMessage("")
        setClientType("")
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
    <section className='item-row gap-10 text-black/80'>
      <div className='w-1/2 item-col'>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Whether you're a user, clinic, or curious partner, drop us a message and we'll get back to you soon. </p>
      </div>
      <form onSubmit={handleSubmit} className='item-col w-1/2 gap-5'> 
        <div>
          <label htmlFor="name">
            Full Name*
          </label>
          <Input 
           value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder="Full Name"
           required />
        </div>
        <div>
          <label htmlFor="email">
            Email Address*
          </label>
          <Input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Johnsmith@company.com" 
          required/>
        </div>
        <div>
          <label htmlFor='client'>
            I'm reaching out as a/an...
          </label>
          <Select 
            name="clientType_type"
            value={clientType}
            onValueChange={setClientType}
            required
            >
            <SelectTrigger>
              <SelectValue placeholder="Select Client Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>
                {client.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
                </SelectLabel>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="message">
            Your Message
          </label>
          <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Full Name" />
        </div>
        <div>
          <Button
           className="bg-[#0039B5] mb-5"
           type="submit"
           >
            Send Message
          </Button>
          <p>We usually respond between 24 - 48 hours</p>
        </div>
      </form>
    </section>
    </>
  )
}

export default Contact
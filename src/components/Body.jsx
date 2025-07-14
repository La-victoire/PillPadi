import React, { useState } from 'react'
import { howItWorks, perks } from '../constant'
import { Card, CardContent, CardHeader } from './components/ui/card'
import { Clock, CloudOff, CloudOffIcon, ListCheckIcon, StarIcon } from 'lucide-react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { toast } from 'sonner'

const Body = () => {
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
      <h2>Why Choose PillPadi?</h2>
      <div className='item-row px-10'>
        {
          perks.map(({title,description,icon})=> (
            <Card key={icon}>
              <CardHeader className="flex-center">
                { icon == "time" ? (
                  <Clock color='blue'/>
                ): icon == "cloud" ? (
                  <CloudOffIcon fill='blue' color='blue'/>
                ): icon == "checklist" ?(
                  <ListCheckIcon  color='blue'/>
                ): icon == "star" && (
                  <StarIcon color='blue' fill='blue'/>
                )}
              </CardHeader>
              <CardContent>
                <h3>{title}</h3>
                <p>{description}</p>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </section>
    <section className='my-20'>
      <h2>How PillPadi Works for You</h2>
      <div className='item-row'>
        {howItWorks.map(({title,description,img}) => (
          <Card className="pt-0 gap-2 rounded-2xl">
            <img className='h-[42dvh]' src={img} alt={title} />
            <div className='text-center px-5'>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
    <section>
      <h1 className='text-[#0051FE]'>
        Be Among the First to Try PillPadi!
      </h1>
      <p>
        Sign up now to get early access when we launch!
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
    </>
  )
}

export default Body
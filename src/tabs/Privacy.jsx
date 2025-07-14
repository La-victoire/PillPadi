import React from 'react'
import { TERMS } from '../constant'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/components/ui/accordion'

const Privacy = () => {
  return (
    <>
    <section>
      <h1>Privacy & Terms</h1>
      <p>Last updated: {TERMS.LAST_UPDATED}</p>
      <p>{TERMS.INTRO_TEXT}</p>
      {TERMS.SECTIONS.map((term)=> (
        <div          
        className="item-col justify-start items-start"
        >
          <Accordion
          type="single"
          collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger><h3>{term.title}</h3></AccordionTrigger>
              <AccordionContent>
                {Array.isArray(term.content) ? term.content.map((item)=>(
                  <li>{item}</li>
                )): (
                  <p>{term.content}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </section>
    </>
  )
}

export default Privacy
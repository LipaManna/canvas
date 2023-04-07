import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


const FaqAccordion = () => {
    let items = [{id:1,heading:"Lorem Ipsum",content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`},{id:2,heading:"Lorem Ipsum",content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`},{id:3,heading:"Lorem Ipsum",content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`}]
  return (
    <section className='accordion-wrap common-pad'>
      <div className='container'>
      <Accordion allowZeroExpanded>
    {items.map((item) => (
        <AccordionItem key={item.id}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {item.heading}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>
      </div>
    </section>
  )
}

export default FaqAccordion
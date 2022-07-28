import React, {Fragment, useState} from "react"
import style from "../components/css/faq.module.css";
import { Button } from "../components";
import {TiArrowSortedDown as ArrowDown} from 'react-icons/ti';
import {TiArrowSortedUp as ArrowUp} from 'react-icons/ti';



const Faq = () => {

     const [selected, setSelcted] = useState(null);

      const openfaq = (ind) => {
          if (selected === ind) {
            return setSelcted(null);
          }
          else{
            setSelcted(ind);
          }
      }

    return ( 
        <Fragment>
            <section className={style.faqSection}>
                <div>

                   <div><h1>Frequently Asked Questions</h1> <h1>(FAQs)</h1></div> 
                    <p>Here we’ll share informative guides, inspirational case studies and latest from the Shipbubble office.</p>
                    <div>
                       {data.map((item, ind) => (
                            <div>
                                <Button  text={item.Question} className={style.title} >
                                  {selected === ind ? <ArrowUp onClick={() => openfaq(ind)} />  : <ArrowDown onClick={() => openfaq(ind)}/>   }
                                </Button>
                                
                                <div className={` ${selected === ind ? style.contentShow: style.content}`}>
                                    <p>{item.Answer}</p>

                                </div>
                             </div>
                       ))}
                       
                    </div>
                </div>
            </section>
    </Fragment>
    );
}
 
const data = [

    {
        Question : 'What does shipam do?',
        Answer: 
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deleniti modi fuga ducimus vel qui atque reiciendis dolore accusantium Vero aliquid autem vel ullam.
            necessitatibus mollitia quasi in aperiam nam perferendis.`
   },
   {
    Question : 'Do you offer inter-state deliveries?',
    Answer: 
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deleniti modi fuga ducimus vel qui atque reiciendis dolore accusantium Vero aliquid autem vel ullam.
        necessitatibus mollitia quasi in aperiam nam perferendis.`
   },
   {
    Question : 'Can I track a shipment?',
    Answer: 
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deleniti modi fuga ducimus vel qui atque reiciendis dolore accusantium Vero aliquid autem vel ullam.
        necessitatibus mollitia quasi in aperiam nam perferendis.`
    },
    {
        Question : 'Do I need to create an account?',
        Answer: 
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deleniti modi fuga ducimus vel qui atque reiciendis dolore accusantium Vero aliquid autem vel ullam.
            necessitatibus mollitia quasi in aperiam nam perferendis.`
   }
]
export default Faq;
import { Fragment, useState } from "react";
import { Button } from "../components";
import {TiArrowSortedDown as ArrowDown} from 'react-icons/ti';
import style from "../components/css/faq.module.css";



const Faqsection = () => {

    const [faq, setFaq] =  useState(false);
    const [cntFaq, setCntFaq] = useState(null);


     const openfaq = () => {
        setFaq(!faq);
        console.log("faq working");
     }
    return ( 
        <Fragment>
            <section className={style.faqSection}>
                    <div>

                       <div><h1>Frequently Asked Questions</h1> <h1>(FAQs)</h1></div> 
                        <p>Here we’ll share informative guides, inspirational case studies and latest from the Shipbubble office.</p>
                        <div>
                            <div >
                                <Button  text="What does shipam do?" className={style.Question} >
                                  <ArrowDown onClick={() => openfaq()}/>
                                </Button>
                                
                                <div className={`${style.Answer} ${faq ? style.Answer1 : ''}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti modi 
                                    fuga ducimus vel qui, atque reiciendis dolore accusantium. Vero aliquid autem vel ullam necessitatibus,
                                    mollitia quasi in aperiam nam perferendis.</p>

                                </div>
                            </div>
                            <div >
                               <Button  text="Do you offer inter-state deliveries?" className={style.Question}>
                                  <ArrowDown onClick={() => openfaq()} />
                                </Button>
                                <div className={`${style.Answer} ${faq ? style.Answer1 : ''}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti modi 
                                    fuga ducimus vel qui, atque reiciendis dolore accusantium. Vero aliquid autem vel ullam necessitatibus,
                                    mollitia quasi in aperiam nam perferendis.</p>
                                </div>
                            </div>
                            <div >
                               <Button  text="Can I track a shipment?" className={style.Question}>
                                  <ArrowDown  onClick={() => openfaq()}/>
                                </Button>
                                <div className={`${style.Answer} ${faq ? style.Answer1 : ''}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti modi 
                                    fuga ducimus vel qui, atque reiciendis dolore accusantium. Vero aliquid autem vel ullam necessitatibus,
                                    mollitia quasi in aperiam nam perferendis.</p>
                                </div>
                            </div>
                            <div >
                               <Button  text="Do I need to create an account?" className={style.Question}>
                                  <ArrowDown onClick={() => openfaq()} />
                                </Button>
                                <div className={`${style.Answer} ${faq ? style.Answer1 : ''}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti modi 
                                    fuga ducimus vel qui, atque reiciendis dolore accusantium. Vero aliquid autem vel ullam necessitatibus,
                                    mollitia quasi in aperiam nam perferendis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Fragment>
     );
}
 

 
export default Faqsection;
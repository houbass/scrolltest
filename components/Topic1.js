
import { useLayoutEffect, useRef, useState } from 'react'

export default function Topic1() {

    //SCROLLING
    //const [yOffset, setYOffset] = useState(null);
    //const [elementOpacity, setElementOpacity] = useState("0");
    const [elementClass, setElementClass] = useState("");
    const elementRef = useRef();

    //get total height
    function getTotalHeight() {
      const scrollYoffset = window.pageYOffset;
      const windowHeigth = window.innerHeight;
      const totalHeight = scrollYoffset + windowHeigth;

      return (totalHeight - (windowHeigth * 0.2));
    }

    //on scroll function
    function scrollFun() {
      const y = getTotalHeight();
      //setYOffset(y);

      if(y > elementRef.current.offsetTop){
        setElementClass("textAnimation");
      }
    }
  
    //on resize
    function resizeFun() {
      const y = getTotalHeight();
      //setYOffset(y);

      if(y > elementRef.current.offsetTop){
        setElementClass("textAnimation");
      }
    }
  
    useLayoutEffect(() => {
      //setYOffset(getTotalHeight);
      scrollFun();
      window.addEventListener("scroll", scrollFun);
      window.addEventListener("resize", resizeFun);
  
      return () => {
        window.removeEventListener("scroll", scrollFun);
        window.removeEventListener("resize", resizeFun);
      }
    }, [])
  
    /*
    useLayoutEffect(() => {

    })
    */

  return (
    <>
        <div 
        ref={elementRef} 
        className="topic1"
        >
            <h3 
            className={"text" + " " + elementClass} 
            >
                some text blaas das das d blasd ad ad das dlsdf 
            </h3>
        </div>
    </>
  )
}

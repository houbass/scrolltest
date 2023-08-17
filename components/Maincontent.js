
//components
import AnimatedText from '@/components/AnimatedText'

export default function Maincontent() {
    const text1 = "checkout our amazing products made just for you";
    const text2 = "try out our super awesome app and make your life better";

    return(
        <>
            <div
                className='maincontent'>
                <h1>main content</h1>
                <AnimatedText text={text1}/>
                <AnimatedText text={text2}/>
            </div>
        </>
    )
}
import React from 'react'
import './Frequent.css'

function Frequent() {
    return (
        
        <div class="faq">
            <h2>Frequently Asked Questions</h2>
            <div className='container' style={{marginLeft: '-191px'}}>

            <ul class="accordion">
                <li>
                    <input type="radio" name="accordion" id="first"/>
                        <label for="first">What is Netflix?</label>
                        <div class="content">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                        </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="second"/>
                        <label for="second">How much does Netflix cost?</label>
                        <div class="content">
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                        </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="third"/>
                        <label for="third">Where can I watch?</label>
                        <div class="content">
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="fourth"/>
                        <label for="fourth">How do I cancel?</label>
                        <div class="content">
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="fifth"/>
                        <label for="fifth">What can I watch on Netflix?</label>
                        <div class="content">
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="sixth"/>
                        <label for="sixth">Is Netflix good for kids?</label>
                        <div class="content">
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                </li>
            </ul>
            </div>
            
        </div>
    )
}

export default Frequent

import {Hero} from "../components/Hero.jsx";
import {Card} from "../components/Card.jsx";
import {Footer} from "../components/Footer.jsx";
import {list} from "postcss";


export const WhyUs = () => {
    return (
        <div className="WhyUs">
            <Hero img="./whyus.png"/>
            <Card
                title="Why Choose Everly Technologies?"/>


            <ul className="home-body-list">

                <li className="home-body-list-item">
                    <h3>
                        1. Experience and Expertise:
                    </h3>
                    <p>
                        Highlight your company\'s experience and expertise in the software development industry. This
                        could include the number of years you\'ve been in business, the types of projects you\'ve worked
                        on, and any certifications or accolades your team has received.
                    </p>
                </li>

                <li className="home-body-list-item">
                    <h3>
                        2. Skilled Team:
                    </h3>
                    <p>
                        Showcase your team\'s skills and qualifications, including their education, technical expertise,
                        and experience working with various technologies.
                    </p>
                </li>
                <li className="home-body-list-item">
                    <h3>
                        3. Client Testimonials:
                    </h3>
                    <p>
                        Include testimonials from satisfied clients to demonstrate the quality of your work and the
                        value you provide.
                    </p>
                </li>
                <li className="home-body-list-item">
                    <h3>
                        4. Unique Approach:
                    </h3>
                    <p>
                        Highlight your company\'s unique approach to software development and consulting. What sets you
                        apart from other consultancies? This could be your commitment to collaboration, your focus on
                        Agile methodology, or any other distinguishing factor.
                    </p>
                </li>
                <li className="home-body-list-item">
                    <h3>
                        5. Tailored Solutions:
                    </h3>
                    <p>
                        Emphasize your ability to tailor your services to meet each client\'s specific needs. This could
                        include custom software development, consulting services, or training and education.
                    </p>
                </li>
                <li className="home-body-list-item">
                    <h3>
                        6. Industry Expertise:
                    </h3>
                    <p>
                        If your company specializes in a particular industry or vertical, such as healthcare or finance,
                        make sure to highlight this expertise and demonstrate how it benefits clients in that industry.
                    </p>
                </li>
                <li className="home-body-list-item">
                    <h3>
                        7. Customer Service:
                    </h3>
                    <p>
                        Highlight your commitment to exceptional customer service and support. This could include your
                        response time to inquiries, your availability for meetings, or any guarantees you offer to
                        ensure client satisfaction.
                    </p>
                </li>
                <li className="home-body-list-item">
                    <h3>
                        8. Case Studies:
                    </h3>
                    <p>
                        Provide case studies that demonstrate your ability to solve complex problems and deliver
                        tangible results for clients. These could be presented as before-and-after scenarios or success
                        stories.
                    </p>
                </li>
                <li className="home-body-list-item">
                    <h3>
                        9. Competitive Pricing:
                    </h3>
                    <p>
                        Highlight your competitive pricing structure and any flexible payment options you offer.
                    </p>
                </li>
                <li className="home-body-list-item">
                    <h3>
                        10. Partnership:
                    </h3>
                    <p>
                        Emphasize your willingness to form long-term partnerships with clients to help them achieve
                        their business goals. This could include ongoing support and maintenance services, as well as
                        additional consulting and development work as needed.
                    </p>
                </li>
            </ul>
            <Footer/>
        </div>
    )
}

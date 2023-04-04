import reactLogo from "../assets/react.svg";
import {useState} from 'react'
import {Hero} from "../components/Hero.jsx";
import {Footer} from "../components/Footer.jsx";
import {Card} from "../components/Card.jsx";

export const Home = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Hero img="./home.png"/>
            <Card title="IT Consulting & Services"
                  description="At Everly Technologies, we offer a range of software development and technology consulting services to
                help businesses achieve their goals. Our team of experienced professionals is dedicated to providing
                tailored solutions to meet each client's specific needs."/>

            <ul className="home-body-list">

                <li className="home-body-list-item">
                    <h3> Custom Software Development</h3>
                    <p> Our team has years of experience in developing custom software solutions for a variety of
                        industries. We work closely with our clients to understand their unique needs and challenges,
                        and we use the latest tools and technologies to deliver high-quality software that meets their
                        exact specifications.</p>
                </li>

                <li className="home-body-list-item">
                    <h3> Web Development</h3>
                    <p> Our web development services include front-end and back-end development, website design, and
                        website maintenance. We specialize in building responsive, user-friendly websites that are
                        optimized for search engines and provide an excellent user experience.
                    </p>
                </li>

                <li className="home-body-list-item">
                    <h3>Mobile App Development</h3>
                    <p>
                        Our mobile app development services include both native and hybrid app development for iOS and
                        Android. We work closely with our clients to develop apps that are user-friendly, engaging, and
                        functional, while meeting their specific business goals.
                    </p>
                </li>


                <li className="home-body-list-item">
                    <h3>
                        Technology Consulting
                    </h3>
                    <p>
                        Our technology consulting services help businesses identify and implement the right technology
                        solutions to achieve their goals. We offer a range of consulting services, including IT strategy
                        development, technology assessments, and software selection and implementation.
                    </p>
                </li>


                <li className="home-body-list-item">
                    <h3>
                        DevOps Services
                    </h3>
                    <p>
                        Our DevOps services help businesses automate and streamline their software development and
                        deployment processes. We work with clients to implement continuous integration and continuous
                        deployment (CI/CD) practices, as well as cloud infrastructure and containerization solutions.
                    </p>
                </li>

                <li className="home-body-list-item">
                    <h3>
                        Testing and Quality Assurance
                    </h3>
                    <p>
                        We provide testing and quality assurance services to ensure that software products meet
                        high-quality standards. Our testing services include functional testing, performance testing,
                        and security testing.
                    </p>
                </li>

                <li className="home-body-list-item">
                    <h3>
                        Training and Education
                    </h3>
                    <p>
                        We offer training and education services to help businesses develop the skills and knowledge
                        they need to succeed in the ever-evolving technology landscape. Our training programs cover a
                        range of topics, including software development, DevOps, and IT strategy.
                    </p>
                </li>


                <h3> At Everly Technologies, we are committed to providing our clients with high-quality, reliable
                    software solutions and technology consulting services. Contact us today to learn more about how we
                    can help your business achieve its goals.
                </h3>


            </ul>
            <Footer/>
        </div>
    )
}
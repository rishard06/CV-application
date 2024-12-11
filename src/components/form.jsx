import { useState } from "react";
import "../styles/form.css"

export default function Form({ onFormValues }) {
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        schoolname: '',
        year: '',
        course: '',
        company: '',
        position: '',
        responsibiliiest: '',
        yearexperience: '', 
    });

    const handleValue = (e) => {
        const { name, value } = e.target;
        setValue((prevState) => ({...prevState, [name]: value}));
    };  

    return (
        <form>
            <h1>CV application</h1>
            <section className="general-info">
                <label >
                    First name:
                    <input 
                        name="firstname"
                        type="text"
                        value={value.firstname}
                        placeholder="Juan"
                        onChange={handleValue}
                    />
                </label>
                <br />
                <label >
                    Last name:
                    <input
                        name="lastname" 
                        type="text"
                        value={value.lastname}
                        placeholder="Luna"
                        onChange={handleValue}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input 
                        name="phone"
                        type="text"
                        value={value.phone}
                        placeholder="5555-555-555"
                        onChange={handleValue}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input 
                        name="email"
                        type="text"
                        value={value.email}
                        placeholder="juanluna@gmail.com"
                        onChange={handleValue}
                    />
                </label>
            </section>

            <section className="educational experience">
                <label>
                    School name: 
                    <input 
                        type="text"
                        name="schoolname"
                        value={value.schoolname} 
                        placeholder="Manila University"
                        onChange={handleValue}
                    />
                </label>
                <br />
                <label>
                    Year: 
                    <input 
                        type="number"
                        name="year"
                        value={value.year} 
                        placeholder="2000"
                        min={2000}
                        onChange={handleValue}
                    />
                </label>
                <br />
                <label>
                    Course: 
                    <input 
                        type="text"
                        name="course"
                        value={value.course} 
                        onChange={handleValue}
                    />
                </label>
            </section>

            <section className="personal-exp">
                <p>Your personal experience</p>
                <label>
                    Company name: 
                    <input 
                        type="text"
                        name="company"
                        value={value.company}
                        placeholder="FAANG" 
                        onChange={handleValue}
                    />
                </label>
                <br />
                <label>
                    position: 
                    <input 
                        type="text"
                        name="position"
                        value={value.position}
                        placeholder="Product manager" 
                        onChange={handleValue}
                    />
                </label>
                <br />
                <label>
                    responsibilities: 
                    <input 
                        type="text"
                        name="responsibilities"
                        value={value.responsibilities} 
                        onChange={handleValue}
                    />
                </label>
                <br />
                <label>
                    year of experience: 
                    <input 
                        type="number"
                        name="yearexperience"
                        value={value.yearexperience} 
                        placeholder="2000"
                        min={2000}
                        onChange={handleValue}
                    />
                </label>
            </section>
            
            <button className="btn" onClick={(e) => {
                e.preventDefault();
                onFormValues(value)
            }}>Done!</button>
        </form>
    )
}
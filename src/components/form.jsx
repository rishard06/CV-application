import { useState } from "react";
import "../styles/form.css"

export default function Form() {
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        schoolname: '',
        year: '',
        course: '',
        company: '',
        position: '',
        responsibilities: '',
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
                        onChange={handleValue}
                    />
                </label>
            </section>
            
            <button onClick={(e) => {
                e.preventDefault();
                console.log(value)
            }}>Done!</button>
        </form>
    )
}
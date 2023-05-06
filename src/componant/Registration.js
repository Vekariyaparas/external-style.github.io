import React from "react";
const book='assets/images/img.png';

function Registration()
{
    return(
        <>
        <section id="main-section">
        <div className="contain">
            <h1>Registration Form</h1>
            <hr align="left" />
            <img src={book} alt='pic0109' title='simple pic' required/>

        </div>
        <div className="contain1">
            <form>
            <input type="text" name="name" placeholder="Your Name *" required></input><br /><br />
            <input type="email" name="name" placeholder="Email *" required></input><br /><br />
            <input type="text" name="name" placeholder="Phone *" required></input><br /><br />
            <textarea type="text" name="name" placeholder="Address *" required></textarea><br /><br />
            <input type="submit" value="Submit" />
            <input type="reset" value='Reset' />
            </form>
        </div>
        </section>
        </>
    )
}

export default Registration;
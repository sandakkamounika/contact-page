import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center',margin: '1rem auto '}}>Contact Us</h1>
        <div>
            <form>
                <input type = 'text' name = 'name'  placeholder = 'Enter Full Name' required
                />
            </form>
        </div>
        
        </div>
    );
};

export default Contact;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const ContactUs = () => {

  const style = css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    & input {
      width: 100%;
      height: 35px;
      padding:7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #95c11f;

      &:focus {
        border: 2px solid lightgrey;
      }
    }

    & textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding:7px;
      outline:none;
      border-radius: 5px;
      border: 1px solid #95c11f;

      &:focus {
        border: 2px solid lightgrey;
      }
    }

    & label {
      margin-top: 1rem;
    }

    & input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background-color: #95c11f;
      color:white;
      border:none;
    }

    & p {
      font-size: 0.7em;
      font-style: italic;
    }

    & a {
      color: red;

    }
  `

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
            'service_5dl3n0r', 
            'template_2f8huwr', 
            form.current, 
            'eNphIfYkkzqgEpngE'
        )
      .then((result) => {
          e.target.reset();
          alert("Din mail er blevet sendt og vi vender tilbage snarest.");
      }, (error) => {
          console.log(error.text);
          
      });
  };

  return (
    <form css={style} ref={form} onSubmit={sendEmail}>

        <label>Navn:</label>
        <input type="text" name="user_name" required />        

        <label>Email:</label>
        <input type="email" name="user_email" required />

        <label>Besked:</label>
          <p>(evt. nummer og tidspunkt hvis du ønsker at blive kontaktet telefonisk)</p>
        <textarea name="message" required />
      
      <input className='submit' type="submit" value="Send" />
      
    </form>
  );
};
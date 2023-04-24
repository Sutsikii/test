import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { PageGuide } from 'pageguide';

import emailData from '../conf/emailJS.json';

import guirlande from '../images/components/Guirlande.jpg';
 
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailData.service_id, emailData.template_id, form.current, emailData.public_key)
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('input[type=text], input[type=email]');
    for (let i = 0; i < inputs.length; i++) {
      const inputEl = inputs[i];
      if (inputEl.value.trim() !== '') {
        inputEl.parentNode.classList.add('input--filled');
      }
      inputEl.addEventListener('focus', onFocus);
      inputEl.addEventListener('blur', onBlur);
    }

    function onFocus( ev ) {
        ev.target.parentNode.classList.add( 'inputs--filled' );
    }

    function onBlur( ev ) {
        if ( ev.target.value.trim() === '' ) {
            ev.target.parentNode.classList.remove( 'inputs--filled' );
        }
    }

  }, []);

  
  const addButton = false;

  const pageGuideData = [
    {
      title: 'Mon tuto',
      content: '<p>Bienvenue dans ce super tuto en ligne </p><p>Pour naviguer dans le tuto vous pouvez utiliser les fléches directionnelles !</p',
    }, 
    {
      title: 'Formulaire de contact',
      content: 'Voici mon formulaire de contact, nous allons voir comment l\'utiliser ',
      element: '.form-page',
    }, 
    {
      title: 'La partie gauche',
      content: 'La partie gauche est présente pour avoir une UI sympa, rien de fonctionnel ici',
      element: '.image',
      shape: 'square'
    }, 
    {
      title: 'Le formulaire',
      content: 'C\'est ici que vous devez remplir les champs du formulaire',
      element: '.form',
      shape: 'square'
    }, 
    {
      title: 'Le nom',
      content: 'C\'est ici que vous mettez votre nom',
      element: '.user_name',
    },
    {
      title: 'L\'Email',
      content: 'C\'est ici que vous mettez votre Email',
      element: '.user_email',
    },
    {
      title: 'Le sujet',
      content: 'C\'est ici que vous mettez votre sujet',
      element: '.user_sujet',
    },
    {
      title: 'Le message',
      content: 'C\'est ici que vous mettez votre message',
      element: '.multiple-targets',
      position: 'top'
    },
    {
      title: 'L\'envoi',
      content: 'C\'est ici que vous envoyez votre message',
      element: '.buttonSend',
    },
  ];

  const pageGuide = new PageGuide(pageGuideData, addButton);
  // pageGuide.start();

  function startTuto(){
    pageGuide.start();
  }

  return (
    <>
          <button onClick={startTuto}>MON TUTO</button>

      <section className='form-page'>

      <div className='image'>
          <figure>
                  <img src={guirlande} alt="Fond représentant des guirlandes lumineuses" />
          </figure>
          <div className='headline'>
              <h2>Sutsiki</h2>
              <h3>Créateur de contenus</h3>
          </div>
      </div>

      <div className='form'>

      <form ref={form} onSubmit={sendEmail}>
          <span className='user_name'>
              <label className='animated'>Nom</label>
              <input type="text" name="user_name" required/>
          </span>

          <span className='user_email'>
              <label className='animated'>Email</label>
              <input type="email" name="user_email" required/>
          </span>

          <span className='user_sujet'>
              <label className='animated'>Sujet</label>
              <input type="text" name="user_subject" required/>
          </span>
        
          <label className='multiple-targets'>Message</label>
          <textarea name="message" rows={9} required className='multiple-targets'/>

        <input type="submit" value="Envoyer" className='buttonSend' />
      </form>

      </div>  

    </section>
  </>
  );
};
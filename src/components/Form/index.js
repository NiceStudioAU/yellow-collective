import './style.css'

import Button from '@material-ui/core/Button'
import React from 'react'
import TextField from '@material-ui/core/TextField'

const Form = () => {

   const errorInitial = {
      name: false,
      email: false,
      subject: false,
      message: false
   }
   const [name, setName] = React.useState('')
   const [email, setEmail] = React.useState('')
   const [subject, setSubject] = React.useState('')
   const [message, setMessage] = React.useState('')
   const [errors, setError] = React.useState(errorInitial)

   const submitForm = async (event) => {
      event.preventDefault()
      await validateFields()
      if (!errors.name && !errors.email && !errors.message && !errors.subject) {
         const results = {
            name,
            email,
            subject,
            message
         }

         fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...results })
         })
            .then(() => alert("Success!"))
            .catch(error => alert(error))

      }
      const handleChange = (field, value) => {
         if (field === 'name') {
            setName(value)
         } else if (field === 'email') {
            setEmail(value)
         } else if (field === 'subject') {
            setSubject(value)
         } else if (field === 'message') {
            setMessage(value)
         }
      }

      const validateFields = () => {
         const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         if (name === '') {
            setError({
               ...errors,
               name: true
            })
         } else {
            setError({
               ...errors,
               name: false
            })
         }

         if (emailRegex.test(String(email).toLowerCase()) === false) {
            setError({
               ...errors,
               email: true
            })
         } else {
            setError({
               ...errors,
               email: false
            })
         }

         if (subject === '') {
            setError({
               ...errors,
               subject: true
            })
         } else {
            setError({
               ...errors,
               subject: false
            })
         }

         if (message === '') {
            setError({
               ...errors,
               message: true
            })
         } else {
            setError({
               ...errors,
               message: false
            })
         }
      }

      return (
         <div className='form-wrapper'>
            <div className="form-text">
               <div className='form-text-wrapper'>
                  <h2>First coffee free.</h2>
                  <p>Ideas are what drive new business. Creativity is the food for ideas.</p>
                  <p>The first coffee is <span>free.</span></p>
                  <p>Contact us about your requirements and we will put you in contact with the team member that is best suited to answer your needs. We’ll have a chat for the cost of a coffee.</p>
               </div>
            </div>
            <form onSubmit={submitForm} className='form' method="POST" data-netlify="true" netlify>
               <input type="hidden" name='form-name' value='contact' />
               <TextField
                  id='name'
                  label='Name'
                  value={name}
                  onChange={(text) => handleChange('name', text.target.value)}
                  required={true}
                  helperText={!!errors.name ? "Please enter your name" : null}
                  fullWidth={true}
                  className='form-input'
               />
               <TextField
                  id='email'
                  label='Email'
                  value={email}
                  onChange={(text) => handleChange('email', text.target.value)}
                  required={true}
                  helperText={!!errors.email ? "Please enter your email" : null}
                  fullWidth={true}
                  className='form-input'
               />
               <TextField
                  id='subject'
                  label='Subject'
                  value={subject}
                  onChange={(text) => handleChange('subject', text.target.value)}
                  required={true}
                  helperText={!!errors.subject ? "Please enter an email subject" : null}
                  fullWidth={true}
                  className='form-input'
               />
               <TextField
                  id='message'
                  label='Message'
                  value={message}
                  onChange={(text) => handleChange('message', text.target.value)}
                  required={true}
                  helperText={!!errors.message ? "Please enter a message" : null}
                  multiline
                  rows={6}
                  fullWidth={true}
                  className='form-input'
               />
               <Button
                  size='large'
                  variant='contained'
                  onClick={submitForm}
                  type='submit'
                  className='form-button'
               >
                  Send
            </Button>
            </form>

         </div>
      )
   }

   export default Form
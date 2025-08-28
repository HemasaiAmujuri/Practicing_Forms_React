import React from 'react'
import { useForm } from 'react-hook-form'
import "../styles/Loginstyle.css"
import { Link } from 'react-router-dom'



function LoginForm(){
  const { register, handleSubmit, formState : { errors, isSubmitting } , reset }  = useForm()

  const onSubmit = async (data) => {
     console.log('Login data:', data);
     reset()
  }

  return(
    <div className = "login">
      <form onSubmit ={handleSubmit(onSubmit)}>
      <div className='info'>
          <h1> LOGIN </h1>
          <label> Email </label>
          <input
            type="email"
            placeholder='Enter your email'
             {...register('username', { required: 'Username is required' })}
          />
      </div>

      <div className='info'>
        <label> Password </label>
        <input
          type="password"
          placeholder='Enter your password'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
         {errors.password && <p style={styles.error}>{errors.password.message}</p>}
      </div>
       <div className = "button">
        <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>         
       </div>
         <h6> Don't have an account? <Link to="/Signup">Signup </Link></h6>
       </form>
    </div>
  )

}

const styles = {
  error: {
    color: 'red',
    fontSize: '0.85rem',
  },
};


export default LoginForm;
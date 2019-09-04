import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = ({handleSubmit}) =>{
    return <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>        
        <Field name="remember" component="input" type="checkbox" />
      </div>
      <button type="submit">Отправить</button>
    </form>
}

let LoginFormRedux = reduxForm({form:'loginAuth'})(LoginForm);

export default () => {
    return <div style={{display:'grid'}}>
    <h3>Авторизация</h3>
    <LoginFormRedux onSubmit={e=>{console.log(e);}}/>
    </div>
}


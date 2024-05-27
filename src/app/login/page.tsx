// https://flowbite.com/docs/components/modal/#form-element

import React from 'react';
import Modal from '../_components/modal/modal';
import { loginInputData } from '../_utils/login_input_data';

function Login() {
  return (
    <>
      <Modal title='ログイン' bodyData={loginInputData} isLogin={true} />
    </>
  )
}

export default Login;

import React from 'react';
import Modal from '../_components/modal/modal';
import { signupInputData } from '../_utils/signup_input_data';
import { db } from '../_lib/firebase_client';

function page() {
    return (
        <div>
            <Modal title={"ユーザー登録"} bodyData={signupInputData} isLogin={false}/>
        </div>
    )
}

export default page;
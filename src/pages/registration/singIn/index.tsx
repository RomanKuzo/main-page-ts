import * as React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import SingInForm from '../../../container/singInForm/singInForm'

import './singInStyles.scss';

import Google from '../../../static/images/googlePlusSinIn.png'
import Facebook from '../../../static/images/facebook .png'

export default class SingIn extends React.Component {
    handleSubmit=async(value)=>{
        try {
            const response = await axios.post('', {
                email: value.email,
                password: value.password,
                confirmPassword: value.confirmPassword,
            });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    public render(){
        return(
            <div className="sing-in-wrapper">
                <div className="sing-in-top">
                    <div className="sing-in-title">
                        Are you new user?
                    </div>
                    <SingInForm
                        onSubmit={this.handleSubmit}
                    />
                </div>
                <div className="sing-in-bottom">
                    <div className="sing-in-bottom-btns-wrapper">
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="sing-in-btn-facebook"
                        >
                            <img
                                className="sing-in-bottom-btns-image"
                                src={Facebook}
                            />
                        </Button>
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="sing-in-btn-google"
                        >
                            <img
                                src={Google}
                                className="sing-in-bottom-btns-image"
                            />
                        </Button>
                    </div>
                    <h3 className="sing-in-bottom-text">
                        Sing Up it's free
                    </h3>
                </div>
            </div>
        );
    }
}



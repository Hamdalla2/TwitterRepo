import { TextField,Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import './Signup.css';


class FormFive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    register = () => {
        fetch("http://127.0.0.1:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: e.target.value,
        })
          .then((response) => response.json())
          .then((result) => {
              localStorage.setItem({})
    })
}

    render() {
        return (
            <div className='container_form5'>
                <div className='form5_button'>
                    <img  id='twitter'src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="Bird" width="60px" height="60px" />
                    <Link  to='/homepage' style={{ textDecoration: 'none' }}>
                    <Button type='submit' className='button' > Next</Button>
                    </Link>                </div>
                    <br/>
                <div className='div_form5'>
                    <h2>You'll need a password</h2>
                    <br/>
                    <h3>Make sure it’s 8 characters or more.</h3>
                    <br/>
                    <TextField className='Input'
                            label='Password'
                            type='password'
                            name='password'
                            variant="outlined"
                        />
                        <h4>Reveal password</h4>
                </div>
            </div>

        )
    }
}

export default FormFive
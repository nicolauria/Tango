import React from 'react'
import { withRouter } from 'react-router-dom';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
    this.loginAsGuestHelper = this.loginAsGuestHelper.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  componentDidMount(){
    this.props.clearErrors();
  }


// this code is for ghost login works well we just need to put buttons on our form somewhere for it

  loginAsGuest(e) {
    e.preventDefault();
    const button = document.getElementById('login');
    const guestEmail = 'joseph1@gmail.com'.split('');
    const guestPassword = 'password'.split('');
    this.setState({email: '', password: ''}, () =>
      this.loginAsGuestHelper(guestEmail, guestPassword, button)
    );
  }

  loginAsGuestHelper(guestEmail, guestPassword, button){
    if (guestEmail.length > 0) {
      this.setState(
        { email: this.state.email + guestEmail.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(guestEmail, guestPassword, button), 75);
        }
      );
    } else if (guestPassword.length > 0) {
      this.setState(
        { password: this.state.password + guestPassword.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(guestEmail, guestPassword, button), 100);
        }
      );
    } else {
      button.click()
    }
  }

  handleChange(type) {
    return (event) => {
      event.preventDefault();
      this.setState({
        [type]: event.currentTarget.value
      });
    }
  }

  renderErrors () {
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>
            {error}
          </li>
        ))
      }
      </ul>
    );
  }

  renderGuestLoginButton(){
    return(
      this.props.formType === 'login' 
      ? <button type="button" onClick={this.loginAsGuest}>DEMO LOGIN</button>
      : null
    )
  }



  render () {
    const capitalLogin = this.props.formType.slice(0, 1).toUpperCase() + this.props.formType.slice(1)
    return (
      <div className="">
        <form className="" onSubmit={this.handleSubmit}>

            <p className="please-do-form">{capitalLogin} to Tango </p>
          {this.renderErrors()}
          {this.renderGuestLoginButton()}
          <button type="button" onClick={this.loginAsGuest}>DEMO LOGIN</button>
          {this.props.navLink}
          <div className='session-form-manual-login'>
              {
                (this.props.formType === 'signup')
              ? (
                <label>NAME
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    placeholder=""
                    required
                    />
                </label>
                )
              : <div></div>
              }
            <label> EMAIL
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder=""
                required
                />
            </label>
              <label> PASSWORD
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  placeholder=""
                  required
                  />
              </label>
              {
                (this.props.formType === 'signup')
              ? (
                <label>CONFIRM PASSWORD
                  <input
                    type="password"
                    value={this.state.password2}
                    onChange={this.handleChange('password2')}
                    placeholder=""
                    required
                    />
                </label>
                )
              : <div></div>
              }
              <br></br>
              <input id="login" className="session-submit" type="submit" onClick={this.handleSubmit} value={this.props.formType.toUpperCase()}/>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);

import React, { Component } from 'react';
export default class Login extends Component {
    state = {
        user: 'admin',
        password: 'somepassword'
    };

    handleChange = (event) => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { user, password } = this.state;
        const correct = (user == 'admin' & password == 'somepassword');
        
        if (!correct) {
            alert("Имя пользователя или пароль введены не верно");
        }
        else {
            localStorage.setItem('auth', correct);
        }
    };
    componentDidMount() {
        this.setState({ user:'admin', password:'somepassword' });
    }
    render() {
        return (
            <>
                
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10%' }}>

                    <form onSubmit={this.handleFormSubmit} style={{ width: '300px' }}>
                        <h3>Авторизация</h3>
                        <div className="form-group">

                            <label for="inp1">
                                Логин
                    </label>
                            <input className="form-control" id="inp1" placeholder="Введите логин..." name="user" value={this.state.user} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="inp2">
                                Пароль
      </label>
                            <input className="form-control" id="inp2" placeholder="Введите пароль..." name="password" value={this.state.password} onChange={this.handleChange} type="password" />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '5px' }} >Войти</button>
                    </form>
                </div>
            </>
        )
    }
}

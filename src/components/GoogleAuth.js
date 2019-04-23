import React from 'react';

class GoogleAuth extends React.Component {
    state= {isSignedIn:null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '520581988648-56m12n3lbvj476rjtn2hnm1b9ip2c0ok.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    onAuthChange =() =>{
      this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }


    renderAuthButton(){
        if(this.state.isSignedIn ===null){
            return <div> Are we Signed IN ?</div>
        }else{
            if(this.state.isSignedIn){
                return <div> We Are Signed IN ?</div>
            }
            else{
                return <div>We Are Not Signed IN ?</div>
            }
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}


export default GoogleAuth;
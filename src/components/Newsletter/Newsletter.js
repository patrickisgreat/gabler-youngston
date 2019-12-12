import React from 'react'
import './newsletter.css'

class Newsletter extends React.Component {
   constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {}
       }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Name cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters allowed";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Email cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           alert("You have successfully subscribed to our newsletter");
            let fields = "";      
            this.setState({fields});
        }else{
           
        }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }


  render() {
    return (
      <div className="newsletter-min">
         <div className="container">
           <div className="columns">
                <div className="column is-7">
                     <span>Stay in the loop, subscribe to our </span>
                     <h5>NEWSLETTER</h5>
                </div>
                <div className="column is-5">
                <form name="subscribe" action="/about" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.contactSubmit.bind(this)}>
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="subscribe" />
                  <div className="form-group">
                     <label>Your name:</label>
                     <input name="name" type="text" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                     <span style={{color: "#ffffff", fontSize: "14px"}}>{this.state.errors["name"]}</span>
                  </div>
                  <div className="form-group">
                     <label>Your email address:</label>
                     <input name="email" type="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                     <span style={{color: "#ffffff", fontSize: "14px"}}>{this.state.errors["email"]}</span>
                  </div>
                  <div className="form-btm">
                     <em>Subscribe Now</em>
                     <input type="submit" className="submit-btn" value="" />
                  </div>
                 </form>
                </div>
             </div>
         </div>
      </div>
    )
  }
}

export default Newsletter

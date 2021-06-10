import React from 'react'

function AdminLogin() {
    return (
        <div>
        <section className="Form my-4 mx-5">
     <div className="container">
         <div className="row no-gutters">

             <div className="col-lg-7 px-5 pt-5 m-auto">
                 <h1 className="font-weight-bold py-3">Admin Portal</h1>
                 <h4>Sign into your account</h4>
                 <form>
                     <div className="form-row">
                         <div className="col-lg-7">

                             <input type="email" placeholder="Email-Address" className="form-control my-3 p-4" />
                         </div>
                     </div>
                     <div className="form-row">
                        <div className="col-lg-7">

                            <input type="password" placeholder="******" className="form-control my-3 p-4" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <button type="button" className="btn btn-outline-success btn-block mt-3 mb-5">Login</button>
                        </div>
                    </div>
                    <a href="#">Forgot password</a>
                    <p>Don't have an account? <a href="#">Register here</a></p>
                 </form>
             </div>
         </div>
     </div>
 </section>
        </div>
    )
}

export default AdminLogin

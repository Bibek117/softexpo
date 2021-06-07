import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { getCompanydetails } from '../../Helpers/HelperFunction';
function index() {
    const [CompanyDetails, setCompanyDetails] = useState([]);
    useEffect(() => {
    getCompanydetails().then((response)=>{
        console.log(response);
        setCompanyDetails(response);
    })
    }, [])

    const toggleProBanner = () => {
        return document.querySelector('.proBanner').classList.toggle("hide");
      }

    // console.log(CompanyDetails)
    return (
        <div>
            { !CompanyDetails ?
            <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p> You Have Not provided the company details. Please link company details</p>
              <Link to="/vendor/addCompany" rel="noopener noreferrer" target="" className="btn purchase-button ml-auto">Add Company Details</Link>
              <i className="mdi mdi-close bannerClose" onClick={toggleProBanner}></i>
            </span>
          </div>
        </div>:
        <div>
            <div className="row">
            <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Company Details</h3>
                <div className="row">
                    <div className="col-md-6">
                        <span className="d-flex align-items-baseline">
                        <h4 className="text-bold mr-sm-1 mr-lg-1"> Company's Name: </h4>
                        <p>{CompanyDetails.name}</p>
                        </span>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <h4 className="text-bold mr-sm-1 mr-lg-1"> Company's Logo: </h4>
                        <img src={CompanyDetails.logo} />


                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        }
        </div>
    )
}

export default withRouter(index)

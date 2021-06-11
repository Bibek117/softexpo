import { isFunction } from 'lodash-es';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom';
import { getCompanydetails } from '../../Helpers/HelperFunction';

function index() {
    const history = useHistory()
  const [CompanyDetails, setCompanyDetails] = useState([]);
  useEffect(() => {
    getCompanydetails().then((response) => {
      console.log(response);
      setCompanyDetails(response);
    })
  }, [])

  const toggleProBanner = () => {
    return document.querySelector('.proBanner').classList.toggle("hide");
  }

  if(!CompanyDetails){
      history.push('/vendor/addCompany');
  }

  // console.log(CompanyDetails)
  return (
    <div>
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
                    <div className="col-md-6">
                      <h4 className="text-bold mr-sm-1 mr-lg-1"> Company's Logo: </h4>
                      <img src={CompanyDetails.logo} width="60%" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="d-flex align-items-baseline">
                        <h4 className="text-bold mr-sm-1 mr-lg-1"> Website: </h4>
                        <p>{CompanyDetails.website}</p>
                      </span>
                    </div>
                    <div className="col-md-6">
                      <h4 className="text-bold mr-sm-1 mr-lg-1"> Email: </h4>
                      <p>{ CompanyDetails.email} </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="d-flex align-items-baseline">
                        <h4 className="text-bold mr-sm-1 mr-lg-1"> Country: </h4>
                        <p>{CompanyDetails.country}</p>
                      </span>
                    </div>
                    <div className="col-md-6">
                      <h4 className="text-bold mr-sm-1 mr-lg-1"> State: </h4>
                      <p>{ CompanyDetails.state} </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default withRouter(index)

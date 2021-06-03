import React, { useEffect, useState } from 'react'
import { getCompanydetails } from '../../Helpers/HelperFunction';
function index() {
    const [CompanyDetails, setCompanyDetails] = useState([]);
    useEffect(() => {
    getCompanydetails().then((response)=>{
        setCompanyDetails(response.data);
    })
    }, [])

    const toggleProBanner = () => {
        return document.querySelector('.proBanner').classList.toggle("hide");
      }
    return (
        <div>
            { CompanyDetails ?
            <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://www.bootstrapdash.com/product/star-admin-pro-react/" rel="noopener noreferrer" target="_blank" className="btn purchase-button ml-auto">Check Pro Version</a>
              <i className="mdi mdi-close bannerClose" onClick={toggleProBanner}></i>
            </span>
          </div>
        </div>:""}
        </div>
    )
}

export default index

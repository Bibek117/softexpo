import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { venodrAxios } from "../../../axios";
import {
    getCurrentVendorId,
    get_current_auth_id,
} from "../../Helpers/HelperFunction";
function AddSoftware() {
    const [Categories, setCategories] = useState([]);
    const [SoftwareName, setSoftwareName] = useState("");
    const [Tagline, setTagline] = useState("");
    const [ProductURL, setProductURL] = useState("");
    const [CategoryID, setCategoryID] = useState("");
    const [SoftwareCompt, setSoftwareCompt] = useState("");
    const [Summary, setSummary] = useState("");
    const [Description, setDescription] = useState("");
    const [Logo, setLogo] = useState("")
    const [SoftwareId, setSoftwareId] = useState('')
    const [FormSlider, setFormSlider] = useState(2)
    // const []

    useEffect(() => {
        axios.get("/api/software-categories").then((res) => {
            setCategories(res.data);
        });
    }, []);

    const fileData = new FormData();
    fileData.append('file', Logo);

    const HandleFirstSubmit = (e) => {
        e.preventDefault();
        const vendorid = get_current_auth_id();
        const data = {
            vendor_id: vendorid,
            software_name: SoftwareName,
            tagline: Tagline,
            category_id: CategoryID,
            software_competitors: SoftwareCompt,
            summary: Summary,
            description: Description,
        };
        console.log(data);
        venodrAxios.post("/software/create", data).then((res) => {
            console.log(res.data);
            fileData.append('id', res.data.data.id)
            setSoftwareId(res.data.data.id)
            venodrAxios.post('/software/handle-logo', fileData).then((res) => {
                if (res.status == 200) {
                    toast.success('🦄' + res.data.msg, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setFormSlider(2)
                }
            }).catch((error) => {
                if (error.response && error.response.status == 422) {
                    const errors = error.response.data.errors;
                    for (const key in errors) {
                        if (Object.hasOwnProperty.call(errors, key)) {
                            const element = errors[key][0];
                            console.log(element);
                            toast.error('🦄' + element, {
                                position: "top-left",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                    }
                }
            })
        });
    };


    return (
        <div className="row">
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add Software</h4>
                        {(FormSlider == 1) ?
                            <form className="form-sample">
                                <p className="badge">1. Basic Details</p>
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Software Name
                                            </label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="text"
                                                    onChange={(e) =>
                                                        setSoftwareName(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={SoftwareName}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Product URL
                                            </label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="text"
                                                    onChange={(e) =>
                                                        setProductURL(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={ProductURL}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Tagline
                                            </label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="text"
                                                    onChange={(e) =>
                                                        setTagline(e.target.value)
                                                    }
                                                    value={Tagline}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Product Logo
                                            </label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="file"
                                                    className="form-control d-none visibility-hidden"
                                                    id="customFileLang"
                                                    lang="en"
                                                    onChange={(e) => setLogo(e.target.files[0])}
                                                />
                                                <label
                                                    className="custom-file-label"
                                                    htmlFor="customFileLang"
                                                >
                                                    Upload image
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Category
                                            </label>
                                            <div className="col-sm-9">
                                                <select
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        setCategoryID(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    {Categories.map((c, i) => {
                                                        return (
                                                            <option
                                                                key={i}
                                                                value={c.id}
                                                            >
                                                                {c.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Software Competitors
                                            </label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="text"
                                                    onChange={(e) =>
                                                        setSoftwareCompt(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={SoftwareCompt}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <label className="col-sm-2 col-form-label">
                                                Summary *
                                            </label>
                                            <div className="col-sm-9 offset-1">
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    columns="2"
                                                    onChange={(e) =>
                                                        setSummary(e.target.value)
                                                    }
                                                    value={Summary}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <label className="col-sm-2 col-form-label">
                                                Description *
                                            </label>
                                            <div className="col-sm-9 offset-1">
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    columns="2"
                                                    onChange={(e) =>
                                                        setDescription(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={Description}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2"
                                    onClick={(e) => HandleFirstSubmit(e)}
                                >
                                    Save &#38; Next
                                </button>
                                <button type="reset" className="btn btn-light">
                                    Reset
                                </button>
                            </form> : null}
                        {
                            (FormSlider == 2) ?
                                <form className="form-sample">
                                    <p className="badge">1. Basic Details</p><br />
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-12 col-form-label">
                                                    How is Software accessible? *
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="d-flex justify-content-around flex-wrap">
                                                        <div className="form-check form-check-primary">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="access" value="Cloud Based" /> Cloud Based
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-primary">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="access" value="On Premises" /> On Premises
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-primary">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="access" value="Hybrid" /> Hybrid
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-Primary">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="access" value="Any" /> Any
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-12 col-form-label">
                                                    Does this Software Offers Free Trial?
                                                </label>
                                                <div className="col-sm-12">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="freet" /> Yes
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="freet" /> No
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-12 col-form-label">
                                                    Is Customization possible?
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="d-flex  flex-wrap">
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="customization" value="1" /> Yes
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="customization" value="0" /> No
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-12 col-form-label">
                                                    Does the software run on mobile browser? *
                                                </label>
                                                <div className="col-sm-12">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="mobile_supp" /> Yes
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="mobile_supp" /> No
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-12 col-form-label">
                                                Does this software has a lifetime free plan? *
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="d-flex  flex-wrap">
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="lifetime" value="1" /> Yes
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="lifetime" value="0" /> No
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-12 col-form-label">
                                                Are APIs available for this software? *
                                                </label>
                                                <div className="col-sm-12">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="is_Api" /> Yes
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-primary mr-3">
                                                            <label className="form-check-label">
                                                                <input type="radio" className="form-check-input" name="is_Api" /> No
                                                                <i className="input-helper"></i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form> : null
                        }
                        {
                            (FormSlider == 3) ? third : null
                        }
                        {
                            (FormSlider == 4) ? fourth : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSoftware;

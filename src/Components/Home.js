import React from "react";
import { useState, useEffect, useRef } from "react";
import logo from "../Assets/ResQ-logo.png";
import "./Home.css";
import { SelectButton } from "primereact/selectbutton";
import { Button } from 'primereact/button';
import Map from "./Map";
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';


const Home = () => {
  const options = ["FORM INFORMATION", "LIVE MAP SITUATION"];
  const [value, setValue] = useState(options[0]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [emergencies, setEmergencies] = useState(null);
  const [veicules, setVeicules] = useState(null);
  const [selectedEmergencies, setSelectedEmergencies] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);


  useEffect(() => {
    const setter = () =>{
        setEmergencies([
            {
              "site_name": "site_2",
              "site_lat": 32.8902554769109,
              "site_lng": -6.90913866808179,
              "niveau_incident": 1
            },
            {
              "site_name": "site_1",
              "site_lat": 32.896813884209,
              "site_lng": -6.91454600143982,
              "niveau_incident": 3
            },
            {
              "site_name": "site_3",
              "site_lat": 32.8750467525102,
              "site_lng": -6.90055559925955,
              "niveau_incident": 2
            },
            {
              "site_name": "site_4",
              "site_lat": 32.8890302261195,
              "site_lng": -6.90785120775846,
              "niveau_incident": 2
            },
            {
              "site_name": "site_5",
              "site_lat": 32.886579673706,
              "site_lng": -6.91128443528736,
              "niveau_incident": 3
            },
            {
              "site_name": "site_6",
              "site_lat": 32.8814897787504,
              "site_lng": -6.9197224001128,
              "niveau_incident": 3
            },
            {
              "site_name": "site_7",
              "site_lat": 32.8762998518699,
              "site_lng": -6.92967875994663,
              "niveau_incident": 1
            },
            {
              "site_name": "site_8",
              "site_lat": 32.8765881891131,
              "site_lng": -6.89663394498097,
              "niveau_incident": 2
            },
            {
              "site_name": "site_9",
              "site_lat": 32.8875443093534,
              "site_lng": -6.92109569112438,
              "niveau_incident": 3
            },
            {
              "site_name": "site_10",
              "site_lat": 32.8706770881744,
              "site_lng": -6.91568835776636,
              "niveau_incident": 1
            },
            {
              "site_name": "site_11",
              "site_lat": 32.8799039999999,
              "site_lng": -6.90736278100878,
              "niveau_incident": 3
            },
            {
              "site_name": "site_12",
              "site_lat": 32.8761556828965,
              "site_lng": -6.904358706921,
              "niveau_incident": 2
            },
            {
              "site_name": "site_13",
              "site_lat": 32.8772369444814,
              "site_lng": -6.9307087282053,
              "niveau_incident": 2
            },
            {
              "site_name": "site_14",
              "site_lat": 32.8937404738638,
              "site_lng": -6.93495614667168,
              "niveau_incident": 3
            },
            {
              "site_name": "site_15",
              "site_lat": 32.9004427528507,
              "site_lng": -6.91710336352141,
              "niveau_incident": 1
            },
            {
              "site_name": "site_16",
              "site_lat": 32.8986295105217,
              "site_lng": -6.90868060804814,
              "niveau_incident": 2
            },
            {
              "site_name": "site_17",
              "site_lat": 32.8860890928569,
              "site_lng": -6.91211383557701,
              "niveau_incident": 2
            },
            {
              "site_name": "site_18",
              "site_lat": 32.8870260819698,
              "site_lng": -6.91074054456545,
              "niveau_incident": 3
            },
            {
              "site_name": "site_19",
              "site_lat": 32.8875306104652,
              "site_lng": -6.90533321120744,
              "niveau_incident": 3
            },
            {
              "site_name": "site_20",
              "site_lat": 32.8831339084486,
              "site_lng": -6.91314380383568,
              "niveau_incident": 1
            },
            {
              "site_name": "site_21",
              "site_lat": 32.8766941916467,
              "site_lng": -6.91172980738384,
              "niveau_incident": 3
            },
            {
              "site_name": "site_22",
              "site_lat": 32.8802745019586,
              "site_lng": -6.93564262955623,
              "niveau_incident": 1
            },
            {
              "site_name": "site_23",
              "site_lat": 32.8709871362637,
              "site_lng": -6.92970024120292,
              "niveau_incident": 2
            },
            {
              "site_name": "site_24",
              "site_lat": 32.8921053944333,
              "site_lng": -6.89066150447545,
              "niveau_incident": 3
            },
            {
              "site_name": "site_25",
              "site_lat": 32.8982845902668,
              "site_lng": -6.90089343142902,
              "niveau_incident": 1
            },
            {
              "site_name": "site_26",
              "site_lat": 32.9006305890864,
              "site_lng": -6.90770159820897,
              "niveau_incident": 2
            },
            {
              "site_name": "site_27",
              "site_lat": 32.8826209777478,
              "site_lng": -6.89927993525237,
              "niveau_incident": 2
            },
            {
              "site_name": "site_28",
              "site_lat": 32.8733669098222,
              "site_lng": -6.90455331300016,
              "niveau_incident": 3
            },
            {
              "site_name": "site_29",
              "site_lat": 32.8895278485932,
              "site_lng": -6.91328980447011,
              "niveau_incident": 3
            },
            {
              "site_name": "site_30",
              "site_lat": 32.890056582091,
              "site_lng": -6.92241983161108,
              "niveau_incident": 1
            },
            {
              "site_name": "site_31",
              "site_lat": 32.8993749918389,
              "site_lng": -6.913801400833,
              "niveau_incident": 2
            },
            {
              "site_name": "site_32",
              "site_lat": 32.8990776109097,
              "site_lng": -6.92753579510575,
              "niveau_incident": 3
            },
            {
              "site_name": "site_33",
              "site_lat": 32.9013244641579,
              "site_lng": -6.93143179806075,
              "niveau_incident": 1
            },
            {
              "site_name": "site_34",
              "site_lat": 32.8947159094597,
              "site_lng": -6.9378464292072,
              "niveau_incident": 3
            },
            {
              "site_name": "site_35",
              "site_lat": 32.8787170539362,
              "site_lng": -6.90694875494994,
              "niveau_incident": 2
            },
            {
              "site_name": "site_36",
              "site_lat": 32.8990472459063,
              "site_lng": -6.93485827524721,
              "niveau_incident": 2
            },
            {
              "site_name": "site_37",
              "site_lat": 32.9027623422764,
              "site_lng": -6.9077683281486,
              "niveau_incident": 3
            },
            {
              "site_name": "site_38",
              "site_lat": 32.8973569292233,
              "site_lng": -6.88334400413898,
              "niveau_incident": 1
            },
            {
              "site_name": "site_39",
              "site_lat": 32.8713283138162,
              "site_lng": -6.90448299109607,
              "niveau_incident": 2
            },
            {
              "site_name": "site_40",
              "site_lat": 32.8847058590558,
              "site_lng": -6.90873069961581,
              "niveau_incident": 2
            },
            {
              "site_name": "site_41",
              "site_lat": 32.8706036391096,
              "site_lng": -6.89612031493356,
              "niveau_incident": 3
            },
            {
              "site_name": "site_42",
              "site_lat": 32.8623530791636,
              "site_lng": -6.90587677043856,
              "niveau_incident": 3
            },
            {
              "site_name": "site_43",
              "site_lat": 32.8709938492487,
              "site_lng": -6.92200478876143,
              "niveau_incident": 1
            },
            {
              "site_name": "site_44",
              "site_lat": 32.8842227973839,
              "site_lng": -6.92626709642581,
              "niveau_incident": 3
            },
            {
              "site_name": "site_45",
              "site_lat": 32.8931679529431,
              "site_lng": -6.89517254259459,
              "niveau_incident": 1
            },
            {
              "site_name": "site_46",
              "site_lat": 32.9029480704667,
              "site_lng": -6.90094677136187,
              "niveau_incident": 2
            },
            {
              "site_name": "site_47",
              "site_lat": 32.8814866179216,
              "site_lng": -6.9151874744496,
              "niveau_incident": 3
            },
            {
              "site_name": "site_48",
              "site_lat": 32.8797060794261,
              "site_lng": -6.92124272002319,
              "niveau_incident": 1
            },
            {
              "site_name": "site_49",
              "site_lat": 32.8896498906843,
              "site_lng": -6.91045252754396,
              "niveau_incident": 2
            },
            {
              "site_name": "site_50",
              "site_lat": 32.8755077372625,
              "site_lng": -6.90441384817005,
              "niveau_incident": 2
            }
          ]);
    }
    setter();
}, []);


  const coordonates = "Latitude:"+latitude+"-"+"Longitude:"+longitude;
  function Setter(){
    setLongitude(localStorage.getItem("Longitude"));
    setLatitude(localStorage.getItem("Latitude"));
  }

  useEffect(() => {
    Setter();
  }, [])

  const handleClick = () => {
    Setter();
    setHidden(!hidden);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.current.show({ severity: 'success', summary: 'Emergency Submitted !', detail: 'Emercency Submitted with Success', life: 2000 })

  }
  
  const header = (
    <div className="table-header">
        <h5 className="mx-0 my-1">EMERGENCIES</h5>
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
        </span>
    </div>
);


    const leftToolbarTemplate = () => {
    return (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" className="p-button-info mr-2" onClick={()=>{}} />
            <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={()=>{}} disabled={!selectedEmergencies || !selectedEmergencies.length} />
        </React.Fragment>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-info" className="p-button-rounded p-button-info" onClick={() => {}} />
            </React.Fragment>
        );
    }

    const columns = [
        {field: 'site_name', header: 'Site Name'},
        {field: 'site_lat', header: 'Latitude'},
        {field: 'site_lng', header: 'Longitude'},
        {field: 'niveau_incident', header: 'Niveau Incident'}
    ];


    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });


  return (
    <div className="container">
    <Toast ref={toast} />
      <div className="logo">
        <img className="nav_logo" src={logo} alt="RESQ Logo" />
      </div>
      <div className="button-nav mb-5">
        <div className="card flex justify-content-center">
          <SelectButton
          
            value={value}
            onChange={(e) => setValue(e.value)}
            options={options}
          />
        </div>
      </div>

      <div className={`${value === options[1] ? "form hidden " : "form"}`}>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="location" className="col-4 col-form-label">
              Localisation
            </label>
            <div className="col-8">
              <div className="input-group">
                <input
                  id="location"
                  name="location"
                  type="text"
                  required="required"
                  className="form-control"
                  value={coordonates}
                  onChange={(value) => {}}
                />
                <div className="input-group-append">
                  <div className="input-group-text" onClick={handleClick}>
                    <i className="fa fa-location-arrow"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${hidden === true ? "form-group row hidden" : "form-group row "}`}><Map /></div>
          <div className="form-group row">
            <label htmlFor="incidentType" className="col-4 col-form-label">
              Type d'incident
            </label>
            <div className="col-8">
              <select
                id="incidentType"
                name="incidentType"
                className="custom-select"
              >
                <option value="Accident De Route">Accident De Route</option>
                <option value="Incendie">Incendie</option>
                <option value="Crime">Crime</option>
                <option value="Urgence Medicale">Urgence Medicale</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nvUrg" className="col-4 col-form-label">
              Niveau d'urgence
            </label>
            <div className="col-8">
              <select id="nvUrg" name="nvUrg" className="custom-select">
                <option value="Elevé">Elevé</option>
                <option value="Moyen">Moyen</option>
                <option value="Faible">Faible</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className="col-4 col-form-label">
              Description
            </label>
            <div className="col-8">
              <textarea
                id="description"
                name="description"
                cols="40"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-4 col-8">
              <button name="submit" type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        className={`${value === options[1] ? "map " : "map hidden"}`}>
        <div><Map allEmergencies ={emergencies} allVeicules={veicules}/></div>
        <div className="card mt-5">
                <Toolbar className="mb-4 " left={leftToolbarTemplate}></Toolbar>
                <DataTable ref={dt} value={emergencies} selection={selectedEmergencies} onSelectionChange={(e) => setSelectedEmergencies(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} emergencies"
                    globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                    {dynamicColumns}
                    <Column header="Actions" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>
      </div>
    </div>
  );
};

export default Home;

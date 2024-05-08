import React,{useState, useEffect} from "react";
import { IoSearch } from "react-icons/io5";
import './index.css'

const Home = () =>{
    const [drugdata, setDrugdata] = useState()
    const [selectedDrugDetails, setSelectedDrugDetails] = useState(null);
    const handleClick = (index) => {
        const clickedDrug = drugdata?.data?.drugData[index];
        setSelectedDrugDetails(clickedDrug);
      };
    const getDrugsdata = async ()=>{
        const options ={
            method:"post"
        }
        const response = await fetch("https://hidocdr.com/api/hidoc-us/drug/getDrugList", options)
        const data = await response.json()
        setDrugdata(data)
    }
    useEffect(()=>{
        getDrugsdata()
    },[])
    useEffect(() => {
        if (drugdata?.data?.drugData?.length > 0) {
            
            setSelectedDrugDetails(drugdata?.data?.drugData[0]);
        }
    }, [drugdata]);
    return(
        <div>
            <p className="main-heading">Your one-stop Solution for <span className="main-heading-part">MEDICAL LEARNING & UPDATES</span></p>
            <div className='drug-serch-container'>
                <p className="drug-search-heading">Get knowledge of the <span className="main-heading-part">APPROVED DRUGS</span></p>
                <div className="drug-search-input">
                    <input type='text' placeholder='Enter drug type' />
                    <IoSearch />
                </div>
            </div>
            <div className="speciality-container">
                <div className="speciality-description">
                   <p>Dailymed Drug Database: The DailyMed datavase contains 143072 labeling submitted to the Food and Drug Administration (FDA) by companies. DailyMed does not contain a complete listing of labeling for FDA-regulated products (e.g, labeling that is not submitted to the FDA).</p>
                </div>
                <div className="speciality-btn-container">
                    <div className="speciality-btns">
                        <button>Anesthesia</button>
                        <button>Cardiology</button>
                        <button>Critical Care</button>
                    </div>
                    <div className="speciality-btns">
                        <button>Dentistry</button>
                        <button>Dermatology</button>
                        <button>Diabetology</button>
                    </div>
                </div>
            </div>
           <div className="drug-table-container">
                <div className="drug-table-box">
                    <h2>Drug Data</h2>
                    {drugdata?.data?.drugData?.map((drug,index)=>{
                        return <p key={drug.id} onClick={() => handleClick(index)}>{drug.drugName}</p>

                        
                    })}
                </div>
                <div className="drug-table-box">
                    <h2>Drug Details</h2>
                    <h3 className="main-heading-part">{selectedDrugDetails?.drugName}</h3>
                    <p>{selectedDrugDetails?.drugDetails}</p>
                </div>
           </div>

        </div>
    )
}
export default Home
import React,{useState, useEffect} from "react";
import { IoSearch } from "react-icons/io5";
import './index.css'

const Home = () =>{
    const [drugdata, setDrugdata] = useState()
    const [selectedDrugDetails, setSelectedDrugDetails] = useState(null);
    const [formattedDate, setFormattedDate] = useState(null);
    const [speciality, setSpeciality] = useState("Critical Care")
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
        if (drugdata?.data?.exploreMore?.news?.publishedAt) {
            const [month, day, year] = drugdata?.data?.exploreMore?.news?.publishedAt.split("/");
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const monthName = monthNames[parseInt(month, 10) - 1];
            const formattedDate = `${day} ${monthName} ${year}`;
            setFormattedDate(formattedDate)
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
                        <button onClick={()=>{
                            setSpeciality('Anesthesia')
                        }}>Anesthesia</button>
                        <button onClick={()=>{
                            setSpeciality('Cardiology')
                        }}>Cardiology</button>
                        <button onClick={()=>{
                            setSpeciality('Critical Care')
                        }}>Critical Care</button>
                    </div>
                    <div className="speciality-btns">
                        <button onClick={()=>{
                            setSpeciality('Dentistry')
                        }}>Dentistry</button>
                        <button onClick={()=>{
                            setSpeciality('Dermatology')
                        }}>Dermatology</button>
                        <button onClick={()=>{
                            setSpeciality('Diabetology')
                        }}>Diabetology</button>
                    </div>
                </div>
            </div>
           <div className="drug-table-container">
                <div className="drug-table-box">
                    <h2>Drug Data</h2>
                    {drugdata?.data?.drugData?.map((drug,index)=>{
                        return <p key={drug.id} onClick={() => handleClick(index)} className="drug-title">{drug.drugName}</p>

                        
                    })}
                </div>
                <div className="drug-table-box">
                    <h2>Drug Details</h2>
                    <h3 className="main-heading-part">{selectedDrugDetails?.drugName}</h3>
                    <p>{selectedDrugDetails?.drugDetails}</p>
                </div>
           </div>
           <div className="explore-more-container">
              <div className="explore-more-cart1">
                
                <p className="news-title">
                Explore more on Hidoc Dr.
                </p>
                <p className="hash-style">News</p>
                <p className="news-title">{drugdata?.data?.exploreMore?.news?.title}</p>
                <p>{drugdata?.data?.exploreMore?.news?.description}</p>
                <p className="hash-style">{formattedDate}</p>
              </div>
              <div className="explore-more-cart1">
                     <p className="hash-style">{speciality} . 10 Mar 2023</p>
                    <p className="news-title">{drugdata?.data?.exploreMore?.article?.articleTitle}</p>
                    <p>{drugdata?.data?.exploreMore?.survey[0]?.metaDescription}</p>
              </div>
              <div className="explore-more-cart1">
                  <div>
                  <p className="hash-style">{speciality} . 28 Mar 2023</p>
                     <p className="news-title">{drugdata?.data?.exploreMore?.quiz?.metaDescription}</p><hr/>
                     <p className="hash-style">{speciality} . 22 Feb 2023</p>
                     <p className="news-title">A growth hormone deficiency can be diagnosed by a simple blood test.</p>
                    
                  </div>
              </div>
           </div>

        </div>
    )
}
export default Home
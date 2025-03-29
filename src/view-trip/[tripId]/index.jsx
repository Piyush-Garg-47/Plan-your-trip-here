import {React , useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '@/service/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'
import { toast } from 'sonner'
import { Info } from 'lucide-react'
import InfoSection from '../components/InfoSection.jsx' ; 
import Hotels from '../components/Hotels.jsx' ;


const ViewTrip = () => {
    const {tripId} = useParams() ;
    const [trip, setTrip] = useState([]) ; 

    useEffect(()=>{
       tripId && GetTripData() ;
    },[tripId])

    //  use to get imformation from firebase !!


    const GetTripData = async() =>{
           const docRef = doc(db, "AiTrips", tripId);
           const docSnap = await getDoc(docRef);

           if(docSnap.exists()){
            console.log("Document data:", docSnap.data());
            setTrip(docSnap.data()) ;  // set trip data to state
           }else{
            console.log("No such document!");
            toast("No Such Trip Found !!") ; 
           }

    }


  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-60'>
        {/* Imformation Section */}
        <InfoSection trip={trip}/> 

        {/* Recomended Hotels */}
        <Hotels trip={trip}/>

    </div>
  )
}

export default ViewTrip
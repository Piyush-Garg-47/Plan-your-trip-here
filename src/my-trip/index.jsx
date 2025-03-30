import { collection, query } from 'firebase/firestore';
import React from 'react'
import { getDocs, where } from 'firebase/firestore';
import { useEffect , useState} from 'react';
import { db } from "../service/firebaseConfig";
import UserTripCardItem from './components/UserTripCardItem';


const MyTrips = () => {

    const [userTrips , setUserTrips] =useState([]) ;

    useEffect(() => {
     GetUserTrips() ; 
    }, []) 
    

    const GetUserTrips=async() =>{
        const user = JSON.parse(localStorage.getItem('user')) ; 
        if(!user){
            window.location.href = '/' ;
        }
         setUserTrips([]) ;
        const q = query(collection(db , 'AiTrips') , where('userEmail' , '==' , user?.email)) ;
        const querySnapshot = await getDocs(q) ;
        querySnapshot.forEach((doc) => {
            console.log(doc.id , '=>' , doc.data()) ;
            setUserTrips(prev => [...prev , doc.data()]) ;
        })
    }
  return (
    <div className='sm:px-10 md:px-32 lg:56 xl:px-72 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>My Trips</h2>

        <div className='grid grid-cols-2  md:grid-cols-3 gap-5 mt-5'>
            {userTrips.map((trip , index) => (
               < UserTripCardItem trip={trip} />
            ))}
        </div>
    </div>
  )
}

export default MyTrips ;
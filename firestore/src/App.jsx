import { addDoc, collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from './firebase/config'

const App = () => {

  const handleSubmit = async() => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        "username" : "Krishna",
        "email" : "krishna2769@gmail.com",
        "password" : "2769"
      })
      console.log("Document written with id: ", docRef.id);
    } catch (error) {
      console.log(error)
    }
  }

  const handleData = async() => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id)
      console.log(doc.data())
    })
  }

  return (
    <div>
      <button type='button' className='btn btn-primary' onClick={handleSubmit}>Add Data</button>
      <button type='button' className='btn btn-secondary' onClick={handleData}>Get Data</button>
    </div>
  )
}

export default App;
import axios from 'axios'

function App() {
  const PaymentHandler =async()=>{

    let response = await axios.post('http://localhost:3000/payment')
    
    if(response && response.status === 200){
      console.log(response.data);
      window.location.href = response.data.url
      
    }
    
  }

  return (
  <>
 <div style={{marginTop:'-30%',gap:'20px'}}>

 <h1 style={{marginLeft:'90px'}}>PAYMENT INTEGRATION WITH STRIPE </h1>
  <button style={{marginLeft:'40%',gap:'20px'}} onClick={PaymentHandler}>
    Buy Now!
  </button>

 </div>
  </>
  )
}

export default App

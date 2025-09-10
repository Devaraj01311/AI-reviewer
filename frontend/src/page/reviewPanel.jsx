import axios  from "axios";

function ReviewPanel({code, review ,setReview}){
     async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:7000/ai/get-review', { code })
      console.log("Backend Response:", response.data)
      setReview(response.data.review)  
    } catch (err) {
      console.error(" Error fetching review:", err)
      setReview(" Failed to fetch review. Check backend logs.")
    }
  }

  return(
    <div onClick={reviewCode}  className='review'>Review</div>
  )
}

export default ReviewPanel;
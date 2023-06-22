import starImg from '../../assets/icon-star.svg'
import { RatingBtn, useRating } from '../../utils/useRating'
import {useNavigate} from 'react-router-dom'
import { container, item } from '../../utils/motion'
import { motion } from 'framer-motion'

function Rating() {
  const [rating, handleRatingClick] = useRating()
  const isSubmitDisable = rating === 0
  const Navigate = useNavigate()
  const handleRatingSubmit = () => {
    if (!isSubmitDisable) {
      Navigate('/thanks')
    }
  };
  return (
    <motion.div variants={container} initial='hidden' animate='visible'>
    <div className="card">
      <div className="star-icon">
        <img width={30} src={starImg} alt="icon" />
      </div>
      <div  className="card-title">
        <h1 className='text-[30px] font-bold'> How did we do?</h1>
      </div>
      <div className="card-description">
        <p className='text-[16px] text-gray-400'>
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>
      </div>
      <motion.div variants={item} className="card-rating">
        {
          [1,2,3,4,5].map((index)=>(
            <RatingBtn
            key={index}
            value={index}
            selected = {index === rating}
            onClick={()=> handleRatingClick(index)}
            />
          ))
        }
      </motion.div>
      <div>
        <button onClick={handleRatingSubmit} disabled={isSubmitDisable} className='submit-btn'>SUBMIT</button>
      </div>
    </div>
    </motion.div>
  )
}

export default Rating
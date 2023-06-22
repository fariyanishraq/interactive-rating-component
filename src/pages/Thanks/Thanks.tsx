import  { useEffect, useState } from 'react';
import ThankIcon from '../../assets/illustration-thank-you.svg'
import { Link, useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { container, item } from '../../utils/motion';


const Thanks = () => {
  const [rating, setRating] = useState<number>(0);
  const Navigate = useNavigate()

  useEffect(() => {
    const storedRating = localStorage.getItem('rating');
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, []);

  return (
    <motion.div variants={container} initial='hidden' animate='visible'>
      <Link className='ml-[10px]' to='/'>
        <IconArrowLeft strokeWidth={1} color='white' size={30}/>
      </Link>
      <div className="thanks-card">
        <motion.div variants={item} className="thanks-icon">
          <img width={100} src={ThankIcon} alt="icon" />
        </motion.div>
        <motion.div variants={item} className='w-full flex justify-center'>
        <h1 className='numOfRating'> You selected {rating} out of 5</h1>
        </motion.div>
        <motion.div variants={item} className="thanks-card-title">
          <h1 className='text-[25px] font-medium'>Thank you!</h1>
        </motion.div>
        <motion.div variants={item} className="thanks-card-description">
          <p className='text-[14px] text-gray-400'>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Thanks;
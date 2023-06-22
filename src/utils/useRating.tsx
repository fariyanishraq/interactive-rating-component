import { useEffect, useState } from "react";


type RatingButtonProps={
    value: number;
    selected: boolean;
    onClick: () => void;
}

export function RatingBtn({value, selected, onClick}:RatingButtonProps){
    return(
        <button
        className={selected?'rating-btn-active':'rating-btn'}
        onClick={onClick}
        >
            {value}
        </button>
    )
}

export const useRating = (): [number, (value: number)=> void] =>{
    const [rating, setRating] = useState<number>(0)
    useEffect(()=>{
        const storageRating = localStorage.getItem('rating')
        if(storageRating){
            setRating(Number(storageRating))
        }
    },[])
    const handleRatingClick = (selectedRating: number) =>{
        if (selectedRating === rating) {
            setRating(0); // Deselect the rating button if clicked again
            localStorage.removeItem('rating');
        } else {
            setRating(selectedRating);
            localStorage.setItem('rating', String(selectedRating));
        }
    }

    return [rating, handleRatingClick]
}
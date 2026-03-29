import { ItemRating } from "@/global-types/shop/shop-types";
import Styles from './rating.module.css';

interface Props {
    rating: ItemRating;
}

export default function Rating(props: Props) {

    return(
        <div className="flex items-center gap-1">
            <span>{props.rating.rate}</span>
            {
                [...Array(5)].map((_, index) => {
                    const fill = Math.min(Math.max(props.rating.rate - index, 0), 1);
                    
                    return (
                        <span key={index} className={`${Styles.star} relative w-3 h-3`}
                        style={{'--star-fill': `${fill * 100}%`} as React.CSSProperties}/>
                    )
                })
            }
            <small className="italic">({props.rating.count})</small>            
        </div>
    )
}
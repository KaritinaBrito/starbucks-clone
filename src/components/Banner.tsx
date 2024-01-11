import { Link } from 'react-router-dom';
import '../Styles/Banner.css';
import {BannerType} from '../models/Banner';



const Banner = ({image, title, description, phrase, phraseText, side, background, button, buttonText, buttonStyle}: BannerType) => {
    return(
        <>
            <section className='container banner-container' style={{background:`${background}`}}>
                <div className={`banner-container__img ${side}`}>
                    <img src={image} alt="" />
                </div>
                <div className={`banner-container__text ${side}`}>
                    <h2 style={{color: `${buttonStyle}`}}>{title}</h2>
                    <p style={{color: `${buttonStyle}`}}>{description}</p>
                    <strong>
                        <p className={`phrase ${phrase}`}>{phraseText}</p>
                    </strong>
                    <div className={`banner-container__btn ${button}`} style={{border: `1px solid ${buttonStyle}`}}>
                        <Link to={'/*'} style={{color: `${buttonStyle}`}}>{buttonText}</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;
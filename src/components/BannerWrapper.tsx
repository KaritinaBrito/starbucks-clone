import { Link } from 'react-router-dom'
import '../Styles/BannerWrapper.css'
import { BannerWrap } from '../models/BannerWrap'

const BannerWrapper = ({image, title, button, background}: BannerWrap) => {
    return (
        <>
            <section className='container bannerWrapper-container' style={{background:`${background}`}}>
                <div className='bannerWrapper-container__img'>
                    <img src={image} alt="Banner Noticias" />
                </div>
                <div className='bannerWrapper-container__text'>
                    <p>{title}</p>
                    <Link to={'/*'} >{button}</Link>
                </div>
            </section>
        </>
    )
}

export default BannerWrapper
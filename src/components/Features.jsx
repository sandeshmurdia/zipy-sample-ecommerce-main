import { ReactComponent as TruckSvg } from '../images/truck.svg';
import { ReactComponent as UniversitySvg } from '../images/university.svg';
import { ReactComponent as LockSvg } from '../images/lock.svg';


function Features () {
    return (
        <div className="container">
            <section id="features">
                
                <div className="features-item">
                    <div className='features-svg'> <TruckSvg/> </div>
                    <h3>Fast delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodconsectetur adipisicing elit, sed do eiusmod</p>
                </div>
                <div className="features-item">
                    <div className='features-svg'> <UniversitySvg/> </div>
                    <h3>Creative Strategy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodconsectetur adipisicing elit, sed do eiusmod</p>
                </div>
                <div className="features-item">
                    <div className='features-svg'> <LockSvg/> </div>
                    <h3>High secured</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodconsectetur adipisicing elit, sed do eiusmod</p>
                </div>
                
            </section>
        </div>
    )
}

export default Features;
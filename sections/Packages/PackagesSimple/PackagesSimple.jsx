import Card from './Card/Card';

// Images
import PackageImg1 from '../../../assets/images/packages/1.jpg';
import PackageImg2 from '../../../assets/images/packages/2.jpg';
import PackageImg3 from '../../../assets/images/packages/3.jpg';
import PackageImg4 from '../../../assets/images/packages/4.jpg';
import PackageImg5 from '../../../assets/images/packages/5.jpg';

function PackagesSimple() {
    return (
        <section className='py-20 bg-slate-100'>
            <div className="container mx-auto px-10">
                <Card imageUrl={PackageImg1} name="Family Package 12 Night/13 Days" rating={4} tickets="5" />
                <Card imageUrl={PackageImg2} name="Family Package 12 Night/13 Days" rating={5} tickets="28" />
                <Card imageUrl={PackageImg3} name="Family Package 12 Night/13 Days" rating={3} tickets="15" />
                <Card imageUrl={PackageImg4} name="Family Package 12 Night/13 Days" rating={5} tickets="18" />
                <Card imageUrl={PackageImg5} name="Family Package 12 Night/13 Days" rating={5} tickets="24" />
            </div>
        </section>
    )
}

export default PackagesSimple
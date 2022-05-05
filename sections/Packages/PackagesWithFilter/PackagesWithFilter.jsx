import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// Images
import PackageImg1 from '../../../assets/images/packages/1.jpg';
import PackageImg2 from '../../../assets/images/packages/2.jpg';
import PackageImg3 from '../../../assets/images/packages/3.jpg';
import PackageImg4 from '../../../assets/images/packages/4.jpg';
import PackageImg5 from '../../../assets/images/packages/5.jpg';

import Card from './Card/Card';
import SuggestCard from './Card/SuggestCard';

function PackagesWithFilter() {

    const [mount, setMount] = useState(false);
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    useEffect(() => {
        setMount(true);
    }, []);

    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className={`${mount && isTablet ? 'block' : 'flex'} `}>
                    <div className={`${mount && isTablet ? 'block w-full' : 'flex-none w-80'}`}>
                        <div className="p-4">
                            <div className="card bg-white shadow-lg p-4 mb-2">
                                <div className="text-center border-b border-slate-200 pb-2">
                                    <h3 className='text-lg font-bold'>Suggesting Packages</h3>
                                </div>
                                <SuggestCard imageUrl={PackageImg1} name="Bali, Indonesia" rate="4.2" />
                                <SuggestCard imageUrl={PackageImg2} name="Bali, Indonesia" rate="4.7" />
                                <SuggestCard imageUrl={PackageImg3} name="Bali, Indonesia" rate="4.9" />
                                <SuggestCard imageUrl={PackageImg4} name="Bali, Indonesia" rate="4.2" />
                                <SuggestCard imageUrl={PackageImg5} name="Bali, Indonesia" rate="3.9" />
                                <SuggestCard imageUrl={PackageImg1} name="Bali, Indonesia" rate="3.8" />
                            </div>
                        </div>
                    </div>
                    <div className={`${mount && isTablet ? 'block' : 'flex-1'}`}>
                        <div className='p-4'>
                            <Card imageUrl={PackageImg1} name="Swiss, Paris & Italy" price="650" />
                            <Card imageUrl={PackageImg2} name="Swiss, Paris & Italy" price="650" />
                            <Card imageUrl={PackageImg3} name="Swiss, Paris & Italy" price="650" />
                            <Card imageUrl={PackageImg4} name="Swiss, Paris & Italy" price="650" />
                            <Card imageUrl={PackageImg5} name="Swiss, Paris & Italy" price="650" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackagesWithFilter
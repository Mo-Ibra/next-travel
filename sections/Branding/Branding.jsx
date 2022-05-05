// Images
import PackageImg1 from '../../assets/images/packages/1.jpg';
import PackageImg2 from '../../assets/images/packages/2.jpg';
import PackageImg3 from '../../assets/images/packages/3.jpg';
import PackageImg4 from '../../assets/images/packages/4.jpg';
import PackageImg5 from '../../assets/images/packages/5.jpg';

import HotelImg1 from '../../assets/images/hotels/1.jpg';
import HotelImg2 from '../../assets/images/hotels/2.jpg';
import HotelImg3 from '../../assets/images/hotels/3.jpg';
import HotelImg4 from '../../assets/images/hotels/4.jpg';


import Card from './Card/Card';

function Branding() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className='bg-white shadow-lg border border-slate-200 pb-5'>
                        <div className="text-center bg-gray-900 text-white p-4 w-full mb-5">
                            <h2 className='text-lg font-bold'>Top Branding <span className='text-red-500'>Hotels</span></h2>
                        </div>
                        <Card imageUrl={HotelImg1} name="Taaj Club House" rate="5.0" />
                        <Card imageUrl={HotelImg2} name="Taaj Club House" rate="4.9" />
                        <Card imageUrl={HotelImg3} name="Taaj Club House" rate="4.5" />
                        <Card imageUrl={HotelImg4} name="Taaj Club House" rate="4.4" />
                        <Card imageUrl={HotelImg1} name="Taaj Club House" rate="3.9" />
                    </div>
                    <div className='bg-white shadow-lg border border-slate-200 pb-5'>
                        <div className="text-center bg-gray-900 text-white p-4 w-full mb-5">
                            <h2 className='text-lg font-bold'>Top Branding <span className='text-red-500'>Packages</span></h2>
                        </div>
                        <Card imageUrl={PackageImg1} name="Taaj Club House" rate="5.0" />
                        <Card imageUrl={PackageImg2} name="Taaj Club House" rate="4.9" />
                        <Card imageUrl={PackageImg3} name="Taaj Club House" rate="4.8" />
                        <Card imageUrl={PackageImg4} name="Taaj Club House" rate="3.8" />
                        <Card imageUrl={PackageImg5} name="Taaj Club House" rate="2.9" />
                    </div>
                    <div className='bg-white shadow-lg border border-slate-200 pb-5'>
                        <div className="text-center bg-gray-900 text-white p-4 w-full mb-5">
                            <h2 className='text-lg font-bold'>Top Branding <span className='text-red-500'>Reviews</span></h2>
                        </div>
                        <Card imageUrl={PackageImg5} name="Taaj Club House" rate="5.0" />
                        <Card imageUrl={PackageImg1} name="Taaj Club House" rate="4.6" />
                        <Card imageUrl={PackageImg2} name="Taaj Club House" rate="4.2" />
                        <Card imageUrl={PackageImg4} name="Taaj Club House" rate="4.1" />
                        <Card imageUrl={PackageImg3} name="Taaj Club House" rate="4.0" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Branding
import Card from './Card/Card';

// Images
import PackageImg1 from '../../../assets/images/packages/1.jpg';
import PackageImg2 from '../../../assets/images/packages/2.jpg';
import PackageImg3 from '../../../assets/images/packages/3.jpg';
import PackageImg4 from '../../../assets/images/packages/4.jpg';
import PackageImg5 from '../../../assets/images/packages/5.jpg';
import PackageImg6 from '../../../assets/images/packages/6.jpg';

function PackagesGrid() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card imageUrl={PackageImg1}
                        title="Sunset view of beautiful lakeside resident"
                        review="25"
                        rate={5}
                    />
                    <Card imageUrl={PackageImg2}
                        title="Sunset view of beautiful lakeside resident"
                        review="19"
                        rate={4}
                    />
                    <Card imageUrl={PackageImg3}
                        title="Sunset view of beautiful lakeside resident"
                        review="08"
                        rate={2}
                    />
                    <Card imageUrl={PackageImg4}
                        title="Sunset view of beautiful lakeside resident"
                        review="23"
                        rate={3}
                    />
                    <Card imageUrl={PackageImg5}
                        title="Sunset view of beautiful lakeside resident"
                        review="32"
                        rate={4}
                    />
                    <Card imageUrl={PackageImg6}
                        title="Sunset view of beautiful lakeside resident"
                        review="25"
                        rate={5}
                    />
                </div>
            </div>
        </section>
    )
}

export default PackagesGrid
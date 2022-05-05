import React from 'react';
import styles from './news.module.scss';
import { BsFillCursorFill } from 'react-icons/bs';

function News() {
    return (
        <section className='py-20' id='news'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className={`${styles.newsCard} ${styles.orange} bg-white shadow-2xl rounded-sm p-8 cursor-pointer hover:text-white relative`}>
                        <div className={`${styles.newsBadge} absolute top-0 left-0 p-2 text-white text-sm font-semibold rounded-br-lg`}>
                            30 April, 2019
                        </div>
                        <div className="my-10">
                            <span className='text-orange-500 text-sm my-2'>BY LAYERDROPS</span>
                            <h3 className='text-2xl font-semibold text-gray-700 my-2'>Pre launch mobile app marketing pitfalls</h3>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500 text-lg my-2'>
                                There are many variations of passages of but majority have in some by inject.
                            </p>
                            <BsFillCursorFill className='my-5 text-gray-500 text-2xl' />
                        </div>
                    </div>
                    <div className={`${styles.newsCard} ${styles.blue} bg-white shadow-2xl rounded-sm p-8 cursor-pointer hover:text-white relative`}>
                        <div className={`${styles.newsBadge} absolute top-0 left-0 p-2 text-white text-sm font-semibold rounded-br-lg`}>
                            30 April, 2019
                        </div>
                        <div className="my-10">
                            <span className='text-orange-500 text-sm my-2'>BY LAYERDROPS</span>
                            <h3 className='text-2xl font-semibold text-gray-700 my-2'>Pre launch mobile app marketing pitfalls</h3>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500 text-lg my-2'>
                                There are many variations of passages of but majority have in some by inject.
                            </p>
                            <BsFillCursorFill className='my-5 text-gray-500 text-2xl' />
                        </div>
                    </div>
                    <div className={`${styles.newsCard} ${styles.red} bg-white shadow-2xl rounded-sm p-8 cursor-pointer hover:text-white relative`}>
                        <div className={`${styles.newsBadge} absolute top-0 left-0 p-2 text-white text-sm font-semibold rounded-br-lg`}>
                            30 April, 2019
                        </div>
                        <div className="my-10">
                            <span className='text-orange-500 text-sm my-2'>BY LAYERDROPS</span>
                            <h3 className='text-2xl font-semibold text-gray-700 my-2'>Pre launch mobile app marketing pitfalls</h3>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500 text-lg my-2'>
                                There are many variations of passages of but majority have in some by inject.
                            </p>
                            <BsFillCursorFill className='my-5 text-gray-500 text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
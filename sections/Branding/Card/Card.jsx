import Image from "next/image"

function Card({imageUrl, name, rate}) {
    return (
        <div className="flex justify-between items-center px-4 py-2">
            <div className='w-1/4'>
                <Image src={imageUrl} alt="Package" className='rounded-md' />
            </div>
            <div>
                <h3 className='text-lg font-bold text-gray-700'>{name}</h3>
                <span className='text-sm text-gray-500'>City: illunois, United States</span>
            </div>
            <div>
                <h3 className='p-2 border border-slate-300 font-bold text-gray-700'>{rate}</h3>
            </div>
        </div>
    )
}

export default Card
import Image from 'next/image';

import gold from '../../assets/medal-gold.svg';
import cooper from '../../assets/medal-cooper.svg';
import silver from '../../assets/medal-silver.svg';

export function Ranking() {
    return (
        <div className='w-full max-w-[440px] space-y-5'>
                <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>
                    Ranking de indicações
                </h2>

                <div className='space-y-4'>
                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                        <span className='text-sm text-gray-300 leading-none'>
                            <span className='font-semibold'>1º</span> | Débora Guimarães
                        </span>

                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                            1042
                        </span>

                        <Image src={gold} alt='gold'className='absolute top-0 right-8'/>
                    </div>

                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                        <span className='text-sm text-gray-300 leading-none'>
                            <span className='font-semibold'>2º</span> | Débora Guimarães
                        </span>

                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                            1042
                        </span>

                        <Image src={silver} alt='silver'className='absolute top-0 right-8'/>
                    </div>

                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                        <span className='text-sm text-gray-300 leading-none'>
                            <span className='font-semibold'>3º</span> | Débora Guimarães
                        </span>

                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                            1042
                        </span>

                        <Image src={cooper} alt='cooper'className='absolute top-0 right-8'/>
                    </div>
                </div>
            </div>

)
}

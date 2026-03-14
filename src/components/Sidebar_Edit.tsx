import { BotMessageSquare } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Paintbrush } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { Goal } from 'lucide-react';
import Link from 'next/link';

export const Sidebar_Edit = () => {
    return (
        <div className=" flex flex-col items-center border-r border-gray-300 px-5 py-10 gap-10">
            <Link href="" className=' flex flex-col items-center gap-2'>
                <BotMessageSquare size={40} />
                <p className=' text font-semibold'>Personnel</p>
            </Link>

            <Link href="" className=' flex flex-col items-center gap-2'>
                <GraduationCap size={40} />
                <p className=' text font-semibold'>Knowledge</p>
            </Link>

            <Link href="" className=' flex flex-col items-center gap-2'>
                <Goal size={40} />
                <p className=' text font-semibold'>Action</p>
            </Link>

            <Link href="" className=' flex flex-col items-center gap-2'>
                <Paintbrush size={40} />
                <p className=' text font-semibold'>Appearance</p>
            </Link>

            <Link href="" className=' flex flex-col items-center gap-2'>
                <Rocket size={40} />
                <p className=' text font-semibold'>Share</p>
            </Link>

        </div>
    )
}
import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';
import router from 'next/router';
import Dropdown from './Dropdown';
import { useSession } from 'next-auth/react';


const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  const {data: session} = useSession()
  return (
	<Collapsible.Root className={open ? "w-full h-screen flex flex-col  bg-black/40 backdrop-blur-sm ": "w-full flex flex-row justify-end "} open={open} onOpenChange={setOpen}>
		<Collapsible.Trigger asChild>
			<button className="flex items-end justify-end z-10 right-0 pr-5 pt-8">{open ? <Cross2Icon className="h-7 w-7"/> : <HamburgerMenuIcon className="h-7 w-7"/>}</button>
		</Collapsible.Trigger>
		<div className="flex flex-col justify-around absolute  items-center w-full -z-10  mt-10 h-full">
			<Collapsible.Content className=" mt-8  flex flex-col justify-start gap-4 items-center">
				<div onClick={() => router.push('/app/explore')}  className="bg-white/20 hover:bg-white/40 cursor-pointer border-2 rounded-lg p-1 w-32 flex flex-row items-center justify-center">
					<span className="">Explore</span>
				</div>
				<div className="bg-white/20 hover:bg-white/40 border-2  rounded-lg p-1 w-32 flex flex-row cursor-pointer items-center justify-center">
					<span className="">About</span>
				</div>
				<div  className="bg-white/20 hover:bg-white/40 border-2 cursor-pointer rounded-lg p-1 w-32 flex flex-row items-center justify-center">
					<span className="">Contact</span>
				</div>
			</Collapsible.Content>
			<Collapsible.Content>
				{!session ? 
					<div onClick={() => router.push('/app/signin')} className="border-2 bg-white text-black cursor-pointer rounded-lg w-32 flex flex-row items-center justify-center pt-1.5 pb-1.5">
						Signin
					</div>:
					<Dropdown />
				}
			</Collapsible.Content>
		</div>

	</Collapsible.Root>
  );
};

export default CollapsibleDemo;
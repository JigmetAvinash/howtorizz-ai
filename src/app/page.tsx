import Link from "next/link";


export default function Home() {
  return (
		<body>
			<div className="grid grid-rows-[0px_2fr_5px] items-center justify-items-center min-h-screen p-4 pb-2 gap-6 sm:p-20">
				<h1 className="text-6xl">AI HowToRizz : Rizz App</h1>
				<h2>
					Try this ultimate Rizz App powered by GPT-4o and Fine Tuned just for
					providing you with the most rizzful replies !
				</h2>
				<Link href="/app">
					<button className=" rounded-md bg-slate-800 ">
						<h3 className="text-3xl text-white p-3 pl-8 pr-8">Continue</h3>
					</button>
				</Link>
				<iframe
					width="900px"
					height="450px"
					className="pt-12"
					src="https://www.youtube.com/embed/8-rXPuu3vwU"
					title="&#39;One Nation One Subscription&#39; comes into effect today | DD India"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
		</body>
	);
}

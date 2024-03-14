import Home from '@/app/(user)/(Home)/Home';
import GetStarted from '@/app/(user)/GetStarted';
import AboutUs from '@/app/(user)/AboutUs';
export default function Page() {
	return (
		<>
			<div>
				<Home />
				<AboutUs />
				<GetStarted />
			</div>
		</>
	);
}

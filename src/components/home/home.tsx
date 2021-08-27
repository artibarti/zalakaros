import { Button } from "react-bootstrap";
import { HomeContainer, HomePanel } from "./home-container";

export function Home() {

    const bookingPanel = (
		<HomePanel id="booking" className="bg-info text-center">
			<div className="display-1 py-5 text-center">Book your stay now</div>
			<Button variant="dark">Go to booking</Button>
			<div className="h2 py-5 text-center">Maybe some slideshow in the background</div>
		</HomePanel>
	);

	const activitiesPanel = (
		<HomePanel id="activities" className="bg-light text-center">
			<div className="display-1 py-5">What to do here and nearby?</div>
			<div className="h1 py-3">Some fancy stuff goes here</div>
		</HomePanel>
	);

	const contactPanel = (
		<HomePanel id="contact" className="bg-warning text-center">
			<div className="display-2 py-5">Contact us</div>
			<div className="h4 py-3">Some messenger plugin, contact info goes here</div>
			<Button variant="dark" size="lg">Text us</Button>
		</HomePanel>
	);

    return (
        <HomeContainer>
            {bookingPanel}
			{activitiesPanel}
			{contactPanel}
        </HomeContainer>
    );
}

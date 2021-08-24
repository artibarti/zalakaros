import { Button, Container, Row } from "react-bootstrap";

export function Home() {

	const bookingPanel = (
		<HomePagePanelContainer id="booking" className="bg-info text-center">
			<div className="h2 py-5 text-center">Book your stay now</div>
			<Button variant="dark">Go to booking</Button>
			<div className="h3 py-5 text-center">Maybe some slideshow in the background</div>
		</HomePagePanelContainer>
	);

	const activitiesPanel = (
		<HomePagePanelContainer id="activities" className="bg-light text-center">
			<div className="h2 py-5">What to do here and nearby?</div>
			<div className="h4 py-3">Some fancy stuff goes here</div>
		</HomePagePanelContainer>
	);

	const contactPanel = (
		<HomePagePanelContainer id="contact" className="bg-warning text-center">
			<div className="h2 py-5">Contact us</div>
			<div className="h4 py-3">Some messenger plugin, contact info goes here</div>
			<Button variant="dark" size="lg">Text us</Button>
		</HomePagePanelContainer>
	);

	return (
		<Container fluid>
			{bookingPanel}
			{activitiesPanel}
			{contactPanel}
		</Container>
	);
}

interface HomePagePanelContainerProps {
	children: React.ReactNode,
	id: string,
	className: string,
};

function HomePagePanelContainer(props: HomePagePanelContainerProps & any) {
	return (
		<Row className={props.className + " p-5"}>
			<Container id={props.id} fluid>
				{props.children}
			</Container>
		</Row>
	);
}
import { Button } from "react-bootstrap";
import { Trans } from "react-i18next";
import { HomeContainer, HomePanel } from "./home-container";

export function Home() {

	const panelTitle = (i18nKey: string, defaultText: string) => {
		return (<div className="display-1 py-5 text-center">
			<Trans i18nKey={i18nKey}>{defaultText}</Trans>
		</div>);
	};

	const bookingPanel = (
		<HomePanel id="booking" className="zk-bg-primary text-center text-light">
			{panelTitle("home.booking-panel.book-your-stay-now", "Book your stay now")}
			<Button variant="light" size="lg" className="zk-bg-secondary text-light">
				<Trans i18nKey="home.booking-panel.go-to-booking">Go to Booking</Trans>
			</Button>
		</HomePanel>
	);

	const activitiesPanel = (
		<HomePanel id="activities" className="bg-light text-center">
			{panelTitle("home.activities-panel.what-to-do", "What to do here and nearby?")}
		</HomePanel>
	);

	const contactPanel = (
		<HomePanel id="contact" className="zk-bg-secondary text-center">
			{panelTitle("home.contact-panel.do-you-have-questions", "Do you have questions?")}
			<Button variant="dark" size="lg">
				<Trans i18nKey="home.contact-panel.contact-us">Contact us</Trans>
			</Button>
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

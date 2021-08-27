import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import { LocaleDefinition, locales } from "../i18n";

export interface AppNavBarProps {
	onChangeLanguage: (countryCode: string) => void;
};

export function AppNavbar(props: AppNavBarProps) {

	const { t } = useTranslation();

	const createLanguageSelectionMenuItem = (locale: LocaleDefinition) => {
		return (
			<NavDropdown.Item onClick={() => props.onChangeLanguage(locale.countryCode)}>
				{locale.displayedCountryCode}
			</NavDropdown.Item>
		);
	}

	return (
		<Navbar id="app-navbar" fixed="top" collapseOnSelect expand="lg" className="zk-bg-primary" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Zalakaros</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#booking"><Trans i18nKey="nav-bar.booking">Bookindg</Trans></Nav.Link>
						<Nav.Link href="#activities"><Trans i18nKey="nav-bar.activities">Activities</Trans></Nav.Link>
						<Nav.Link href="#contact"><Trans i18nKey="nav-bar.contact">Contact</Trans></Nav.Link>
					</Nav>
					<Nav>
						<NavDropdown title={t("nav-bar.language", "Language")} id="collasible-nav-dropdown">
							{locales.map(locale => createLanguageSelectionMenuItem(locale))}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

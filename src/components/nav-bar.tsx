import { Container, Nav, Navbar } from "react-bootstrap"

export function AppNavbar() {
	return (
		<Navbar id="app-navbar" fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">Zalakaros</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#booking">Booking</Nav.Link>
						<Nav.Link href="#activities">Activities</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

import { Container, Row } from "react-bootstrap";

interface HomePanelProps {
	children: React.ReactNode,
	id: string,
	className: string,
};

export function HomePanel(props: HomePanelProps) {
	return (
		<Row className={props.className + " p-5"} style={{ minHeight: "100vh" }}>
			<Container id={props.id} fluid>
				{props.children}
			</Container>
		</Row>
	);
}

export interface HomeContainerProps {
	children: React.ReactElement<typeof HomePanel>[] | React.ReactElement<typeof HomePanel>,
};

export function HomeContainer(props: HomeContainerProps) {
	return (
		<Container fluid>
			{props.children}
		</Container>
	);
}

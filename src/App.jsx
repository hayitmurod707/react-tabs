import styled from "styled-components";
import Tabs from "./Tabs";
const StyledElement = styled.section`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100%;
`;
const App = () => (
	<StyledElement>
		<Tabs />
	</StyledElement>
);
export default App;

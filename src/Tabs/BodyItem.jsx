import { element } from "prop-types";
import styled from "styled-components";
const StyledElement = styled.div``;
const BodyItem = ({ children }) => {
	return <StyledElement>{children}</StyledElement>;
};
BodyItem.defaultProps = {
	children: <></>,
};
BodyItem.propTypes = {
	children: element.isRequired,
};
export default BodyItem;

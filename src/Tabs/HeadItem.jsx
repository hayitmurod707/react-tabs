import { element, func, number } from "prop-types";
import styled from "styled-components";
const StyledElement = styled.button`
	height: 36px;
	padding: 0 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 18px;
	font-size: 15px;
	user-select: none;
	border: none;
	&[data-active="active"] {
		background-color: blue;
		color: white;
	}
	&[data-active="inactive"] {
		background-color: transparent;
		color: black;
	}
`;
const HeadItem = ({ children, onClick, index, activeTab }) => {
	return (
		<StyledElement
			data-active={index === activeTab ? "active" : "inactive"}
			onClick={() => onClick(index)}
			type="button"
		>
			{children}
		</StyledElement>
	);
};
HeadItem.defaultProps = {
	children: <></>,
	index: 0,
	activeTab: 0,
};
HeadItem.propTypes = {
	children: element.isRequired,
	onClick: func,
	index: number.isRequired,
	activeTab: number,
};
export default HeadItem;

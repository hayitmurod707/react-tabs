import { useState } from "react";
import styled from "styled-components";
import BodyItem from "./BodyItem";
import HeadItem from "./HeadItem";
const Body = styled.div`
	overflow: hidden;
`;
const StyledElement = styled.div`
	max-width: 600px;
	display: flex;
	flex-direction: column;
`;
const Head = styled.div`
	display: flex;
	justify-content: center;
`;
const Tabs = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<StyledElement>
			<Head>
				<HeadItem index={0} activeTab={activeTab} onClick={setActiveTab}>
					Profile
				</HeadItem>
				<HeadItem index={1} activeTab={activeTab} onClick={setActiveTab}>
					Security
				</HeadItem>
				<HeadItem index={2} activeTab={activeTab} onClick={setActiveTab}>
					Settings
				</HeadItem>
				<HeadItem index={3} activeTab={activeTab} onClick={setActiveTab}>
					Chats
				</HeadItem>
			</Head>
			<Body>
				<BodyItem index={0} activeTab={activeTab}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Obcaecati saepe non deleniti accusantium consequatur voluptates
					sapiente in sint harum enim, nisi blanditiis itaque! Sequi id ea
					optio, labore impedit sunt.
				</BodyItem>
				<BodyItem index={1} activeTab={activeTab}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
					placeat, aut nostrum blanditiis rerum quod illo distinctio vero
					nihil dolorum aliquid molestiae dolore commodi fuga aperiam.
					Quidem minima nesciunt cumque?
				</BodyItem>
				<BodyItem index={2} activeTab={activeTab}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
					facere repellat ea ratione iste rerum cumque soluta, culpa,
					quibusdam distinctio, repudiandae sit. Quidem vitae rem suscipit,
					quisquam nobis magnam sed?
				</BodyItem>
				<BodyItem index={3} activeTab={activeTab}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Molestias, nobis distinctio cumque, iure atque libero et in
					consequatur voluptatum mollitia beatae ipsa consequuntur a?
					Voluptates quo dolor porro vero quos.
				</BodyItem>
			</Body>
		</StyledElement>
	);
};
export default Tabs;

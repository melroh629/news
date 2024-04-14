import { styled } from 'styled-components';
import { getImageUrl } from '../apis/data';
export function PressItem() {
	const images = getImageUrl();
	console.log(images);
	return (
		<StyledDiv>
			<StyledTitle>로고</StyledTitle>
		</StyledDiv>
	);
}

const StyledDiv = styled.div``;
const StyledTitle = styled.span``;

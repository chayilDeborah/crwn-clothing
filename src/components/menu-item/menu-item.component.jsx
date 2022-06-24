
import { withRouter } from 'react-router-dom';

import './menu-item.styles';
import { BackgroundImageContainer, ContentContainer, MenuItemContainer, SubtitleContainer, TitleContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match  }) => (
    <MenuItemContainer
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />

        <ContentContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>  
        </ContentContainer>
    </MenuItemContainer> 
);

export default withRouter(MenuItem);
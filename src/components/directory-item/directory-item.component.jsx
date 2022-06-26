import {DirectoryItemContainer,BackgroundImage,DirectoryBodyContainer} from './directory-item.style.jsx';

const DirectoryItem = ({category}) => {
    return (
        <DirectoryItemContainer>
          <BackgroundImage imageUrl = {category.imageUrl} />
          <DirectoryBodyContainer>
            <h2>{category.title}</h2>
            <p>Shop now</p>
          </DirectoryBodyContainer>
        </DirectoryItemContainer>
      );
}


export default DirectoryItem;
import {DirectoryItemContainer,BackgroundImage,DirectoryBodyContainer} from './directory-item.style.jsx';
import {useNavigate} from 'react-router-dom'

const DirectoryItem = ({category}) => {

  const {title,imageUrl,route} = category
  const navigate = useNavigate();
  
  const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl = {imageUrl} />
          <DirectoryBodyContainer>
            <h2>{title}</h2>
            <p>Shop now</p>
          </DirectoryBodyContainer>
        </DirectoryItemContainer>
      );
}


export default DirectoryItem;
import './directory-item.style.scss';

const DirectoryItem = ({category}) => {
    return (
        <div className="directory-container">
          <div className="background-image" style={{
            'backgroundImage': `url(${category.imageUrl})`
          }}></div>
          <div className="directory-body-container">
            <h2>{category.title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      );
}


export default DirectoryItem;
import './index.scss'
import ListItem from '../ListItem/'

const List = ({listItems = []}) => {
    return  <ul className="list">
        {listItems.length > 0 && listItems.map(item=><ListItem key={item.id} label={item.name} />)}
    </ul>
}

export default List;
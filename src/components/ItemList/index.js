import React, {Component} from 'react';
import axios from 'axios';
import {ListWrapper,Item,ItemPreview} from './style';

class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <ListWrapper>
        {this.state.items.map((item, index) => {
          return (
            <Item key={item.name}>
              <ItemPreview src={item.preview_url} />
              {item.name}<br />
              ${item.price}.00<br />
              库存：{item.count}<br />
              单位净重：{item.weight} lbs
            </Item>
          )
        })}
      </ListWrapper>
    )
  }

  componentDidMount() {
    axios.get('api/list_items.json').then((res) => {
      const items = res.data.data
      this.setState(() => ({items}))
    })
  }
}

export default ItemList
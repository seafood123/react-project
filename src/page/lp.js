import React, {Component} from 'react';
import ItemCard from "./components/itemcard";

class ListPage extends Component{
    state = {};

    render(){
        const { Itemcard } = this.props;
        return(
            <ul className="list___itemview">
                {Itemcard && 
                    Itemcard.map((itemdata)=>{
                        return(
                            <ItemCard
                                ImageUrl={itemdata.ImageURL}
                                BrandName={itemdata.BrandName}
                                GoodsName = {itemdata.GoodsName}
                            />
                        )   
                    })}
            </ul>
        )
    }

}

export default ListPage;
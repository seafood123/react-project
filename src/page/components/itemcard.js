import React from "react";
function ItemCard({key, ImageUrl, BrandName, GoodsName}) {
    return(
        <li className="component component--item_card" key={key}>
            <img src={ImageUrl} className="image--itemcard" alt="" />
            <p>
                브랜드 명 : <span className="text--brand">{BrandName}</span>
            </p>
            <p>상품명 : {GoodsName}</p>
        </li>
    )
}

export default ItemCard;
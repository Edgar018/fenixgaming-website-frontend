import * as React from "react";
import NewsCard from "../newsCards/newsCards";
import "./cardGrid.css"

const GridCard = (): JSX.Element => {
    return (
        <div className="grid">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}

export default GridCard;
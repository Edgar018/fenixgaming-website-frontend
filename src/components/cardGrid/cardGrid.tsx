import react from "react";
import NewsCard from "../newsCards/newsCards";
import "./cardGrid.css"

export const GridCard = () => {
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
import React from "react";

interface HttpCatProps {
    statusCode: number;
}

const HttpCat: React.FC<HttpCatProps> = ({ statusCode }) => {
    const imageUrl = `https://http.cat/${statusCode}`
    return (
        <div>
            <img
                src={imageUrl}
                alt={`HTTP Cat ${statusCode}`}
            />
            <p>Status Code: {statusCode}</p>
        </div>
    )
}

export default HttpCat;
import React from 'react';
import HttpCat from '@/app/components/common/HttpCat'

interface ErrorPageProps {
    params: { status: string }
}

const ErrorPage = ({ params }: ErrorPageProps) => {
    //Pass status codes dynamically + 500 as default
    const statusCode = parseInt(params.status, 10) || 500;
    return (
        <div>
            <h1>Error: {statusCode}</h1>
            <HttpCat statusCode={statusCode} />
            <p>
                <a href="/">[Go Back Home](./dashboard)</a>
            </p>
        </div>
    )
}
export default ErrorPage;
// NOTE: if you only need a single static image of an error, insert it directly in:
// <img src="https://http.cat/404" alt="404 Not Found" />

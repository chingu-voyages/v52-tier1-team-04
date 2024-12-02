// app/error.tsx

'use client';

import HttpCat from '@/app/components/common/HttpCat';

const ErrorStatusMap: Record<string, number> = {
    'Unauthorized': 401,
    'Forbidden': 403,
    'Not_Found': 404,
    'Conflict': 409,
    'Default': 500
}

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const statusCode = ErrorStatusMap[error.name] || ErrorStatusMap['Default']

    const showReset = ![401, 403, 404].includes(statusCode)

    return (
        <div>
            <HttpCat statusCode={statusCode} />
            {showReset && (
                <button onClick={() => reset()}>"Try Again"</button>
            )}
        </div>
    )
}
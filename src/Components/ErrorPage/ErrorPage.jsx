import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center m-20 space-y-4">
            {(error.status && <h1 className="text-4xl font-bold">{error.status}</h1>)}
            {(error.statusText && <h1 className="text-2xl font-bold">Page {error.statusText}</h1>)}
            {(error.data && <h1 className="text-lg font-semibold">{error.data}</h1>)}
        </div>
    );
};

export default ErrorPage;
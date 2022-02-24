import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("szukaj");
}

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return (value) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", value);
        }

        const newSearch = searchParams.toString();
        history.push(`${location.pathname}?${newSearch}`);
    }
}
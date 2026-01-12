import { useState, useEffect, useRef, useCallback } from "react";


// Types
type GitHubRepo = {
    id: number;
    full_name: string;
    html_url: string;
    stargazers_count: number;
    description: string | null;
};
type GitHubSearchResponse = {
    total_count: number;
    items: GitHubRepo[];
}
type Status = "idle" | "loading" | "success" | "error";

// Hooks
export function useDebouncedValue<T>(value: T, delayMs: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delayMs);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delayMs])

    return debouncedValue;
}



// Components
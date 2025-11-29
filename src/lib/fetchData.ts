export const fetchData = async ({
    url,
    revalidate,
}: {
    url: string;
    revalidate?: number;
}) => {
    const res = await fetch(url, {
        next: { revalidate },
    });
    const data = await res.json();
    return data;
};

import { useEffect, useState } from "react";
import { getVulnerabilities } from "../services/api";

export function useVulnerabilities(filter) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        getVulnerabilities(filter).then(setData).finally(() => setLoading(true))
        //quando a promise resolver, passe o resultado para o estado
    }, [filter])

    return {data, loading}
}
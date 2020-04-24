import React from "react";
import { useQuery } from "@apollo/react-hooks";

import './index.scss';

const Query = ({ children, query, id }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: id }
    });

    if (loading) return (
        <div className="loader-wrapper">
            <div className="loader" />
        </div>
    );
    if (error) return <p></p>;

    return children({ data });
};

export default Query;

import { useState, useEffect } from 'react';

export default function Kategoria(props) {
    const [categories, setCategories] = useState("http://localhost:8000/api/categories");

    useEffect
    return (
        <>
            <option>{props.kategorianev}</option>
        </>
    )
}
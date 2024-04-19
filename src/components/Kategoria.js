import { useState, useEffect } from 'react';

export default function Kategoria() {
    const [categories, setCategories] = useState("http://localhost:8000/api/categories");
/**
 * <select>
                {categories.map((category) =>
                    <Categories
                        adatok={categories}
                        key={category.id}
                        kategorianev={category.kategorianev}
                    />
                )}

            </select>
 */
    return (
        <>
            <form>
                <select>
                    <option value="termeszetvedelem">Természetvédelem</option>
                    <option value="termeszetvedelem">Történelem</option>
                    <option value="termeszetvedelem">Matematika</option>
                </select>
            </form>
        </>
    )
}
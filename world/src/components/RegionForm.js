import React, { useState } from "react";

export default function RegionForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  const [search, setSearch] = useState({ name: ''});
  const handleInputChange = event => {
    setSearch({...search, name: event.target.value});
  }
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(search.region)}>
        <input
          onChange={handleInputChange}
          placeholder="Region"
          value={search.region}
          name="region"
        />
      </form>
    </section>
  );
}
